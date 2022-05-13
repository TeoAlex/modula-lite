<?php

/**
 *
 */
class Modula_Search_Settings {

	/**
	 * constructor
	 *
	 */

    public $modula_settings = false;

	public function __construct() {

        //ajax calls
        add_action( 'wp_ajax_modula_search_settings', array( $this, 'modula_search_settings' ) ); 
        add_action( 'wp_ajax_accept_modula_search_tracking', array( $this, 'accept_modula_search_tracking' ) );

        //register scripts
        add_action( 'admin_enqueue_scripts', array( $this, 'register_scripts' ), 5 );

        //apply searchbar pointer to modula screens
        add_filter( 'modula_admin_pointer', array( $this, 'modula_register_pointer_searchbar' ) );

        add_filter( 'admin_body_class', array( $this, 'searchbar_hide_pointer_class' ) );

        //add_action( 'admin_init', array( $this, 'modula_search_settings' )  );
	}
    
    function searchbar_hide_pointer_class( $classes ) {

        //add body class to hide the pointer if the searchbar is disabled
        if( !get_option( 'modula_troubleshooting_option', false )['modula_search_tracking_accord'] ){
            $classes .= ' modula_searchbar_disabled';
        }
        return $classes;
         
    }
    public function modula_register_pointer_searchbar( $p ) {

        // dont show pointer on pages other than modula's
        if( !in_array( get_current_screen()->id, apply_filters( 'modula_admin_pointer_display_screens', array( 'modula-gallery_page_modula', 'modula-gallery_page_modula-addons', 'edit-modula-gallery', 'modula-gallery', 'modula-gallery_page_modula-import-export', 'modula-gallery_page_modula-lite-vs-pro' ) ) ) ){
            return $p;
        }

        // dont show pointer if consent is given.
        if( get_option( 'modula_troubleshooting_option', false )['modula_search_tracking_accord'] ){
            return $p;
        }

        $p['modula_searchbar_pointer'] = array(
            'test' => 'testmore',
            'target' => '#modula_settings_search_results',
            'options' => array(
                'content' => sprintf( '<h3> %s </h3> <p> %s </p>',
                    __( 'Search for modula settings' ,'plugindomain'),
                    __( 'Now it even simplier to customize your modula gallery, simply.... yada yada','plugindomain'),
                ),
                'position' => array( 'edge' => 'top', 'align' => 'middle' )
            )
        );
        return $p;
    }

    public function register_scripts(){
        
		wp_enqueue_script( 'modula_search_settings_script', MODULA_URL . 'assets/js/admin/modula-search-settings.js', array( 'jquery' ), MODULA_LITE_VERSION, true );
        wp_localize_script( 'modula_search_settings_script', 'translate', array(  'placeholder' => esc_attr__( 'Search Modula settings', 'modula-best-grid-gallery' ) ) );
        wp_localize_script( 'modula_search_settings_script', 'tracking_accord', array(  'accord' => get_option( 'modula_troubleshooting_option', false )['modula_search_tracking_accord'] ) );
        wp_localize_script( 'modula_search_settings_script', 'modula_post_id', array( 'id' => isset( $_GET['post'] ) ?  absint( $_GET['post'] ) : absint( $this->get_last_cpt_id() ) ) );
        wp_enqueue_script( 'modula-selectize', MODULA_URL . 'assets/js/admin/selectize.js', null, MODULA_LITE_VERSION, true );
		wp_enqueue_style( 'modula-selectize', MODULA_URL . 'assets/css/admin/selectize.default.css', array(), MODULA_LITE_VERSION );
    }

    public function get_last_cpt_id(){
        $args = array(
            'post_type' =>'modula-gallery',
            'posts_per_page' => 1
        );
        $recent_post = wp_get_recent_posts( $args );

        if( !empty( $recent_post ) ){
            return $recent_post[0]['ID'];
        }else{
            return 0;
        }
    }

    public function modula_search_settings(){
        $results = array();

        foreach( $this->get_settings() as $key => $setting ){

            $defaults = Modula_CPT_Fields_Helper::get_defaults();
            $defaults = array_merge( $defaults, Modula_Troubleshooting::get_misc_defaults() );
            $requires_pro = false;
            if( !array_key_exists( $key, $defaults ) ){
                $requires_pro = true;
            }
            $setting['key'] = $key;
            $setting['modula_post_id'] = isset( $_POST['modula_post_id'] ) ? absint( $_POST['modula_post_id'] ) : absint( $this->get_last_cpt_id() );

            $results[] = array(
                'name'        => $setting['name'],
                'description' => $setting['description'],
                'url'         => $this->get_link( $setting )['url'],
                'breadcrumbs' => $this->get_link( $setting )['breadcrumbs'],
                'badge'       => ( $requires_pro ) ? 'pro' : $setting['badge'],
                'type'        => $setting['type']
            );
        }
        
        echo json_encode( $results );
        die();
        
    }

    public function accept_modula_search_tracking(){
        $options = get_option('modula_troubleshooting_option');
        if( isset( $_POST['consent'] ) && 'accept' == $_POST['consent'] ){
            $options['modula_search_tracking_accord'] = true;
        }else{
            $options['modula_search_tracking_accord'] = false;
        }
        update_option('modula_troubleshooting_option', $options );
    }

    private function get_link( $setting ){
        $url = get_admin_url();
        $breadcrumbs = '';

        if( 'general' == $setting['type'] ){
            $url = add_query_arg( array( 'post_type' => 'modula-gallery', 'page' => 'modula', 'modula-tab' => $setting['tab'] ), $url . '/edit.php' );
            $url .= '#!' . $setting['key'];
            if( isset( $setting['parent'] ) && '' != $setting['parent'] ){
                $url .= '#!' . $setting['parent'];
            }
            $breadcrumbs = 'Modula > Settings > ' . $setting['tab'] . '(tab) > ' . $setting['name'];
        }

        if( 'subjective' == $setting['type'] ){
            
            if( isset( $setting['modula_post_id'] ) && 0 !== $setting['modula_post_id'] ){
                $url = add_query_arg( array( 'post' => absint( $setting['modula_post_id'] ), 'action' => 'edit' ), $url . 'post.php' );
            }else{
                $url = add_query_arg( 'post_type', 'modula-gallery', $url . 'post-new.php' );
            }
            $url .= '#' . $setting['tab'] . '#!' . $setting['key'];
            if( isset( $setting['parent'] ) && '' != $setting['parent'] ){
                $url .= '#!' . $setting['parent'];
            }
            $breadcrumbs = 'Modula > Galleries > ' . $setting['tab_name'] . '(tab) > ' . $setting['name'];
        }
        

        return array( 'url' => $url, 'breadcrumbs' => $breadcrumbs );
    }

    public function get_settings(){

        if( $this->modula_settings ){
            return $this->modula_settings;
        }

        $this->modula_settings = array( 
            'modula_select_gallery_source' => array(
                'name'        => esc_html__( 'Gallery source', 'modula-best-grid-gallery' ),
                'description' => esc_html__( 'Select from which source would you like to migrate the gallery. Migrating galleries will also replace the shortcode of the gallery with the new Modula shortcode in pages and posts.', 'modula-best-grid-gallery' ),
                'page'        => 'modula',
                'tab'         => 'importer',
                'tab_name'    => 'Migrate Galleries',
                'parent'      => '',
                'type'        => 'general',
                'badge'     => 'setting'
                ),
            'disable_edit'          => array(
                'name'       => esc_html__( 'Disable "Edit gallery" link', 'modula-best-grid-gallery' ),
                'description' => esc_html__( 'If you want to disable the "Edit gallery" link from the front-end check this option.', 'modula-best-grid-gallery' ),
                'page'        => 'modula',
                'tab'         => 'misc',
                'tab_name'    => 'Misc',
                'parent'      => '',
                'type'        => 'general',
                'badge'     => 'setting'
            ),
            'track_data'            => array(
                'name'       => esc_html__( 'Track Data', 'modula-best-grid-gallery' ),
                'description' => esc_html__( 'We would like to track its usage on your site. We don\'t record any sensitive data, only information regarding the WordPress environment and Modula settings, which we will use to help us make improvements.', 'modula-best-grid-gallery' ),
                'page'        => 'modula',
                'tab'         => 'misc',
                'tab_name'    => 'Misc',
                'parent'      => '',
                'type'        => 'general',
                'badge'     => 'setting'
            ),
            'enqueue_files_heaging' => array(
                'name'       => esc_html__( 'Enqueue assets on all pages.', 'modula-best-grid-gallery' ),
                'description' => esc_html__( 'If you have problems with displaying or running Modula Galleries you might want to enqueue Modula CSS and JS in all pages.', 'modula-best-grid-gallery' ),
                'page'        => 'modula',
                'tab'         => 'misc',
                'tab_name'    => 'Misc',
                'parent'      => '',
                'type'        => 'general',
                'badge'     => 'setting'
            ),
            'enqueue_files'         => array(
                'name'       => esc_html__( 'Enqueue Modula assets', 'modula-best-grid-gallery' ),
                'description' => esc_html__( 'Enqueue CSS & JS files on all pages', 'modula-best-grid-gallery' ),
                'page'        => 'modula',
                'tab'         => 'misc',
                'tab_name'    => 'Misc',
                'parent'      => '',
                'type'        => 'general',
                'badge'     => 'setting'
            ),
            'gridtypes'             => array(
                'name'       => esc_html__( 'Grid Types', 'modula-best-grid-gallery' ),
                'description' => esc_html__( 'Select which grid type you are using to enqueue scripts and styles', 'modula-best-grid-gallery' ),
                'page'        => 'modula',
                'tab'         => 'misc',
                'tab_name'    => 'Misc',
                'parent'      => 'enqueue_files',
                'type'        => 'general',
                'badge'     => 'setting'

            ),
            'lightboxes'            => array(
                'name'       => esc_html__( 'Lightbox & links', 'modula-best-grid-gallery' ),
                'description' => esc_html__( 'Enqueue Fancybox lightbox scripts and styles everywhere.', 'modula-best-grid-gallery' ),
                'page'        => 'modula',
                'tab'         => 'misc',
                'tab_name'    => 'Misc',
                'parent'      => 'enqueue_files',
                'type'        => 'general',
                'badge'     => 'setting'
            ),
            'lazy_load'             => array(
                'name'       => esc_html__( 'Lazy Load', 'modula-best-grid-gallery' ),
                'description' => esc_html__( 'Check this if you\'re using Lazyload with your galleries', 'modula-best-grid-gallery' ),
                'page'        => 'modula',
                'tab'         => 'misc',
                'tab_name'    => 'Misc',
                'parent'      => 'enqueue_files',
                'type'        => 'general',
                'badge'     => 'setting'
            ),
            'link'                  => array(
                'name'       => esc_html__('Affiliate Link', 'modula-best-grid-gallery'),
                'description' => '',
                'page'        => 'modula',
                'tab'         => 'affiliate',
                'tab_name'    => 'Earn Money',
                'parent'      => 'enqueue_files',
                'type'        => 'general',
                'badge'     => 'setting'
            ),
            'text'                  => array(
                'name'       => esc_html__('Powered By Text', 'modula-best-grid-gallery'),
                'description' => '',
                'page'        => 'modula',
                'tab'         => 'affiliate',
                'tab_name'    => 'Earn Money',
                'parent'      => 'enqueue_files',
                'type'        => 'general',
                'badge'     => 'setting'
            ),

            //subjective setings
            'type'           => array(
                "name"        => esc_html__( 'Gallery Type', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Choose the type of gallery you want to use.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "grid_type" => array(
                "name"        => esc_html__( 'Column Type', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Select the grid type. it will automatically fill each row to the fullest.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            "grid_row_height" => array(
                "name"        => esc_html__( 'Row Height.', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the height of each row.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            "grid_justify_last_row" => array(
                "name"        => esc_html__( 'Last Row Alignment', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'By selecting justify , the last row of pictures will automatically be resized to fit the full width.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            "grid_image_size" => array(
                "name"        => esc_html__( 'Image Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Select the size of your images. ', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            "grid_image_dimensions" => array(
                "name"        => esc_html__( ' Image dimensions', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Define image width. If Crop images isn\'t enabled, images will be proportional.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => 'grid_image_size',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "img_crop" => array(
                "name"        => esc_html__( 'Crop Images', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'If this is enabled, images will be cropped down to exactly the sizes defined above.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "grid_image_crop" => array(
                "name"        => esc_html__( 'Crop Images', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'If this is enabled, images will be cropped down to exactly the sizes defined above.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => 'grid_image_size',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "gutter"        => array(
                "name"        => esc_html__( 'Gutter', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Use this slider to adjust the image space in your gallery.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            'tablet_gutter' => array(
                "name"        => esc_html__( 'Gutter for tablet', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Use this to adjust the image space in your gallery for tablet view.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            'mobile_gutter' => array(
                "name"        => esc_html__( 'Gutter for mobile', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Use this to adjust the image space in your gallery for mobile view.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "width"          => array(
                "name"        => esc_html__( 'Width', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Change the width of your gallery. It can be in percentages or pixels.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "height"         => array(
                "name"        => esc_html__( 'Height', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the height of the gallery in pixels.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "randomFactor"   => array(
                "name"        => esc_html__( 'Random factor', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Toggle this to 0 to tune down the randomising factor on Modula\'s grid algorithm.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "shuffle"         => array(
                "name"        => esc_html__( 'Shuffle images', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Toggle this to ON so that your gallery shuffles with each page load.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "powered_by"      => array(
                "name"        => esc_html__( 'Powered by', 'modula-best-grid-gallery'),
                "description" => esc_html__( 'Adds a Powered by Modula text at the bottom right of your gallery.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'tab_name'    => 'General',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            //lightboxes
            "lightbox"       => array(
                "name"        => esc_html__( 'Lightbox &amp; Links', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Choose how the gallery should behave on image clicking.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-lightboxes',
                'tab_name'    => 'Lightbox & Links',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "show_navigation" => array(
                "name"        => esc_html__( 'Navigation arrows', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Enable this to display navigation arrows.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-lightboxes',
                'tab_name'    => 'Lightbox & Links',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            //captions
            "hide_title"        => array(
                "name"        => esc_html__( 'Hide Title', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Hide image titles from your gallery.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'tab_name'    => 'Captions',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "titleColor"     => array(
                "name"        => esc_html__( 'Title Color', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the color of title.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'tab_name'    => 'Captions',
                'parent'      => 'hide_title',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "titleFontSize"    => array(
                "name"        => esc_html__( 'Title Font Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'The title font size in pixels (set to 0 to use the theme defaults).', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'tab_name'    => 'Captions',
                'parent'      => 'hide_title',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "mobileTitleFontSize"    => array(
                "name"        => esc_html__( 'Mobile Title Font Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'The title font size in pixels (set to 0 to use the theme defaults) for mobile view.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'tab_name'    => 'Captions',
                'parent'      => 'hide_title',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "hide_description"        => array(
                "name"        => esc_html__( 'Hide Caption', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Hide image captions from your gallery.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'tab_name'    => 'Captions',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "captionColor"     => array(
                "name"        => esc_html__( 'Caption Color', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the color of captions.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'tab_name'    => 'Captions',
                'parent'      => 'hide_description',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "captionFontSize"  => array(
                "name"        => esc_html__( 'Caption Font Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'The caption font size in pixels (set to 0 to use theme defaults).', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'tab_name'    => 'Captions',
                'parent'      => 'hide_description',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "mobileCaptionFontSize"  => array(
                "name"        => esc_html__( 'Mobile Caption Font Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'The caption font size in pixels (set to 0 to use theme defaults) for mobile view.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'tab_name'    => 'Captions',
                'parent'      => 'hide_description',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            //social
            "enableSocial"   => array(
                "name"        => esc_html__( 'Enable Social Bar', 'modula-best-grid-gallery' ),
                "description" => "Enable social sharing on hovering the gallery thumbnail. Off by default.",
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "enableTwitter"   => array(
                "name"        => esc_html__( 'Twitter', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show Twitter Share Icon when hovering the gallery thumbnail.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "enableFacebook"  => array(
                "name"        => esc_html__( 'Facebook', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show Facebook Share Icon when hovering the gallery thumbnail', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "enableWhatsapp"  => array(
                "name"        => esc_html__( 'Whatsapp', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show Whatsapp Share Icon when hovering the gallery thumbnail', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "enableLinkedin"  => array(
                "name"        => esc_html__( 'LinkedIn', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show LinkedIn Share Icon when hovering the gallery thumbnail', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "enablePinterest" => array(
                "name"        => esc_html__( 'Pinterest', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show Pinterest Share Icon when hovering the gallery thumbnail', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "enableEmail" => array(
                "name"        => esc_html__( 'Email', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show Email Share Icon when hovering the gallery thumbnail', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "emailSubject"   => array(
                "name"        => esc_html__( 'Email subject', 'modula-best-grid-gallery' ),
                "default"     => esc_html__( 'Check out this awesome image !!','modula-best-grid-gallery' ),
                "description" => esc_html__( 'Email subject text, used in hover social sharing', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "emailMessage"   => array(
                "name"        => esc_html__( 'Email message', 'modula-best-grid-gallery' ),
                "default"     => esc_html__( 'Here is the link to the image : %%image_link%% and this is the link to the gallery : %%gallery_link%% ','modula-best-grid-gallery'),
                "description" => esc_html__( 'Email share text,used in hover social sharing', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "socialIconColor" => array(
                "name"        => esc_html__( 'Color', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Select the color of the icon.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "socialIconSize" => array(
                "name"        => esc_html__( 'Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( '16 will be the default value.','modula-best-grid-gallery'),
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "socialIconPadding" => array(
                "name"        => esc_html__( 'Gutter', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Space Between social sharing icons','modula-best-grid-gallery'),
                'tab'         => '!modula-social',
                'tab_name'    => 'Social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            //loading effects
            "loadedScale"  => array(
                "name"        => esc_html__( 'Scale', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Choose a value below 100% for a zoom-in effect. Choose a value over 100% for a zoom-out effect. Choose 100 for no effect.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-image-loaded-effects',
                'tab_name'    => 'Loading Effects',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "inView"  => array(
                "name"        => esc_html__( 'Load in view', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'If your gallery is somewhere further down the page but you still want to make the loading effect please check this toggle.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-image-loaded-effects',
                'tab_name'    => 'Loading Effects',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            //hover effects
            "effect" => array(
                "name"        => esc_html__( 'Hover effect', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Select your preferred hover effect', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-hover-effect',
                'tab_name'    => 'Hover Effects',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            "cursor"  => array(
                "name"         => esc_html__( 'Cursor Icon', 'modula-best-grid-gallery'),
                "description"  => esc_html__( 'Select your favourite cursor', 'modula-best-grid-gallery'),
                'tab'         => '!modula-hover-effect',
                'tab_name'    => 'Hover Effects',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            //style
            "borderSize"   => array(
                "name"        => esc_html__( 'Border Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the border size of images in your gallery.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-style',
                'tab_name'    => 'Style',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "borderRadius" => array(
                "name"        => esc_html__( 'Border Radius', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the radius of the image borders in this gallery.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-style',
                'tab_name'    => 'Style',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "borderColor"  => array(
                "name"        => esc_html__( 'Border Color', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the color of your image borders in this gallery.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-style',
                'tab_name'    => 'Style',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "shadowSize"   => array(
                "name"        => esc_html__( 'Shadow Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the size of image shadows in this gallery.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-style',
                'tab_name'    => 'Style',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            "shadowColor"  => array(
                "name"        => esc_html__( 'Shadow Color', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the color of image shadows in this gallery', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-style',
                'tab_name'    => 'Style',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            //custom css
            "style"  => array(
                "name"        => esc_html__( 'Custom Css' ),
                "description" => esc_html__( 'Use this section to add custom CSS to your gallery for advanced modifications.' ),
                'tab'         => '!modula-customizations',
                'tab_name'    => 'Custom CSS',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),

            // Modula Addons/Extensions
            //EXIF
            'enable_exif'  => array(
                "name"        => esc_html__( 'Enable Exif', 'modula-exif' ),
                "description" => esc_html__( 'Enable this option to display the EXIF information in the lightbox.', 'modula-exif' ),
                'tab'         => '!modula-exif',
                'tab_name'    => 'EXIF',
                'parent'      => '',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            'exif_camera'  => array(
                "name"        => esc_html__( 'Camera Model', 'modula-exif' ),
                "description" => esc_html__( 'Enable this option to display the camera information', 'modula-exif' ),
                'tab'         => '!modula-exif',
                'tab_name'    => 'EXIF',
                'parent'      => 'enable_exif',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            'exif_lens'   => array(
                "name"        => esc_html__( 'Lens', 'modula-exif' ),
                "description" => esc_html__( 'Enable this option to display the lens information', 'modula-exif' ),
                'tab'         => '!modula-exif',
                'tab_name'    => 'EXIF',
                'parent'      => 'enable_exif',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            'exif_shutter_speed'   => array(
                "name"        => esc_html__( 'Shutter Speed', 'modula-exif' ),
                "description" => esc_html__( 'Enable this option to display the shutter speed information', 'modula-exif' ),
                'tab'         => '!modula-exif',
                'tab_name'    => 'EXIF',
                'parent'      => 'enable_exif',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            'exif_aperture'   => array(
                "name"        => esc_html__( 'Aperture', 'modula-exif' ),
                "description" => esc_html__( 'Enable this option to display the aperture information', 'modula-exif' ),
                'tab'         => '!modula-exif',
                'tab_name'    => 'EXIF',
                'parent'      => 'enable_exif',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            'exif_focal_length'   => array(
                "name"        => esc_html__( 'Focal Length', 'modula-exif' ),
                "description" => esc_html__( 'Enable this option to display the focal length information', 'modula-exif' ),
                'tab'         => '!modula-exif',
                'tab_name'    => 'EXIF',
                'parent'      => 'enable_exif',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            'exif_iso'   => array(
                "name"        => esc_html__( 'ISO', 'modula-exif' ),
                "description" => esc_html__( 'Enable this option to display the iso information', 'modula-exif' ),
                'tab'         => '!modula-exif',
                'tab_name'    => 'EXIF',
                'parent'      => 'enable_exif',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
            'exif_date'   => array(
                "name"        => esc_html__( 'Date', 'modula-exif' ),
                "description" => esc_html__( 'Enable this option to display the date information', 'modula-exif' ),
                'tab'         => '!modula-exif',
                'tab_name'    => 'EXIF',
                'parent'      => 'enable_exif',
                'type'        => 'subjective',
                'badge'     => 'setting'
            ),
        );

        return $this->modula_settings;
    }
}
new Modula_Search_Settings();