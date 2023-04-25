<?php

/**
 * License activation class
 *
 * @since 2.7.5
 */
class Modula_License_Activator {

	private $main_item_name = 'Modula Grid Gallery';
	private $verify_alternative_server;

	/**
	 * The ID of the item in EDD, used for license activation. Going with Modula PRO as it is contained in every
	 * Modula PRO license.
	 *
	 * @var int
	 */
	private $modula_pro_id = 212;


	/**
	 * Holds the class object.
	 *
	 * @since 2.7.5
	 *
	 * @var object
	 */
	public static $instance;

	/**
	 * Modula_License_Activator constructor.
	 */
	private function __construct() {

		register_activation_hook( MODULA_FILE, array( $this, 'activate_license' ) );
		register_deactivation_hook( MODULA_FILE, array( $this, 'deactivate_license' ) );

		add_action( 'admin_init', array( $this, 'register_license_option' ) );
		add_action( 'wp_ajax_modula_license_action', array( $this, 'ajax_license_action' ) );
		add_action( 'wp_ajax_modula_forgot_license', array( $this, 'ajax_forgot_license' ) );
		/*add_action( 'wp_ajax_modula_save_license', array( $this, 'activate_license_ajax' ) );
		add_action( 'wp_ajax_modula_deactivate_license', array( $this, 'deactivate_license_ajax' ) );*/

	}

	/**
	 * Returns the singleton instance of the class.
	 *
	 * @return object The Modula_License_Activator object.
	 * @since 2.5.0
	 */
	public static function get_instance() {

		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Modula_License_Activator ) ) {
			self::$instance = new Modula_License_Activator();
		}

		return self::$instance;

	}

	/**
	 * AJAX activate license
	 *
	 * @return void
	 */
	public function activate_license_ajax() {

		// retrieve the license from the AJAX
		$license      = trim( $_POST['license'] );
		$license_data = false;

		$this->verify_alternative_server = isset( $_POST['altServer'] ) ? sanitize_text_field( $_POST['altServer'] ) : 'false';

		update_option( 'modula_pro_alernative_server', $this->verify_alternative_server );

		$store_url = ( 'true' == $this->verify_alternative_server ) ? MODULA_ALTERNATIVE_STORE_URL : MODULA_STORE_URL;

		// data to send in our API request
		$api_params = array(
			'edd_action' => 'activate_license',
			'license'    => $license,
			'item_id'    => $this->modula_pro_id, // The ID of the item in EDD
			'url'        => home_url(),
			'extensions' => implode(',',$this->get_installed_extensions() )
		);

		// Call the custom API.
		$response = wp_remote_post(
			$store_url,
			array(
				'timeout'   => 15,
				'sslverify' => false,
				'body'      => $api_params,
			)
		);

		// make sure the response came back okay
		if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {
			if ( is_wp_error( $response ) ) {
				$message = $response->get_error_message();
			} else {
				$message = esc_html__( 'An error occurred, please try again.', 'modula-best-grid-gallery' );
			}
		} else {
			$license_data = json_decode( wp_remote_retrieve_body( $response ) );
			if ( false === $license_data->success ) {
				switch ( $license_data->error ) {
					case 'expired':
						$message = sprintf(
							esc_html__( 'Your license key expired on %s.', 'modula-best-grid-gallery' ),
							date_i18n( get_option( 'date_format' ), strtotime( $license_data->expires, current_time( 'timestamp' ) ) )
						);
						break;
					case 'disabled':
					case 'revoked':
						$message = esc_html__( 'Your license key has been disabled.', 'modula-best-grid-gallery' );
						break;
					case 'missing':
						$message = esc_html__( 'Invalid license.', 'modula-best-grid-gallery' );
						break;
					case 'invalid':
					case 'site_inactive':
						$message = esc_html__( 'Your license is not active for this URL.', 'modula-best-grid-gallery' );
						break;
					case '§':
						$message = sprintf( __( 'This appears to be an invalid license key for %s.', 'modula-best-grid-gallery' ), $this->main_item_name );
						break;
					case 'no_activations_left':
						$message = esc_html__( 'Your license key has reached its activation limit.', 'modula-best-grid-gallery' );
						break;
					default:
						$message = esc_html__( 'An error occurred, please try again.', 'modula-best-grid-gallery' );
						break;
				}
			}
		}

		// Check if anything passed on a message constituting a failure
		if ( ! empty( $message ) ) {
			wp_send_json_error( array( 'message' => $message ) );
			die();
		}

		// Let's see if is update or just activate again the same license
		$license = $this->sanitize_license( $license );

		// $license_data->license will be either "valid" or "invalid"
		update_option( 'modula_pro_license_key', $license );
		update_option( 'modula_pro_license_status', $license_data );
		do_action( 'modula_after_license_save' );
		wp_send_json_success( array( 'message' => esc_html__( 'License activated', 'modula-best-grid-gallery' ) ) );
		die();
	}

	public function deactivate_license_ajax() {

		// retrieve the license from the database
		$license = trim( get_option( 'modula_pro_license_key' ) );

		$this->verify_alternative_server = get_option( 'modula_pro_alernative_server' );

		$store_url = ( 'true' == $this->verify_alternative_server ) ? MODULA_ALTERNATIVE_STORE_URL : MODULA_STORE_URL;
		// data to send in our API request
		$api_params = array(
			'edd_action' => 'deactivate_license',
			'license'    => $license,
			'item_id'    => $this->modula_pro_id,
			'url'        => home_url(),
			'extensions' => implode(',',$this->get_installed_extensions() )
		);

		// Call the custom API.
		$response = wp_remote_post(
			$store_url,
			array(
				'timeout'   => 15,
				'sslverify' => false,
				'body'      => $api_params,
			)
		);

		// make sure the response came back okay
		if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {

			if ( is_wp_error( $response ) ) {
				$message = $response->get_error_message();
			} else {
				$message = esc_html__( 'An error occurred, please try again.', 'modula-best-grid-gallery' );
			}

			wp_send_json_error( array( 'message' =>$message ) );
			die();
		}

		// decode the license data
		$license_data = json_decode( wp_remote_retrieve_body( $response ) );

		// $license_data->license will be either "deactivated" or "failed"
		//if ( $license_data->license == 'deactivated' ){
		delete_option( 'modula_pro_license_status' );
		//}

		do_action( 'modula_after_license_deactivated' );

		wp_send_json_success( array( 'message' => esc_html__( 'License deactivated', 'modula-best-grid-gallery' ) ) );
		die();
	}

	public function register_license_option() {
		// creates our settings in the options table
		register_setting( 'modula_pro_license_key', 'modula_pro_license_key', array( $this, 'sanitize_license' ) );
	}

	public function sanitize_license( $new ) {
		$old = get_option( 'modula_pro_license_key' );
		if ( $old && $old != $new ) {
			delete_option( 'modula_pro_license_status' ); // new license has been entered, so must reactivate
			delete_transient( 'modula_pro_licensed_extensions' );
		}

		return $new;
	}

	public function activate_license() {

		check_admin_referer( 'activate-plugin_' . plugin_basename( MODULA_FILE ) );

		$license      = trim( get_option( 'modula_pro_license_key' ) );
		$license_data = false;

		$store_url = ( 'true' == get_option( 'modula_pro_alernative_server' ) ) ? MODULA_ALTERNATIVE_STORE_URL : MODULA_STORE_URL;

		// data to send in our API request
		$api_params = array(
			'edd_action'    => 'activate_license',
			'license'       => $license,
			'item_id'       => $this->modula_pro_id,
			'url'           => home_url(),
			'extensions'    => implode( ',', $this->get_installed_extensions() ),
			'action_status' => 'activate-plugin',
		);

		// Call the custom API.
		$response = wp_remote_post(
			$store_url,
			array(
				'timeout'   => 15,
				'sslverify' => false,
				'body'      => $api_params,
			)
		);

		// make sure the response came back okay
		if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {
			return false;
		} else {
			$license_data = json_decode( wp_remote_retrieve_body( $response ) );
			if ( false === $license_data->success ) {
				return false;
			}
		}

		// Check if anything passed on a message constituting a failure
		if ( ! empty( $message ) ) {
			return false;
		}

		// Let's see if is update or just activate again the same license
		$license = $this->sanitize_license( $license );

		update_option( 'modula_pro_license_status', $license_data );
		do_action( 'modula_after_license_save' );

		return true;
	}

	/**
	 * Deactivate license
	 *
	 * @return void
	 */
	public function deactivate_license() {

		check_admin_referer( 'deactivate-plugin_' . plugin_basename( MODULA_FILE ) );

		// retrieve the license from the database
		$license = trim( get_option( 'modula_pro_license_key' ) );

		$store_url = ( 'true' == get_option( 'modula_pro_alernative_server' ) ) ? MODULA_ALTERNATIVE_STORE_URL : MODULA_STORE_URL;

		// data to send in our API request
		$api_params = array(
			'edd_action' => 'deactivate_license',
			'license'    => $license,
			'item_id'    => $this->modula_pro_id,
			'url'        => home_url(),
			'extensions' => implode(',',$this->get_installed_extensions() ),
			'action_status' => 'deactivate-plugin',
		);

		// Call the custom API.
		$response = wp_remote_post(
			$store_url,
			array(
				'timeout'   => 15,
				'sslverify' => false,
				'body'      => $api_params,
			)
		);

		delete_option( 'modula_pro_license_status' );

		do_action( 'modula_after_license_deactivated' );

	}

	/**
	 * AJAX license activation.
	 *
	 * @return void
	 */
	public function ajax_license_action() {
		// run a quick security check.
		if ( ! isset( $_POST['nonce'] ) ) {
			wp_send_json_error(
				array(
					'message' => __( 'Nonce not set', 'strong-testimonials' )
				)
			);
		}

		check_admin_referer( 'modula_license_nonce', 'nonce' );

		if ( ! isset( $_POST['click_action'] ) ) {
			wp_send_json_error(
				array(
					'message' => __( 'Action not set', 'strong-testimonials' )
				)
			);
		}

		if ( ! isset( $_POST['license'] ) ) {
			wp_send_json_error(
				array(
					'message' => __( 'License not set', 'strong-testimonials' )
				)
			);
		}

		$action = sanitize_text_field( $_POST['click_action'] );

		if ( 'activate' === $action ) {
			$this->activate_license_ajax();
		} else {
			$this->deactivate_license_ajax();
		}
	}

	/**
	 * Forgot license functionality.
	 *
	 * @return void
	 */
	public function ajax_forgot_license() {

		// run a quick security check.
		if ( ! isset( $_POST['nonce'] ) ) {
			wp_send_json_error(
				array(
					'message' => __( 'Nonce not set', 'strong-testimonials' )
				)
			);
		}

		if ( ! isset( $_POST['email'] ) ) {
			wp_send_json_error(
				array(
					'message' => __( 'Email not set', 'strong-testimonials' )
				)
			);
		}

		check_admin_referer( 'modula_license_nonce', 'nonce' );
		$email = sanitize_email( wp_unslash( $_POST['email'] ) );

		// data to send in our API request.
		$api_params = array(
			'edd_action' => 'forgot_license',
			'url'        => home_url(),
			'email'      => $email

		);

		// Call the custom API.
		$response = wp_remote_post(
			MODULA_STORE_URL,
			array(
				'timeout'   => 15,
				'sslverify' => false,
				'body'      => $api_params,
			)
		);

		// make sure the response came back okay.
		if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {
			// If it's not a regular action it means it's most probably on plugin deactivation.
			if ( is_wp_error( $response ) ) {
				$message = $response->get_error_message();
			} else {
				$message = __( 'An error occurred, please try again.', 'strong-testimonials-pro' );
			}
			wp_send_json_error( array( 'message' => $message ) );
		}
		$json_response = json_decode( wp_remote_retrieve_body( $response ), true );
		if ( $json_response['success'] ) {
			wp_send_json_success( array( 'message' => $json_response['message'] ) );
		}
	}

	/**
	 * Retrieve installed extensions
	 *
	 * @return array
	 */
	public function get_installed_extensions() {
		// Get all installed extensions.
		$plugins    = get_option( 'active_plugins' );
		$extensions = array();
		if ( ! empty( $plugins ) ) {
			foreach ( $plugins as $plugin ) {
				// Search only for Modula extensions.
				if ( false !== strpos( $plugin, 'modula-' ) ) {
					$extensions[] = basename( $plugin, '.php' );
				}
			}
		}

		return $extensions;
	}

	/**
	 * Handle extensions activation/deactivation hooks.
	 *
	 * @param string $action    Action to be performed.
	 * @param array  $extension Extension to be activated/deactivated.
	 *
	 * @return void
	 */
	public function handle_extension_action( $action, $extension ) {

		// Bounce if there is no extension.
		if ( empty( $extension ) ) {
			return;
		}

		// Bounce if there is no action.
		if ( empty( $action ) ) {
			return;
		}
		$ext_action = 'activate_license';
		$ext_text   = 'activate-ext';

		if ( 'activate' === $action ) {
			check_admin_referer( 'activate-plugin_' . plugin_basename( $extension['plugin'] ) );
		} else {
			check_admin_referer( 'deactivate-plugin_' . plugin_basename( $extension['plugin'] ) );
			$ext_action = 'deactivate_license';
			$ext_text   = 'deactivate-ext';
		}

		$license   = trim( get_option( 'modula_pro_license_key' ) );
		$store_url = ( 'true' === get_option( 'modula_pro_alernative_server' ) ) ? MODULA_ALTERNATIVE_STORE_URL : MODULA_STORE_URL;
		// data to send in our API request.
		$api_params = array(
			'edd_action'    => $ext_action,
			'license'       => $license,
			'item_id'       => $this->modula_pro_id,
			'url'           => home_url(),
			'extensions'    => $extension['slug'],
			'action_status' => $ext_text,
		);

		// Call the custom API.
		$response = wp_remote_post(
			$store_url,
			array(
				'timeout'   => 15,
				'sslverify' => false,
				'body'      => $api_params,
			)
		);
	}
}

Modula_License_Activator::get_instance();
