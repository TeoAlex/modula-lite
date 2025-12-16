<?php
require_once MODULA_PATH . 'includes/admin/rest-api/class-modula-extensions-base.php';
require_once MODULA_PATH . 'includes/admin/rest-api/class-modula-settings-sanitizer.php';

class Modula_Rest_Api {

	private $namespace = 'modula-best-grid-gallery/v1';
	private $settings  = null;

	public function __construct() {
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
		
		Modula_Extensions_Base::get_instance();

		$this->settings = Modula_Settings::get_instance();
	}

	public function register_routes() {
		register_rest_route(
			$this->namespace,
			'/general-settings',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'get_settings' ),
				'permission_callback' => array( $this, 'settings_permissions_check' ),
			)
		);
		register_rest_route(
			$this->namespace,
			'/general-settings',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'update_settings' ),
				'permission_callback' => array( $this, 'settings_permissions_check' ),
			)
		);
		register_rest_route(
			$this->namespace,
			'/general-settings-tabs',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'get_tabs' ),
				'permission_callback' => array( $this, 'settings_permissions_check' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/video/youtube',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'youtube_action' ),
				'permission_callback' => array( $this, 'settings_permissions_check' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/video/vimeo',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'vimeo_action' ),
				'permission_callback' => array( $this, 'settings_permissions_check' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/license',
			array(
				'methods'             => 'POST',
				'callback'            => array( $this, 'license_action' ),
				'permission_callback' => array( $this, 'settings_permissions_check' ),
			)
		);

		register_rest_route(
			$this->namespace,
			'/extensions',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'get_extensions' ),
				'permission_callback' => array( $this, 'settings_permissions_check' ),
			)
		);
	}

	public function get_settings() {
		return new \WP_REST_Response( $this->settings->get_settings(), 200 );
	}

	public function update_settings( $request ) {
		$settings = $request->get_json_params();

		if ( empty( $settings ) || ! is_array( $settings ) ) {
			return new \WP_REST_Response( 'No settings to save.', 400 );
		}

		$sanitization_schema = $this->settings->settings_sanitization();
		$sanitizer           = Modula_Settings_Sanitizer::get_instance();

		$sanitized_settings = array();

		foreach ( $settings as $option => $value ) {
			if ( ! isset( $sanitization_schema[ $option ] ) || ! is_array( $sanitization_schema[ $option ] ) ) {
				continue;
			}

			$value = $this->sanitize_setting_value( $value, $sanitization_schema[ $option ], $sanitizer );

			update_option( $option, $value );

			do_action( 'modula_settings_api_update_' . $option, $value );

			$sanitized_settings[ $option ] = $value;
		}

		return new \WP_REST_Response( $sanitized_settings, 200 );
	}

	public function get_tabs() {
		return new \WP_REST_Response( $this->settings->get_tabs(), 200 );
	}

	public function youtube_action( $request ) {
		$data = $request->get_json_params();

		if ( empty( $data ) || empty( $data['action'] ) ) {
			return new \WP_REST_Response( 'No action to take.', 400 );
		}

		if ( class_exists( 'Modula_Pro\Extensions\Video\Admin\Google_Auth' ) ) {
			$youtube_oauth = Modula_Pro\Extensions\Video\Admin\Google_Auth::get_instance();
			if ( 'refresh' === $data['action'] ) {
				$youtube_oauth->refresh_token( false );
			} elseif ( 'disconnect' === $data['action'] ) {
				delete_option( Modula_Pro\Extensions\Video\Admin\Google_Auth::$access_token );
				delete_option( Modula_Pro\Extensions\Video\Admin\Google_Auth::$refresh_token );
				delete_option( Modula_Pro\Extensions\Video\Admin\Google_Auth::$expiry_date );
			}
		}

		return new \WP_REST_Response( true, 200 );
	}

	public function vimeo_action( $request ) {
		$data = $request->get_json_params();

		if ( empty( $data ) || empty( $data['action'] ) ) {
			return new \WP_REST_Response( 'No action to take.', 400 );
		}

		if ( class_exists( 'Modula_Pro\Extensions\Video\Admin\Vimeo_Auth' ) ) {
			Modula_Pro\Extensions\Video\Admin\Vimeo_Auth::get_instance();
			if ( 'disconnect' === $data['action'] ) {
				delete_option( Modula_Pro\Extensions\Video\Admin\Vimeo_Auth::$access_token );
			}
		}

		return new \WP_REST_Response( true, 200 );
	}

	public function settings_permissions_check() {

		// Check if the user has the capability to manage options
		return current_user_can( 'manage_options' );
	}

	public function license_action( $request ) {
		$body        = $request->get_json_params();
		$license_key = isset( $body['license_key'] ) ? $body['license_key'] : '';
		$action      = isset( $body['action'] ) ? $body['action'] : '';
		$saved       = get_option( 'modula_pro_license_key', '' );
		if ( empty( $license_key ) && empty( $saved ) ) {
			return new \WP_REST_Response(
				array(
					'message' => 'no_license_key',
					'status'  => 'error',
				),
				200
			);
		}

		if ( ! class_exists( 'Modula_Pro\Extensions\Licensing' ) ) {
			return new \WP_REST_Response( 'Modula Pro is not installed.', 400 );
		}

		$license = Modula_Pro\Extensions\Licensing::get_instance();

		if ( 'activate' === $action ) {
			return new \WP_REST_Response( $license->activate_license( $license_key ), 200 );
		}

		if ( 'deactivate' === $action ) {
			return new \WP_REST_Response( $license->deactivate_license( $license_key ), 200 );
		}

		return new \WP_REST_Response( $license->check_license(), 200 );
	}

	public function get_extensions() {
		$instance = class_exists( 'Modula_Pro\Extensions\Extensions' )
			? Modula_Pro\Extensions\Extensions::get_instance()
			: Modula_Extensions_Base::get_instance();

		return new \WP_REST_Response( $instance->get_extensions(), 200 );
	}

	/**
	 * Sanitize settings payload based on provided sanitization schema.
	 *
	 * @param mixed                    $value   Value to sanitize.
	 * @param array|string             $schema  Sanitization schema for the value.
	 * @param Modula_Settings_Sanitizer $sanitizer Sanitizer instance.
	 *
	 * @return mixed
	 */
	private function sanitize_setting_value( $value, $schema, $sanitizer ) {
		if ( is_array( $value ) && $this->is_associative_array( $schema ) ) {
			$sanitized = array();

			foreach ( $value as $key => $sub_value ) {
				if ( isset( $schema[ $key ] ) ) {
					$sanitized[ $key ] = $this->sanitize_setting_value( $sub_value, $schema[ $key ], $sanitizer );
				} else {
					$sanitized[ $key ] = $sub_value;
				}
			}

			return $sanitized;
		}

		if ( ! is_array( $value ) && is_array( $schema ) ) {
			$is_numeric_indexed = array_keys( $schema ) === range( 0, count( $schema ) - 1 );

			if ( $is_numeric_indexed && isset( $schema[0] ) && is_string( $schema[0] ) ) {
				return $this->run_sanitizer( $schema[0], $value, $sanitizer );
			}

			if ( ! $is_numeric_indexed && 1 === count( $schema ) ) {
				$sanitizer_key = array_keys( $schema )[0];
				$args          = $schema[ $sanitizer_key ];

				return $this->run_sanitizer( $sanitizer_key, $value, $sanitizer, $args );
			}
		}

		return $value;
	}

	/**
	 * Run a sanitizer method or custom handler based on schema.
	 *
	 * @param string                   $sanitizer_key Sanitizer key.
	 * @param mixed                    $value         Value to sanitize.
	 * @param Modula_Settings_Sanitizer $sanitizer     Sanitizer instance.
	 * @param mixed                    $args          Optional args for sanitizer (used for enum).
	 *
	 * @return mixed
	 */
	private function run_sanitizer( $sanitizer_key, $value, $sanitizer, $args = array() ) {
		if ( 'enum' === $sanitizer_key && is_array( $args ) && ! empty( $args ) ) {
			return in_array( $value, $args, true ) ? $value : reset( $args );
		}

		if ( method_exists( $sanitizer, $sanitizer_key ) ) {
			return $sanitizer->$sanitizer_key( $value );
		}

		return $value;
	}

	/**
	 * Check if an array is associative.
	 *
	 * @param array $unknown_array Array to check.
	 *
	 * @return bool
	 */
	private function is_associative_array( $unknown_array ) {
		if ( ! is_array( $unknown_array ) || array() === $unknown_array ) {
			return false;
		}

		return array_keys( $unknown_array ) !== range( 0, count( $unknown_array ) - 1 );
	}
}
