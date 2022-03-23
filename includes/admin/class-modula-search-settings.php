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
        add_action( 'wp_ajax_modula_search_settings', array( $this, 'modula_search_settings' ) ); 
        add_action( 'admin_enqueue_scripts', array( $this, 'register_scripts' ), 20 );
	}


    public function register_scripts(){
        wp_enqueue_script( 'modula-selectize', MODULA_URL . 'assets/js/admin/selectize.js', null, MODULA_LITE_VERSION, true );
        wp_enqueue_style( 'modula-selectize', MODULA_URL . 'assets/css/admin/selectize.default.css', array(), MODULA_LITE_VERSION );
		wp_enqueue_script( 'modula_search_settings_script', MODULA_URL . 'assets/js/admin/modula-search-settings.js', array( 'jquery' ), MODULA_LITE_VERSION, true );
    }

    public function modula_search_settings(){
        $results = array();
        if( isset( $_POST['search_val'] ) && '' != $_POST['search_val'] ){

            $search_val = strtolower( $_POST['search_val'] );
            $input = preg_quote( $search_val, '~' );

            
            foreach( $this->get_settings() as $key => $setting ){
                if( preg_grep('~' . $input . '~', array( strtolower( $setting['name'] ) ) ) ){
                    // $results['test'][$key] = $setting;
                    // $results['test'][$key]['url'] = $this->get_link( $setting )['url'];
                    $setting['id'] = $key;
                    $results[] = $setting;
                    //$results[$key]['prio'] = 1;
                    //$results[$key]['value'] = '<li>'. $this->get_link( $setting ) .'</li>';
                }
                if( preg_grep('~' . $input . '~', array( strtolower( $setting['description'] ) ) ) && !array_key_exists( $key, $results ) ){
                    // $results['test'][$key] = $setting;
                    // $results['test'][$key]['url'] = $this->get_link( $setting )['url'];
                    $setting['id'] = $key;
                    $results[] = $setting;
                    //$results[$key]['prio'] = 2;
                   // $results[$key]['value'] = '<li>'. $this->get_link( $setting ) .'</li>';
                }
            }

        }
        //usort($results, function ($a, $b) {
      //      return $a['prio'] > $b['prio'];
      //  });

        //echo '<ul>';
        if( !empty( $results ) ){
            foreach( $results as $result ){
              //  echo $result['value'];
            }
        }else{
           // esc_html_e( 'No matches found.', 'modula-best-grid-gallery' );
        }
        //echo '</ul>';

        echo json_encode( $results );
        die();
        
    }

    private function get_link( $setting ){
        $url = get_admin_url();
        $breadcrumbs = '';

        if( 'general' == $setting['type'] ){
            $url = add_query_arg( array( 'post_type' => 'modula-gallery', 'page' => 'modula', 'modula-tab' => $setting['tab'] ), $url . '/edit.php' );
            $breadcrumbs = 'Modula > Settings > ' . $setting['tab'] . '(tab) > ' . $setting['name'];
        }

        if( 'subjective' == $setting['type'] ){
            if( isset( $_GET['post'] ) ){
                $url = add_query_arg( array( 'post' => absint( wp_unslash( $_GET['post'] ) ), 'action' => 'edit' ), $url . '/post.php' );
            }else{
                $url = add_query_arg( 'post_type', 'modula-gallery', $url . '/post-new.php' );
            }
            $url .= '#' . $setting['tab'];
            $breadcrumbs = 'Modula > Galleries > ' . $setting['tab'] . '(tab) > ' . $setting['name'];
        }

        //return '<a href="' . $url . '" class="modula-search-result-url">' . $breadcrumbs . '</a>';
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
                'tab'         => 'misc',
                'parent'      => '',
                'type'        => 'general'
            ),
            'disable_edit'          => array(
                    'name'       => esc_html__( 'Disable "Edit gallery" link', 'modula-best-grid-gallery' ),
                    'description' => esc_html__( 'If you want to disable the "Edit gallery" link from the front-end check this option.', 'modula-best-grid-gallery' ),
                    'page'        => 'modula',
                    'tab'         => 'misc',
                    'parent'      => '',
                    'type'        => 'general'
            ),
            'track_data'            => array(
                    'name'       => esc_html__( 'Track Data', 'modula-best-grid-gallery' ),
                    'description' => esc_html__( 'We would like to track its usage on your site. We don\'t record any sensitive data, only information regarding the WordPress environment and Modula settings, which we will use to help us make improvements.', 'modula-best-grid-gallery' ),
                    'page'        => 'modula',
                    'tab'         => 'misc',
                    'parent'      => '',
                    'type'        => 'general'
            ),
            'enqueue_files_heaging' => array(
                    'name'       => esc_html__( 'Enqueue assets on all pages.', 'modula-best-grid-gallery' ),
                    'description' => esc_html__( 'If you have problems with displaying or running Modula Galleries you might want to enqueue Modula CSS and JS in all pages.', 'modula-best-grid-gallery' ),
                    'page'        => 'modula',
                    'tab'         => 'misc',
                    'parent'      => '',
                    'type'        => 'general'
            ),
            'enqueue_files'         => array(
                    'name'       => esc_html__( 'Enqueue Modula assets', 'modula-best-grid-gallery' ),
                    'description' => esc_html__( 'Enqueue CSS & JS files on all pages', 'modula-best-grid-gallery' ),
                    'page'        => 'modula',
                    'tab'         => 'misc',
                    'parent'      => '',
                    'type'        => 'general'
            ),
            'gridtypes'             => array(
                    'name'       => esc_html__( 'Grid Types', 'modula-best-grid-gallery' ),
                    'description' => esc_html__( 'Select which grid type you are using to enqueue scripts and styles', 'modula-best-grid-gallery' ),
                    'page'        => 'modula',
                    'tab'         => 'misc',
                    'parent'      => 'enqueue_files',
                    'type'        => 'general'

            ),
            'lightboxes'            => array(
                    'name'       => esc_html__( 'Lightbox & links', 'modula-best-grid-gallery' ),
                    'description' => esc_html__( 'Enqueue Fancybox lightbox scripts and styles everywhere.', 'modula-best-grid-gallery' ),
                    'page'        => 'modula',
                    'tab'         => 'misc',
                    'parent'      => 'enqueue_files',
                    'type'        => 'general'
            ),
            'lazy_load'             => array(
                    'name'       => esc_html__( 'Lazy Load', 'modula-best-grid-gallery' ),
                    'description' => esc_html__( 'Check this if you\'re using Lazyload with your galleries', 'modula-best-grid-gallery' ),
                    'page'        => 'modula',
                    'tab'         => 'misc',
                    'parent'      => 'enqueue_files',
                    'type'        => 'general'
            ),
            'link'                  => array(
                    'name'       => esc_html__('Affiliate Link', 'modula-best-grid-gallery'),
                    'description' => '',
                    'page'        => 'modula',
                    'tab'         => 'misc',
                    'parent'      => 'enqueue_files',
                    'type'        => 'general'
            ),
            'text'                  => array(
                    'name'       => esc_html__('Powered By Text', 'modula-best-grid-gallery'),
                    'description' => '',
                    'page'        => 'modula',
                    'tab'         => 'misc',
                    'parent'      => 'enqueue_files',
                    'type'        => 'general'
            ),
            'type'           => array(
                "name"        => esc_html__( 'Gallery Type', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Choose the type of gallery you want to use.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "grid_type" => array(
                "name"        => esc_html__( 'Column Type', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Select the grid type. it will automatically fill each row to the fullest.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),

            "grid_row_height" => array(
                "name"        => esc_html__( 'Row Height.', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the height of each row.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),

            "grid_justify_last_row" => array(
                "name"        => esc_html__( 'Last Row Alignment', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'By selecting justify , the last row of pictures will automatically be resized to fit the full width.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),

            "grid_image_size" => array(
                "name"        => esc_html__( 'Image Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Select the size of your images. ', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),

            "grid_image_dimensions" => array(
                "name"        => esc_html__( ' Image dimensions', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Define image width. If Crop images isn\'t enabled, images will be proportional.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => 'grid_image_size',
                'type'        => 'subjective'
            ),
            "img_crop" => array(
                "name"        => esc_html__( 'Crop Images', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'If this is enabled, images will be cropped down to exactly the sizes defined above.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "grid_image_crop" => array(
                "name"        => esc_html__( 'Crop Images', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'If this is enabled, images will be cropped down to exactly the sizes defined above.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => 'grid_image_size',
                'type'        => 'subjective'
            ),
            "gutter"        => array(
                "name"        => esc_html__( 'Gutter', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Use this slider to adjust the image space in your gallery.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            'tablet_gutter' => array(
                "name"        => esc_html__( 'Gutter for tablet', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Use this to adjust the image space in your gallery for tablet view.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            'mobile_gutter' => array(
                "name"        => esc_html__( 'Gutter for mobile', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Use this to adjust the image space in your gallery for mobile view.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "width"          => array(
                "name"        => esc_html__( 'Width', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Change the width of your gallery. It can be in percentages or pixels.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "height"         => array(
                "name"        => esc_html__( 'Height', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the height of the gallery in pixels.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "randomFactor"   => array(
                "name"        => esc_html__( 'Random factor', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Toggle this to 0 to tune down the randomising factor on Modula\'s grid algorithm.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "shuffle"         => array(
                "name"        => esc_html__( 'Shuffle images', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Toggle this to ON so that your gallery shuffles with each page load.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "powered_by"      => array(
                "name"        => esc_html__( 'Powered by', 'modula-best-grid-gallery'),
                "description" => esc_html__( 'Adds a Powered by Modula text at the bottom right of your gallery.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-general',
                'parent'      => '',
                'type'        => 'subjective'
            ),

            //lightboxes
            "lightbox"       => array(
                "name"        => esc_html__( 'Lightbox &amp; Links', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Choose how the gallery should behave on image clicking.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-lightboxes',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "show_navigation" => array(
                "name"        => esc_html__( 'Navigation arrows', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Enable this to display navigation arrows.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-lightboxes',
                'parent'      => '',
                'type'        => 'subjective'
            ),

            //captions
            "hide_title"        => array(
                "name"        => esc_html__( 'Hide Title', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Hide image titles from your gallery.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "titleColor"     => array(
                "name"        => esc_html__( 'Title Color', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the color of title.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'parent'      => 'hide_title',
                'type'        => 'subjective'
            ),
            "titleFontSize"    => array(
                "name"        => esc_html__( 'Title Font Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'The title font size in pixels (set to 0 to use the theme defaults).', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'parent'      => 'hide_title',
                'type'        => 'subjective'
            ),
            "mobileTitleFontSize"    => array(
                "name"        => esc_html__( 'Mobile Title Font Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'The title font size in pixels (set to 0 to use the theme defaults) for mobile view.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'parent'      => 'hide_title',
                'type'        => 'subjective'
            ),
            "hide_description"        => array(
                "name"        => esc_html__( 'Hide Caption', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Hide image captions from your gallery.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "captionColor"     => array(
                "name"        => esc_html__( 'Caption Color', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the color of captions.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'parent'      => 'hide_description',
                'type'        => 'subjective'
            ),
            "captionFontSize"  => array(
                "name"        => esc_html__( 'Caption Font Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'The caption font size in pixels (set to 0 to use theme defaults).', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'parent'      => 'hide_description',
                'type'        => 'subjective'
            ),
            "mobileCaptionFontSize"  => array(
                "name"        => esc_html__( 'Mobile Caption Font Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'The caption font size in pixels (set to 0 to use theme defaults) for mobile view.', 'modula-best-grid-gallery' ),
                'page'        => '',
                'tab'         => '!modula-captions',
                'parent'      => 'hide_description',
                'type'        => 'subjective'
            ),

            //social
            "enableSocial"   => array(
                "name"        => esc_html__( 'Enable Social Bar', 'modula-best-grid-gallery' ),
                "description" => "Enable social sharing on hovering the gallery thumbnail. Off by default.",
                'tab'         => '!modula-social',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "enableTwitter"   => array(
                "name"        => esc_html__( 'Twitter', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show Twitter Share Icon when hovering the gallery thumbnail.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective'
            ),
            "enableFacebook"  => array(
                "name"        => esc_html__( 'Facebook', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show Facebook Share Icon when hovering the gallery thumbnail', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective'
            ),
            "enableWhatsapp"  => array(
                "name"        => esc_html__( 'Whatsapp', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show Whatsapp Share Icon when hovering the gallery thumbnail', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective'
            ),
            "enableLinkedin"  => array(
                "name"        => esc_html__( 'LinkedIn', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show LinkedIn Share Icon when hovering the gallery thumbnail', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective'
            ),
            "enablePinterest" => array(
                "name"        => esc_html__( 'Pinterest', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show Pinterest Share Icon when hovering the gallery thumbnail', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective'
            ),
            "enableEmail" => array(
                "name"        => esc_html__( 'Email', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Show Email Share Icon when hovering the gallery thumbnail', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective'
            ),
            "emailSubject"   => array(
                "name"        => esc_html__( 'Email subject', 'modula-best-grid-gallery' ),
                "default"     => esc_html__( 'Check out this awesome image !!','modula-best-grid-gallery' ),
                "description" => esc_html__( 'Email subject text, used in hover social sharing', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective'
            ),
            "emailMessage"   => array(
                "name"        => esc_html__( 'Email message', 'modula-best-grid-gallery' ),
                "default"     => esc_html__( 'Here is the link to the image : %%image_link%% and this is the link to the gallery : %%gallery_link%% ','modula-best-grid-gallery'),
                "description" => esc_html__( 'Email share text,used in hover social sharing', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective'
            ),
            "socialIconColor" => array(
                "name"        => esc_html__( 'Color', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Select the color of the icon.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective'
            ),
            "socialIconSize" => array(
                "name"        => esc_html__( 'Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( '16 will be the default value.','modula-best-grid-gallery'),
                'tab'         => '!modula-social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective'
            ),
            "socialIconPadding" => array(
                "name"        => esc_html__( 'Gutter', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Space Between social sharing icons','modula-best-grid-gallery'),
                'tab'         => '!modula-social',
                'parent'      => 'enableSocial',
                'type'        => 'subjective'
            ),

            //loading effects
            "loadedScale"  => array(
                "name"        => esc_html__( 'Scale', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Choose a value below 100% for a zoom-in effect. Choose a value over 100% for a zoom-out effect. Choose 100 for no effect.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-image-loaded-effects',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "inView"  => array(
                "name"        => esc_html__( 'Load in view', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'If your gallery is somewhere further down the page but you still want to make the loading effect please check this toggle.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-image-loaded-effects',
                'parent'      => '',
                'type'        => 'subjective'
            ),

            //hover effects
            "effect" => array(
                "name"        => esc_html__( 'Hover effect', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Select your preferred hover effect', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-hover-effect',
                'parent'      => '',
                'type'        => 'subjective'
            ),

            "cursor"  => array(
                "name"         => esc_html__( 'Cursor Icon', 'modula-best-grid-gallery'),
                "description"  => esc_html__( 'Select your favourite cursor', 'modula-best-grid-gallery'),
                'tab'         => '!modula-hover-effect',
                'parent'      => '',
                'type'        => 'subjective'
            ),

            //style
            "borderSize"   => array(
                "name"        => esc_html__( 'Border Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the border size of images in your gallery.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-style',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "borderRadius" => array(
                "name"        => esc_html__( 'Border Radius', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the radius of the image borders in this gallery.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-style',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "borderColor"  => array(
                "name"        => esc_html__( 'Border Color', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the color of your image borders in this gallery.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-style',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "shadowSize"   => array(
                "name"        => esc_html__( 'Shadow Size', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the size of image shadows in this gallery.', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-style',
                'parent'      => '',
                'type'        => 'subjective'
            ),
            "shadowColor"  => array(
                "name"        => esc_html__( 'Shadow Color', 'modula-best-grid-gallery' ),
                "description" => esc_html__( 'Set the color of image shadows in this gallery', 'modula-best-grid-gallery' ),
                'tab'         => '!modula-style',
                'parent'      => '',
                'type'        => 'subjective'
            ),

            //custom css
            "style"  => array(
                "name"        => esc_html__( 'Custom Css' ),
                "description" => esc_html__( 'Use this section to add custom CSS to your gallery for advanced modifications.' ),
                'tab'         => '!modula-style',
                'parent'      => '',
                'type'        => 'subjective'
            ),
        );

        return $this->modula_settings;
    }
}
new Modula_Search_Settings();