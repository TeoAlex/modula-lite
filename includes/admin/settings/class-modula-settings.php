<?php

class Modula_Settings {
	public static $instance = null;
	/**
	 * Create an instance of the class
	 *
	 * @return Modula_Settings
	 *
	 * @since 2.11.0
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Modula_Settings ) ) {
			self::$instance = new Modula_Settings();
		}

		return self::$instance;
	}

	public function __construct() {
		add_action( 'modula_settings_api_update_modula_roles', array( $this, 'set_capabilities' ) );
	}

	public static function get_settings() {
		return get_option( 'modula_settings', array() );
	}

	public function get_tabs() {
		$subtabs = array(
			'standalone'      => array(
				'label'  => esc_html__( 'Standalone', 'modula-best-grid-gallery' ),
				'badge'  => 'PRO',
				'locked' => true,
				'config' => apply_filters( 'modula_standalone_settings_tab', $this->get_standalone() ),
			),
			'compression'     => array(
				'label'  => esc_html__( 'Performance', 'modula-best-grid-gallery' ),
				'badge'  => 'PRO',
				'locked' => true,
				'config' => apply_filters( 'modula_compression_settings_tab', $this->get_compression() ),
			),
			'shortcodes'      => array(
				'label'  => esc_html__( 'Advanced Shortcodes', 'modula-best-grid-gallery' ),
				'badge'  => 'PRO',
				'locked' => true,
				'config' => apply_filters( 'modula_shortcodes_settings_tab', $this->get_shortcodes() ),
			),
			'watermark'       => array(
				'label'  => esc_html__( 'Watermark', 'modula-best-grid-gallery' ),
				'badge'  => 'PRO',
				'locked' => true,
				'config' => apply_filters( 'modula_watermark_settings_tab', $this->get_watermark() ),
			),
			'image_licensing' => array(
				'label'  => esc_html__( 'Image Licensing', 'modula-best-grid-gallery' ),
				'locked' => false,
				'config' => apply_filters( 'modula_image_licensing_settings_tab', $this->get_image_licensing() ),
			),
			'roles'           => array(
				'label'  => esc_html__( 'Roles', 'modula-best-grid-gallery' ),
				'badge'  => 'PRO',
				'locked' => true,
				'config' => apply_filters( 'modula_roles_settings_tab', $this->get_roles() ),
			),
			'social_media'    => array(
				'label'  => esc_html__( 'Social Media Accounts', 'modula-best-grid-gallery' ),
				'badge'  => '',
				'locked' => false,
				'config' => apply_filters( 'modula_social_media_settings_tab', $this->get_social_media() ),
			),
			'modula_ai'       => array(
				'label'  => esc_html__( 'Modula AI', 'modula-best-grid-gallery' ),
				'locked' => false,
				'config' => apply_filters( 'modula_ai_settings_tab', $this->get_modula_ai() ),
			),
		);

		$subtabs = apply_filters( 'modula_admin_page_subtabs', $subtabs );

		$tabs = array(
			array(
				'label'   => esc_html__( 'Display', 'modula-best-grid-gallery' ),
				'slug'    => 'display',
				'subtabs' => array(
					'standalone'      => $subtabs['standalone'],
					'shortcodes'      => $subtabs['shortcodes'],
					'image_licensing' => $subtabs['image_licensing'],
				),
			),
			array(
				'label'   => esc_html__( 'Optimization', 'modula-best-grid-gallery' ),
				'slug'    => 'optimization',
				'subtabs' => array(
					'compression' => $subtabs['compression'],
					'imageseo'    => $subtabs['modula_ai'],
				),
			),
			array(
				'label'   => esc_html__( 'Protection', 'modula-best-grid-gallery' ),
				'slug'    => 'protection',
				'subtabs' => array(
					'watermark' => $subtabs['watermark'],
					'roles'     => $subtabs['roles'],
				),
			),
			array(
				'label'   => esc_html__( 'Social Media', 'modula-best-grid-gallery' ),
				'slug'    => 'social_media',
				'subtabs' => array(
					'social_media' => $subtabs['social_media'],
				),
			),
		);
		return apply_filters( 'modula_admin_page_main_tabs', $tabs );
	}

	private function get_standalone() {
		$standalone = get_option( 'modula_standalone', array() );

		return array(
			'option' => 'modula_standalone',
			'fields' => array(
				array(
					'type'   => 'combo',
					'fields' => array(
						array(
							'type'         => 'options_toggle',
							'name'         => 'gallery.enable_rewrite',
							'label'        => esc_html__( 'Enable for Galleries', 'modula-best-grid-gallery' ),
							'default'      => ( isset( $standalone['gallery'] ) && isset( $standalone['gallery']['enable_rewrite'] ) ) ? $standalone['gallery']['enable_rewrite'] : 'disabled',
							'trueValue'    => 'enabled',
							'falseValue'   => 'disabled',
							'size'         => 'small',
							'sanitization' => array(
								'enum' => array( 'enabled', 'disabled' ),
							),
						),
						array(
							'type'         => 'text',
							'name'         => 'gallery.slug',
							'label'        => esc_html__( 'Gallery Slug', 'modula-best-grid-gallery' ),
							'size'         => 'small',
							'default'      => ( isset( $standalone['gallery'] ) && isset( $standalone['gallery']['slug'] ) ) ? $standalone['gallery']['slug'] : 'modula-gallery',
							'conditions'   => array(
								array(
									'field'      => 'gallery.enable_rewrite',
									'comparison' => '===',
									'value'      => 'enabled',
								),
							),
							'sanitization' => array( 'text' ),
						),
						array(
							'name'        => 'gallery.enable_rewrite_description',
							'type'        => 'paragraph',
							'description' => esc_html__( 'This option allows you to access galleries created through the post type with unique URLs. Now your galleries can have dedicated gallery pages.', 'modula-best-grid-gallery' ),
							'label'       => esc_html__( 'INFO', 'modula-best-grid-gallery' ),
							'size'        => 'large',
						),
					),
				),
				array(
					'type'   => 'combo',
					'fields' => array(
						array(
							'type'         => 'options_toggle',
							'name'         => 'album.enable_rewrite',
							'label'        => esc_html__( 'Enable for Albums', 'modula-best-grid-gallery' ),
							'default'      => ( isset( $standalone['album'] ) && isset( $standalone['album']['enable_rewrite'] ) ) ? $standalone['album']['enable_rewrite'] : 'disabled',
							'trueValue'    => 'enabled',
							'falseValue'   => 'disabled',
							'size'         => 'small',
							'sanitization' => array( 'enum' => array( 'enabled', 'disabled' ) ),
						),
						array(
							'type'         => 'text',
							'name'         => 'album.slug',
							'label'        => esc_html__( 'Album Slug', 'modula-best-grid-gallery' ),
							'default'      => ( isset( $standalone['album'] ) && isset( $standalone['album']['slug'] ) ) ? $standalone['album']['slug'] : 'modula-album',
							'conditions'   => array(
								array(
									'field'      => 'album.enable_rewrite',
									'comparison' => '===',
									'value'      => 'enabled',
								),
							),
							'size'         => 'small',
							'sanitization' => array( 'text' ),
						),
						array(
							'name'        => 'album.enable_rewrite_description',
							'type'        => 'paragraph',
							'size'        => 'large',
							'description' => esc_html__( 'This option allows you to access albums created through the post type with unique URLs. Now your albums can have dedicated album pages.', 'modula-best-grid-gallery' ),
							'label'       => esc_html__( 'INFO', 'modula-best-grid-gallery' ),
						),
					),
				),
			),
		);
	}

	private function get_compression() {
		$run_compression    = apply_filters( 'modula_speedup_run_local_compression', 'production' === wp_get_environment_type() );
		$run_compression    = true;
		$compression        = get_option( 'modula_speedup', array() );
		$compression_values = array(
			array(
				'label' => esc_html__( 'Lossless Compresion', 'modula-best-grid-gallery' ),
				'value' => 'lossless',
			),
			array(
				'label' => esc_html__( 'Lossy Compresion', 'modula-best-grid-gallery' ),
				'value' => 'lossy',
			),
			array(
				'label' => esc_html__( 'Glossy Compresion', 'modula-best-grid-gallery' ),
				'value' => 'glossy',
			),
			array(
				'label' => esc_html__( 'Disable Compresion', 'modula-best-grid-gallery' ),
				'value' => 'disabled',
			),
		);

		$fields = array(
			'option' => 'modula_speedup',
			'fields' => array(
				array(
					'type'         => 'options_toggle',
					'name'         => 'enable_optimization',
					'label'        => 'Compression',
					'default'      => isset( $compression['enable_optimization'] ) ? $compression['enable_optimization'] : 'enabled',
					'trueValue'    => 'enabled',
					'falseValue'   => 'disabled',
					'disabled'     => ! $run_compression,
					'description'  => esc_html__( 'Enable this option if you want to compress your gallery images. Then, choose the desired compression type: Lossless (full quality, fewer bytes), Lossy (balanced quality and size), Glossy (optimized for web), or Disable to turn off image compression.', 'modula-best-grid-gallery' ),
					'sanitization' => array( 'enum' => array( 'enabled', 'disabled' ) ),

				),
				array(
					'type'   => 'combo',
					'fields' => array(
						array(
							'type'         => 'select',
							'name'         => 'thumbnail_optimization',
							'label'        => 'Thumbnail Compression',
							'default'      => isset( $compression['thumbnail_optimization'] ) ? $compression['thumbnail_optimization'] : 'lossy',
							'options'      => $compression_values,
							'disabled'     => ! $run_compression,
							'description'  => esc_html__( 'Choose the compression type for your gallery thumbnails.', 'modula-best-grid-gallery' ),
							'size'         => 'large',
							'sanitization' => array( 'enum' => $compression_values ),
						),
						array(
							'type'         => 'select',
							'name'         => 'lightbox_optimization',
							'label'        => 'Lightbox Compression',
							'default'      => isset( $compression['lightbox_optimization'] ) ? $compression['lightbox_optimization'] : 'lossless',
							'options'      => $compression_values,
							'disabled'     => ! $run_compression,
							'description'  => esc_html__( 'Choose the compression type for your gallery lightbox images.', 'modula-best-grid-gallery' ),
							'size'         => 'large',
							'sanitization' => array( 'enum' => $compression_values ),
						),
					),
				),
			),
		);
		if ( ! $run_compression ) {
			$fields['fields'][] = array(
				'type'  => 'paragraph',
				// translators: %1$s and %3$s = <strong>, </strong>; %2$s = environment type (e.g., production); %4$s and %5$s = <a href="mailto:...">, </a>
				'value' => sprintf( esc_html__( 'We\'ve detected that your site is running in a %1$s %2$s environment%3$s, and as a result, our image optimization services have been disabled. If you have questions, please contact us at %4$shello@wp-modula.com%5$s', 'modula-best-grid-gallery' ), '<strong>', wp_get_environment_type(), '</strong>', '<a target="_BLANK" href="mailto:support@wpchill.com">', '</a>' ),
			);
		}

		return $fields;
	}

	private function get_shortcodes() {
		$shortcodes = get_option( 'mas_gallery_link', 'gallery_id' );
		return array(
			'fields' => array(
				array(
					'type'         => 'text',
					'name'         => 'mas_gallery_link',
					'label'        => esc_html__( 'Gallery link attribute', 'modula-best-grid-gallery' ),
					'default'      => $shortcodes,
					'description'  => sprintf( 'Add this shortcode <span class="modula_highlight">[modula_all_galleries]</span> on the page/post/product you want to display your galleries.  Then add at the end of that url :<span class="modula_highlight"> ?%s=[gallery_id], where [gallery_id] </span> is the ID of the gallery. ', $shortcodes ),
					'sanitization' => array( 'text' ),
				),
			),
		);
	}

	private function get_watermark() {
		$watermark        = get_option( 'modula_watermark', array() );
		$watermark_values = array(
			array(
				'label' => esc_html__( 'Top left', 'modula-best-grid-gallery' ),
				'value' => 'top_left',
			),
			array(
				'label' => esc_html__( 'Top right', 'modula-best-grid-gallery' ),
				'value' => 'top_right',
			),
			array(
				'label' => esc_html__( 'Bottom right', 'modula-best-grid-gallery' ),
				'value' => 'bottom_right',
			),
			array(
				'label' => esc_html__( 'Bottom left', 'modula-best-grid-gallery' ),
				'value' => 'bottom_left',
			),
			array(
				'label' => esc_html__( 'Center', 'modula-best-grid-gallery' ),
				'value' => 'center',
			),
		);

		return array(
			'option' => 'modula_watermark',
			'fields' => array(
				array(
					'type'         => 'image_select',
					'name'         => 'watermark_image',
					'label'        => esc_html__( 'Watermark Image', 'modula-best-grid-gallery' ),
					'default'      => isset( $watermark['watermark_image'] ) ? $watermark['watermark_image'] : null,
					'src'          => isset( $watermark['watermark_image'] ) ? wp_get_attachment_image_url( absint( $watermark['watermark_image'] ) ) : null,
					'sanitization' => array( 'number' ),
				),
				array(
					'type'   => 'combo',
					'fields' => array(
						array(
							'type'         => 'select',
							'name'         => 'watermark_position',
							'label'        => esc_html__( 'Watermark Position', 'modula-best-grid-gallery' ),
							'default'      => isset( $watermark['watermark_position'] ) ? $watermark['watermark_position'] : 'bottom_right',
							'options'      => $watermark_values,
							'size'         => 'small',
							'sanitization' => array( 'enum' => array_column( $watermark_values, 'value' ) ),
						),
						array(
							'type'         => 'range_select',
							'name'         => 'watermark_margin',
							'label'        => esc_html__( 'Watermark Margin', 'modula-best-grid-gallery' ),
							'default'      => isset( $watermark['watermark_margin'] ) ? $watermark['watermark_margin'] : 10,
							'min'          => 0,
							'max'          => 50,
							'size'         => 'medium',
							'sanitization' => array( 'number' ),
						),
						array(
							'type'         => 'number',
							'name'         => 'watermark_image_dimension_width',
							'label'        => esc_html__( 'Width', 'modula-best-grid-gallery' ),
							'default'      => isset( $watermark['watermark_image_dimension_width'] ) ? $watermark['watermark_image_dimension_width'] : 0,
							'size'         => 'small',
							'sanitization' => array( 'number' ),
						),
						array(
							'type'         => 'number',
							'name'         => 'watermark_image_dimension_height',
							'label'        => esc_html__( 'Height', 'modula-best-grid-gallery' ),
							'default'      => isset( $watermark['watermark_image_dimension_height'] ) ? $watermark['watermark_image_dimension_height'] : 0,
							'size'         => 'small',
							'sanitization' => array( 'number' ),
						),
					),
				),
				array(
					'type'         => 'toggle',
					'name'         => 'watermark_enable_backup',
					'label'        => esc_html__( 'Enable image backup', 'modula-best-grid-gallery' ),
					'default'      => isset( $watermark['watermark_enable_backup'] ) ? $watermark['watermark_enable_backup'] : '',
					'description'  => esc_html__( 'Save original images (without watermark) in case you decide to delete the watermark from them you will be able to restore the original images to your gallery/media library.', 'modula-best-grid-gallery' ),
					'sanitization' => array( 'bool' ),
				),
			),
		);
	}

	private function get_image_licensing() {
		$licensing = get_option( 'modula_image_licensing_option', array() );

		$licenses = array();

		foreach ( Modula_Helper::get_image_licenses() as $slug => $license ) {
			$licenses[] = array(
				'value' => $slug,
				'image' => $license['image'],
				'label' => $license['license'],
				'name'  => $license['name'],
			);
		}

		return array(
			'option' => 'modula_image_licensing_option',
			'fields' => array(
				array(
					'type'   => 'combo',
					'fields' => array(
						array(
							'type'         => 'text',
							'name'         => 'image_licensing_author',
							'label'        => esc_html__( 'Author', 'modula-best-grid-gallery' ),
							'default'      => isset( $licensing['image_licensing_author'] ) ? $licensing['image_licensing_author'] : '',
							'size'         => 'large',
							'description'  => esc_html__( 'Name used by Google to filter the images based on the author\'s name', 'modula-best-grid-gallery' ),
							'sanitization' => array( 'text' ),
						),
						array(
							'type'         => 'text',
							'name'         => 'image_licensing_company',
							'label'        => esc_html__( 'Company', 'modula-best-grid-gallery' ),
							'default'      => isset( $licensing['image_licensing_company'] ) ? $licensing['image_licensing_company'] : '',
							'size'         => 'large',
							'description'  => esc_html__( 'Company used by Google to filter the images based on the company\'s name', 'modula-best-grid-gallery' ),
							'sanitization' => array( 'text' ),
						),
					),
				),
				array(
					'type'         => 'ia_radio',
					'name'         => 'image_licensing',
					'label'        => esc_html__( 'Choose license type', 'modula-best-grid-gallery' ),
					'default'      => isset( $licensing['image_licensing'] ) ? $licensing['image_licensing'] : 'none',
					'options'      => $licenses,
					'sanitization' => array( 'enum' => array_column( $licenses, 'value' ) ),
				),
				array(
					'type'         => 'toggle',
					'name'         => 'display_with_description',
					'label'        => esc_html__( 'Display licensing under gallery', 'modula-best-grid-gallery' ),
					'default'      => isset( $licensing['display_with_description'] ) ? $licensing['display_with_description'] : '',
					'description'  => esc_html__( 'Enable this option to show image licensing attribution under each gallery for your website visitors. The selected license and the author/company info you add will be displayed below the gallery and included in the gallery’s code, helping visitors know the license conditions and allowing Google to identify images for copyright filtering.', 'modula-best-grid-gallery' ),
					'sanitization' => array( 'bool' ),
				),
			),
		);
	}

	private function get_roles() {
		$roles = array(
			'option' => 'modula_roles',
			'fields' => array_merge( $this->get_gallery_roles(), $this->get_album_roles() ),
		);

		if ( class_exists( 'Modula_Pro\Extensions\Albums\Albums' ) ) {
			$roles['submenu'] = array(
				'class'   => 'modula_roles_submenu',
				'options' => array(
					array(
						'label' => esc_html__( 'Gallery', 'modula-best-grid-gallery' ),
						'value' => 'gallery',
					),
					array(
						'label' => esc_html__( 'Album', 'modula-best-grid-gallery' ),
						'value' => 'album',
					),
				),
			);
		}

		return $roles;
	}

	private function get_social_media() {
		$instagram_status = false;
		$ig_connect_link  = '#';
		$youtube_oauth    = null;
		$vimeo_oauth      = null;
		$vimeo_creds      = get_option( 'modula_video_vimeo_creds', array() );
		$vimeo_connected  = false;
		$vimeo_connect    = '#';
		$vimeo_redirect   = admin_url( '/edit.php?post_type=modula-gallery&page=modula&modula-tab=video&sub=vi&action=save_modula_video_vimeo_token' );

		if ( class_exists( 'Modula_Pro\Extensions\Instagram\Instagram' ) ) {
			$instagram_status = (bool) Modula_Pro\Extensions\Instagram\OAuth::get_instance()->get_access_token();
			$ig_connect_link  = esc_url( Modula_Pro\Extensions\Instagram\OAuth::get_instance()->create_request_url() );
		}

		if ( class_exists( 'Modula_Pro\Extensions\Video\Admin\Google_Auth' ) ) {
			$youtube_oauth = Modula_Pro\Extensions\Video\Admin\Google_Auth::get_instance();
		}

		if ( class_exists( 'Modula_Pro\Extensions\Video\Admin\Vimeo_Auth' ) ) {
			$vimeo_oauth     = Modula_Pro\Extensions\Video\Admin\Vimeo_Auth::get_instance();
			$vimeo_connected = (bool) $vimeo_oauth->get_access_token();
		}

		if ( ! empty( $vimeo_creds['client_id'] ) ) {
			$vimeo_connect = 'https://api.vimeo.com/oauth/authorize?response_type=code&client_id=' . $vimeo_creds['client_id'] . '&redirect_uri=' . rawurlencode( $vimeo_redirect ) . '&scope=public';
		}

		return array(
			'fields' => array(
				array(
					'id'          => 'instagram',
					'type'        => 'oauth',
					'provider'    => 'instagram',
					'title'       => esc_html__( 'Instagram', 'modula-best-grid-gallery' ),
					'description' => esc_html__( 'Connect Modula to your Instagram business account.', 'modula-best-grid-gallery' ),
					'status'      => array(
						'connected'        => $instagram_status,
						'textConnected'    => esc_html__( 'Connected', 'modula-best-grid-gallery' ),
						'textDisconnected' => esc_html__( 'Not connected', 'modula-best-grid-gallery' ),
					),
					'connect'     => array(
						'href'  => $ig_connect_link,
						'label' => esc_html__( 'Connect', 'modula-best-grid-gallery' ),
					),
					'disconnect'  => array(
						'label' => esc_html__( 'Disconnect', 'modula-best-grid-gallery' ),
						'api'   => array(
							'path'   => '/modula-instagram/v1/token/disconnect/',
							'method' => 'POST',
							'data'   => array(),
						),
					),
					'docs'        => array(
						'href'  => 'https://wp-modula.com/kb/how-to-connect-modula-to-instagram/',
						'label' => esc_html__( 'Need help?', 'modula-best-grid-gallery' ),
					),
					'locked'      => true,
					'badge'       => 'trio',
				),
				array(
					'id'          => 'youtube',
					'type'        => 'oauth',
					'provider'    => 'youtube',
					'title'       => esc_html__( 'YouTube', 'modula-best-grid-gallery' ),
					'description' => esc_html__( 'Connect Modula to your YouTube account.', 'modula-best-grid-gallery' ),
					'status'      => array(
						'connected'        => ! is_null( $youtube_oauth ) && $youtube_oauth->get_access_token() ? true : false,
						'textConnected'    => esc_html__( 'Connected', 'modula-best-grid-gallery' ),
						'textDisconnected' => esc_html__( 'Not connected', 'modula-best-grid-gallery' ),
					),
					'connect'     => array(
						'href'  => ! is_null( $youtube_oauth ) && ! $youtube_oauth->get_access_token() ? esc_url( $youtube_oauth->create_request_url() ) : '#',
						'label' => esc_html__( 'Connect', 'modula-best-grid-gallery' ),
					),
					'refresh'     => array(
						'label' => esc_html__( 'Refresh token', 'modula-best-grid-gallery' ),
						'api'   => array(
							'path'   => '/modula-best-grid-gallery/v1/video/youtube/',
							'method' => 'POST',
							'data'   => array( 'action' => 'refresh' ),
						),
					),
					'disconnect'  => array(
						'label' => esc_html__( 'Disconnect', 'modula-best-grid-gallery' ),
						'api'   => array(
							'path'   => '/modula-best-grid-gallery/v1/video/youtube/',
							'method' => 'POST',
							'data'   => array( 'action' => 'disconnect' ),
						),
					),
					'docs'        => array(
						'href'  => 'https://wp-modula.com/kb/how-to-connect-modula-to-youtube-and-add-video-playlists-to-your-galleries/',
						'label' => esc_html__( 'Need help?', 'modula-best-grid-gallery' ),
					),
					'locked'      => true,
					'badge'       => 'starter',
				),
				array(
					'id'          => 'vimeo',
					'type'        => 'oauth',
					'provider'    => 'vimeo',
					'title'       => esc_html__( 'Vimeo', 'modula-best-grid-gallery' ),
					'description' => esc_html__( 'Connect Modula to your Vimeo account.', 'modula-best-grid-gallery' ),
					'status'      => array(
						'connected'        => $vimeo_connected,
						'textConnected'    => esc_html__( 'Connected', 'modula-best-grid-gallery' ),
						'textDisconnected' => esc_html__( 'Not connected', 'modula-best-grid-gallery' ),
					),
					'connect'     => array(
						'href'     => $vimeo_connected ? '#' : $vimeo_connect,
						'label'    => empty( $vimeo_creds['client_id'] ) ? esc_html__( 'Save your credentials first', 'modula-best-grid-gallery' ) : esc_html__( 'Connect to Vimeo', 'modula-best-grid-gallery' ),
						'disabled' => empty( $vimeo_creds['client_id'] ),
					),
					'disconnect'  => array(
						'label' => esc_html__( 'Disconnect', 'modula-best-grid-gallery' ),
						'api'   => array(
							'path'   => '/modula-best-grid-gallery/v1/video/vimeo/',
							'method' => 'POST',
							'data'   => array( 'action' => 'disconnect' ),
						),
					),
					'docs'        => array(
						'href'  => 'https://wp-modula.com/kb/how-to-connect-modula-to-vimeo-and-add-video-playlists-to-your-galleries/',
						'label' => esc_html__( 'Need help?', 'modula-best-grid-gallery' ),
					),
					'locked'      => true,
					'badge'       => 'starter',
				),
				array(
					'id'          => 'vimeo_credentials',
					'type'        => 'credentials_group',
					'title'       => esc_html__( 'Vimeo credentials', 'modula-best-grid-gallery' ),
					'description' => esc_html__( 'Add your Vimeo app keys to enable the connection.', 'modula-best-grid-gallery' ),
					'fields'      => array(
						array(
							'type'         => 'text',
							'name'         => 'modula_video_vimeo_creds.client_id',
							'label'        => esc_html__( 'Vimeo Client ID', 'modula-best-grid-gallery' ),
							'default'      => isset( $vimeo_creds['client_id'] ) ? $vimeo_creds['client_id'] : '',
							'sanitization' => array( 'text' ),
						),
						array(
							'type'         => 'text',
							'name'         => 'modula_video_vimeo_creds.client_secret',
							'label'        => esc_html__( 'Vimeo Client Secret', 'modula-best-grid-gallery' ),
							'default'      => isset( $vimeo_creds['client_secret'] ) ? $vimeo_creds['client_secret'] : '',
							'sanitization' => array( 'text' ),
						),
						array(
							'type'         => 'text',
							'name'         => 'vimeo_redirect_uri',
							'label'        => esc_html__( 'Vimeo RedirectURI', 'modula-best-grid-gallery' ),
							'default'      => $vimeo_redirect,
							'readonly'     => true,
							'sanitization' => array( 'url' ),
						),
					),
					'locked'      => true,
					'badge'       => 'starter',
				),
			),
		);
	}

	public function get_modula_ai() {
		$enabled = (int) get_option( 'use_modula_ai', 0 ) ? true : false;

		return array(
			'fields' => array(
				array(
					'type'         => 'toggle',
					'name'         => 'use_modula_ai',
					'label'        => esc_html__( 'Use AI Features', 'modula-best-grid-gallery' ),
					'default'      => $enabled,
					'sanitization' => array( 'bool' ),
				),
				array(
					'type'         => 'modula_ai',
					//todo this does not save
					'conditions'   => array(
						array(
							'field'      => 'use_modula_ai',
							'comparison' => '===',
							'value'      => true,
						),
					),
				),
			),
		);
	}

	private function get_gallery_roles() {
		global $wp_roles;
		$options      = get_option( 'modula_roles' );
		$roles_array  = array();
		$capabilities = array(
			'edit_galleries'          => __( 'View & Edit Own Gallery', 'modula-best-grid-gallery' ),
			'edit_other_galleries'    => __( 'Edit Others Galleries', 'modula-best-grid-gallery' ),
			'publish_galleries'       => __( 'Publish Galleries', 'modula-best-grid-gallery' ),
			'delete_galleries'        => __( 'Delete Own Galleries', 'modula-best-grid-gallery' ),
			'delete_others_galleries' => __( 'Delete Others Galleries', 'modula-best-grid-gallery' ),
			'read_private_galleries'  => __( 'Edit Private Galleries', 'modula-best-grid-gallery' ),
		);

		foreach ( $wp_roles->roles as $key => $wp_role ) {
			if ( 'administrator' === $key ) {
				continue;
			}
			$role       = get_role( $key );
			$option     = isset( $options[ $key ]['enabled'] ) ? $options[ $key ]['enabled'] : false;
			$role_array = array(
				'type'    => 'role',
				'name'    => $key . '.enabled',
				'label'   => translate_user_role( $wp_role['name'] ),
				'default' => $this->is_role_enabled( $key, $option, $capabilities ),
				'fields'  => array(),
				'group'   => 'gallery',
			);

			foreach ( $capabilities as $capability => $capability_name ) {
				$role_array['fields'][] = array(
					'type'         => 'toggle',
					'name'         => $key . '.' . $capability,
					'label'        => $capability_name,
					'default'      => $role->has_cap( $capability ),
					'sanitization' => array( 'bool' ),
				);
			}

			if ( ! in_array( $key, array( 'editor', 'author' ), true ) ) {
				$role_array['fields'][] = array(
					'type'         => 'toggle',
					'name'         => $key . '.upload_files',
					'label'        => __( 'Upload Files', 'modula-best-grid-gallery' ),
					'default'      => $role->has_cap( 'upload_files' ),
					'sanitization' => array( 'bool' ),
				);
			}

			$roles_array[] = $role_array;
		}

		return $roles_array;
	}

	private function get_album_roles() {
		if ( ! class_exists( 'Modula_Pro\Extensions\Albums\Albums' ) ) {
			return array();
		}

		global $wp_roles;
		$options     = get_option( 'modula_roles' );
		$roles_array = array();

		$album_capabilities = array(
			'edit_albums'          => __( 'View & Edit Own Albums', 'modula-best-grid-gallery' ),
			'edit_others_albums'   => __( 'Edit Others Albums', 'modula-best-grid-gallery' ),
			'publish_albums'       => __( 'Publish Albums', 'modula-best-grid-gallery' ),
			'delete_albums'        => __( 'Delete Own Albums', 'modula-best-grid-gallery' ),
			'delete_others_albums' => __( 'Delete Others Albums', 'modula-best-grid-gallery' ),
			'read_private_albums'  => __( 'Edit Private Albums', 'modula-best-grid-gallery' ),
		);

		foreach ( $wp_roles->roles as $key => $wp_role ) {
			if ( 'administrator' === $key ) {
				continue;
			}

			$option     = isset( $options[ $key . '_album' ]['enabled'] ) ? $options[ $key . '_album' ]['enabled'] : false;
			$role       = get_role( $key );
			$role_array = array(
				'type'         => 'role',
				'name'         => $key . '_album.enabled',
				'label'        => translate_user_role( $wp_role['name'] ),
				'default'      => $this->is_role_enabled( $key, $option, $album_capabilities ),
				'fields'       => array(),
				'group'        => 'album',
				'sanitization' => array( 'bool' ),
			);

			foreach ( $album_capabilities as $capability => $capability_name ) {
				$role_array['fields'][] = array(
					'type'         => 'toggle',
					'name'         => $key . '.' . $capability,
					'label'        => $capability_name,
					'default'      => $role->has_cap( $capability ),
					'sanitization' => array( 'bool' ),
				);
			}

			if ( ! in_array( $key, array( 'editor', 'author' ), true ) ) {
				$role_array['fields'][] = array(
					'type'         => 'toggle',
					'name'         => $key . '.upload_files',
					'label'        => __( 'Upload Files', 'modula-best-grid-gallery' ),
					'default'      => $role->has_cap( 'upload_files' ),
					'sanitization' => array( 'bool' ),
				);
			}

			$roles_array[] = $role_array;
		}

		return $roles_array;
	}

	private function is_role_enabled( $key, $option, $capabilities ) {
		if ( $option || false === $option ) {
			$role = get_role( $key );
			foreach ( $capabilities as $cap => $cap_name ) {
				if ( $role->has_cap( $cap ) ) {
					return true;
				}
			}
		} elseif ( true === boolval( $option ) ) {
				return true;
		}

		return false;
	}

	public function set_capabilities( $settings ) {
		$roles = new Modula_Pro\Extensions\Roles\Roles();
		$roles->sanitize_option( $settings );
	}

	public function settings_permissions_check() {

		// Check if the user has the capability to manage options
		return current_user_can( 'manage_options' );
	}

	public function settings_sanitization() {
		$sanitization_map = array();
		$tabs             = $this->get_tabs();

		foreach ( $tabs as $tab ) {
			if ( empty( $tab['subtabs'] ) || ! is_array( $tab['subtabs'] ) ) {
				continue;
			}

			foreach ( $tab['subtabs'] as $subtab ) {
				if ( empty( $subtab['config'] ) || ! is_array( $subtab['config'] ) ) {
					continue;
				}

				$config = $subtab['config'];
				$option = isset( $config['option'] ) ? $config['option'] : null;
				$fields = isset( $config['fields'] ) && is_array( $config['fields'] ) ? $config['fields'] : array();

				$this->collect_sanitization_from_fields( $fields, $sanitization_map, $option );
			}
		}

		return $sanitization_map;
	}

	/**
	 * Recursively collect sanitization schemas from fields definitions.
	 *
	 * @param array  $fields            Fields definition array.
	 * @param array  $sanitization_map  Reference to the collected sanitization map.
	 * @param string $option            Option name if fields belong to a specific option.
	 */
	private function collect_sanitization_from_fields( $fields, &$sanitization_map, $option = null ) {
		foreach ( $fields as $field ) {
			if ( isset( $field['fields'] ) && is_array( $field['fields'] ) ) {
				$this->collect_sanitization_from_fields( $field['fields'], $sanitization_map, $option );
			}

			if ( empty( $field['sanitization'] ) || empty( $field['name'] ) ) {
				continue;
			}

			$target = &$sanitization_map;

			if ( $option ) {
				if ( ! isset( $target[ $option ] ) || ! is_array( $target[ $option ] ) ) {
					$target[ $option ] = array();
				}

				$target = &$target[ $option ];
			}

			$this->assign_sanitization_value( $target, $field['name'], $field['sanitization'] );
		}
	}

	/**
	 * Assign a sanitization schema to the nested path represented by the field name.
	 *
	 * @param array  $target        Reference to the target array where the schema should be stored.
	 * @param string $field_name    Dot-notated field name (e.g. gallery.slug).
	 * @param array  $sanitization  Sanitization schema to store.
	 */
	private function assign_sanitization_value( &$target, $field_name, $sanitization ) {
		$parts   = explode( '.', $field_name );
		$current = &$target;

		foreach ( $parts as $index => $part ) {
			$last = count( $parts ) - 1 === $index;

			if ( $last ) {
				$current[ $part ] = $sanitization;
				return;
			}

			if ( ! isset( $current[ $part ] ) || ! is_array( $current[ $part ] ) ) {
				$current[ $part ] = array();
			}

			$current = &$current[ $part ];
		}
	}
}
