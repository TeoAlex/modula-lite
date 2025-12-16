<?php
/**
 * Handles navigation and menu-related upsells
 *
 * @since 2.13.0
 */
class Modula_Navigation_Handler extends Modula_Upsell_Base {

	/**
	 * Constructor
	 */
	public function __construct() {
		parent::__construct();
		$this->register_navigation_hooks();
	}

	/**
	 * Register navigation-related hooks
	 */
	private function register_navigation_hooks() {
		// Upgrade to PRO plugin action link
		add_filter( 'plugin_action_links_' . MODULA_FILE, array( $this, 'filter_action_links' ), 60 );

		// GO PRO admin menu link
		add_filter( 'modula_admin_page_link', array( $this, 'add_go_pro_menu_item' ) );
		add_action( 'admin_init', array( $this, 'go_pro_redirect' ) );

		if ( $this->extensions->is_upgradable_addon( 'modula-whitelabel' ) ) {
			add_filter( 'modula_admin_page_tabs', array( $this, 'add_whitelabel_tab' ), 140 );
		}
	}

	/**
	 * Add the Upgrade to PRO plugin action link
	 *
	 * @param array $links Existing plugin action links.
	 * @return array Modified links array.
	 * @since 2.6.0
	 */
	public function filter_action_links( $links ) {
		$upgrade = apply_filters(
			'modula_upgrade_plugin_action',
			array(
				'upgrade_available' => true,
				'link'              => '<a  target="_blank" class="modula-lite-vs-pro" href="https://wp-modula.com/pricing/?utm_source=modula-lite&utm_medium=plugin_settings&utm_campaign=upsell">' . esc_html__( 'Upgrade to Premium', 'modula-best-grid-gallery' ) . '</a>',
			)
		);

		if ( ! $upgrade['upgrade_available'] ) {
			return $links;
		}

		array_unshift( $links, $upgrade['link'] );

		return $links;
	}

	/**
	 * Add Go Pro menu item
	 *
	 * @param array $links Existing menu links.
	 * @return array Modified links array.
	 */
	public function add_go_pro_menu_item( $links ) {
		$links['gopro'] = array(
			'page_title' => esc_html__( 'Get Premium', 'modula-best-grid-gallery' ),
			'menu_title' => esc_html__( 'Get Premium', 'modula-best-grid-gallery' ),
			'capability' => 'manage_options',
			'menu_slug'  => 'go-pro',
			'function'   => array( $this, 'go_pro_redirect' ),
			'priority'   => 999,
		);

		return $links;
	}

	/**
	 * Redirect to Go Pro page
	 */
	public function go_pro_redirect() {
		if ( isset( $_GET['post_type'] ) && 'modula-gallery' === $_GET['post_type'] && isset( $_GET['page'] ) && 'go-pro' === $_GET['page'] ) {
			$url = 'https://wp-modula.com/pricing/?utm_source=modula-lite&utm_medium=admin-menu&utm_campaign=upsell';
			wp_redirect( $url );
			exit();
		}
	}

	/**
	 * Add whitelabel tab
	 *
	 * @param array $tabs Existing tabs array.
	 * @return array Modified tabs array.
	 */
	public function add_whitelabel_tab( $tabs ) {
		if ( ! $this->extensions->is_upgradable_addon( 'modula-whitelabel' ) ) {
			return $tabs;
		}

		$tabs['whitelabel'] = array(
			'label'    => esc_html__( 'Whitelabel', 'modula-best-grid-gallery' ),
			'priority' => 130,
			'badge'    => 'PRO',
		);

		return $tabs;
	}
}
