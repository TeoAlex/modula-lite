<?php

/**
 * The cpt plugin class.
 *
 * This is used to define the custom post type that will be used for galleries
 *
 * @since      2.0.0
 */
class Modula_Dashboard {

    private $menu_slug;
    private $tabs;
    private $version;
    private $plugin_file;
    private $plugin_cpt;
    private $images_url;
	private $plugin_link;
	private $header_hook;

	public function __construct( $plugin_file, $plugin_cpt, $images_url, $links, $page_header_hook ) {

        $this->version = '1.0.0';

        $this->plugin_file = $plugin_file;
        $this->plugin_cpt  = $plugin_cpt;
        $this->images_url  = $images_url;
        $this->plugin_link = $links;
        $this->header_hook = $page_header_hook; // Like modula_page_header, dlm_page_header, wpmtst_page_header

        $this->menu_slug = 'wpchill-dashboard';
        $this->tabs = apply_filters(
			$this->plugin_cpt . '_dashboard_tabs',
			array(
                'general'      => array( 'name' => __( 'Getting Started', 'modula-best-grid-gallery' ), 'url' => false ),
                'about'        => array( 'name' => __( 'About us', 'modula-best-grid-gallery' ), 'url' => false ),
                'partners'     => array( 'name' => __( 'Partners', 'modula-best-grid-gallery' ), 'url' => false ),
                'extensions'   => array( 'name' => __( 'Extensions', 'modula-best-grid-gallery' ), 'url' => $this->plugin_link['extensions'] ),
                'lite_vs_pro'  => array( 'name' => __( 'Free vs. Premium', 'modula-best-grid-gallery' ), 'url' => $this->plugin_link['lite_vs_pro'] ),
			)
		);

        register_activation_hook( $this->plugin_file, array( $this, 'on_activate_redirect' ) );

        add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ), 20 );

        add_filter( 'admin_menu', array( $this, 'add_dashboard_menu_item' ), 99, 1 );

        // Clear all notices
        add_action('in_admin_header', array( $this, 'clear_admin_notices' ), 99);

        // Show addon's header on dashboard
        add_filter( $this->header_hook, array( $this, 'is_dashboard' ) );

        add_action( 'admin_init', array( $this, 'redirect_to_list_or_dash' ) );

	}

	/**
	 * Hook to activated_plugin to redirect to dashboard
	 *
	 * @since 2.7.5
	 */
	public function on_activate_redirect() {

	    add_action( 'activated_plugin', array( $this, 'wpchill_dashboard_redirect' ) );

	}

	/**
	 * Redirect to dashboard when activated
	 *
	 * @param string $plugin The plugin file.
	 *
	 * @since 2.7.5
	 */
	public function wpchill_dashboard_redirect( $plugin ) {
		if ( $this->plugin_file === $plugin ) {
			wp_safe_redirect( admin_url( 'edit.php?post_type=' . $this->plugin_cpt . '&page=wpchill-dashboard' ) ); 
			exit;
		}
	}

	/**
	 * Adds dashboard to addon's admin menu
	 *
	 * @return void
	 *
	 * @since 2.7.5
	 */
	public function add_dashboard_menu_item() {
        add_submenu_page( 'edit.php?post_type='. $this->plugin_cpt, esc_html__( 'Welcome', 'modula-best-grid-gallery' ), esc_html__( 'Welcome', 'modula-best-grid-gallery' ), 'manage_options', $this->menu_slug, array( $this, 'dashboard_view' ), 0 );
    }

    public function clear_admin_notices(){

        if ( $this->is_dashboard() ) {
            remove_all_actions( 'user_admin_notices' );
            remove_all_actions( 'admin_notices' );
       }
    }

    public function generate_tab_url( $slug ){
        if( isset( $this->tabs[ $slug ] ) ){
            if( $this->tabs[ $slug ][ 'url' ] ){
                return $this->tabs[ $slug ][ 'url' ];
            }else{
                return admin_url('edit.php?post_type=' . $this->plugin_cpt . '&page=' . $this->menu_slug . '&tab='. $slug );
            }
        }
    }

    
    public function render_header(){

        $active = 'general';
        if( isset( $_GET['tab'] ) && '' != $_GET['tab'] ){
            $active = $_GET['tab'];
        }

        ?>
            <div id="wpchill_dashboard_header">
                <div class="wpchill_dashboard_header_tabs nosearch">

                    <?php foreach( $this->tabs as $slug => $tab ): ?>
                        <a href="<?php echo esc_url( $this->generate_tab_url( $slug ) ); ?>" class="wpchill_dashboard_header_tab wpchill_dashboard_header_tab_<?= $slug?> <?php echo ( ( $active === $slug )? 'tab_active' : '' ); ?>"> <?= $tab['name']; ?> </a>
                    <?php endforeach; ?>

                </div>

            <?php //$this->_render_search_bar(); ?>
            </div>
        <?php

    }

    public function _render_search_bar(){
        ?>
            <div class="wpchill_dashboard_header_search">
                    <input type="text" name="search" class="wpchill_dashboard_search" id="wpchill_dashboard_search" placeholder="<?php esc_html_e( 'Search...', 'modula-best-grid-gallery' ); ?>" /><button class="wpchill_dashboard_search_btn"><span class="dashicons dashicons-search"></span></button>
            </div>
        <?php
    }

    public function render_content(){

        $active = 'general';
        if( isset( $_GET['tab'] ) && '' != $_GET['tab'] ){
            $active = $_GET['tab'];
        }
		switch ( $active ) {
			case 'general':
				$this->_render_getting_started_content();
				break;
			case 'about':
				$this->_render_about_content();
				break;
            case 'partners':
                $this->_render_partners_content();
                break;
            case 'troubleshoot':
                $this->_render_troubleshoot_content();
                break;
			default:
				do_action( "wpchill_dashboard_tab_{$active}" );
				break;
		}

    }

    public function _render_getting_started_content(){
    ?>
        <div class="wpchill_dashboard_content_wrap wpchill_dashboard_getting_started" >
            <div class="wpchill-heading-section">
                <h3><?php esc_html_e( 'Thank you for using Modula.', 'modula-best-grid-gallery' ); ?></h3>
                <p> <?php esc_html_e( 'Here are some usefull resources that will help you get started with our plugins: ', 'modula-best-grid-gallery' ); ?> </p>
            </div>
            
            <div class="wpchill_dashboard_grid_3" >
                <div class="wpchill_dashboard_item wpchill_card">
                    <div class="wpchill_dashboard_item_head">
                        <img src="<?php echo esc_url( $this->images_url ) . 'icons8-book-shelf-96.png';?>" class="wpchill_dashboard_item_icon"/>
                        <h3 class="wpchill_dashboard_item_title"> <?php esc_html_e( 'Documentation', 'modula-best-grid-gallery' ); ?> </h3>
                    </div>
                    <p class="wpchill_dashboard_item_text"> <?php esc_html_e( 'Get familiar with our plugin by reading the documentation.', 'modula-best-grid-gallery' ); ?> </p>
                    <a href="<?php echo esc_attr( $this->plugin_link['documentation'] ); ?>" target="_BLANK" class="wpchill_dashboard_item_button">
                        <?php esc_html_e( 'View Documentation', 'modula-best-grid-gallery' ); ?> <span class="dashicons dashicons-arrow-right-alt"></span>
                    </a>
                </div>
                <div class="wpchill_dashboard_item wpchill_card">
                    <div class="wpchill_dashboard_item_head"> 
                        <img src="<?php echo esc_url( $this->images_url ) . 'icons8-services-96.png';?>" class="wpchill_dashboard_item_icon"/>
                        <h3 class="wpchill_dashboard_item_title"> <?php esc_html_e( 'Settings', 'modula-best-grid-gallery' ); ?> </h3>
                    </div>
                    <p class="wpchill_dashboard_item_text"> <?php esc_html_e( 'Dig deeper into what Modula can do for you.', 'modula-best-grid-gallery' ); ?> </p>
                    <a href="<?php echo esc_url( admin_url( 'edit.php?post_type=' . $this->plugin_cpt . '&page=modula' ) ); ?>" class="wpchill_dashboard_item_button">
                        <?php esc_html_e( 'View Settings', 'modula-best-grid-gallery' ); ?> <span class="dashicons dashicons-arrow-right-alt"></span>
                    </a>
                </div>
                <div class="wpchill_dashboard_item wpchill_card">
                    <div class="wpchill_dashboard_item_head">
                        <img src="<?php echo esc_url( $this->images_url ) . 'icons8-extensions-96.png';?>" class="wpchill_dashboard_item_icon"/>
                        <h3 class="wpchill_dashboard_item_title"> <?php esc_html_e( 'Extensions', 'modula-best-grid-gallery' ); ?> </h3>
                    </div>
                    <p class="wpchill_dashboard_item_text"> <?php esc_html_e( 'Make the most of Modula by installing awesome extensions.', 'modula-best-grid-gallery' ); ?> </p>
                    <a href="<?php echo esc_url( admin_url( 'edit.php?post_type=' . $this->plugin_cpt . '&page=modula-addons' ) ); ?>" class="wpchill_dashboard_item_button">
                        <?php esc_html_e( 'View Extensions', 'modula-best-grid-gallery' ); ?> <span class="dashicons dashicons-arrow-right-alt"></span>
                    </a>
                </div>
            </div>

            <!-- Common use cases -->
            <div class="wpchill_card wpchill_dashboard_use_cases_wrap" >
                <h3 class="wpchill_dashboard_item_title">
                    <span class="wpchill_dashboard_item_icon wpchill-common-case-icon">?</span>
                    <?php esc_html_e( 'Common Use Cases', 'modula-best-grid-gallery' ); ?>
                </h3>
                <div class="wpchill_dashboard_grid_2">
                    <div  id="wpchill_use_cases_block" class="wpchill_dashboard_use_cases">
                        <?php $this->render_common_use_cases(); ?>
                    </div>
                </div>
            </div>

             <!-- Call to action/upsell -->
            <div class="wpchill_dashboard_cta_wrap">
                <div class="wpchill_dashboard_cta_left">
                    <h2 class="wpchill_dashboard_cta_title">
                        <span class="wpchill_dashboard_icon wpchill_dashboard_icon_features"></span>
                        <?php esc_html_e( 'Unlock all features of Modula', 'modula-best-grid-gallery' ); ?>
                    </h2>
                    <p class="wpchill_dashboard_default_text">
                        <?php esc_html_e( 'Ready to take your image galleries to the next level? Upgrade to Modula Premium today and unlock more features. ', 'modula-best-grid-gallery' ); ?>
                    </p>
                </div>
                <div class="wpchill_dashboard_cta_right">
                    <a href="<?php echo esc_attr( $this->plugin_link['pricing'] ); ?>" target="_BLANK" class="wpchill_dashboard_item_button"> <?php esc_html_e( 'Get Modula Premium', 'modula-best-grid-gallery' ); ?><span class="dashicons dashicons-arrow-right-alt"></span> </a>
                </div>
            </div>
            <div class="wpchill_dashboard_late_change">
                <!-- Latest from the blog -->
                <div class="wpchill_card wpchill_dashboard_latest_wrap">
                    <h3 class="wpchill_dashboard_item_title">
                        <span class="wpchill_dashboard_icon wpchill_dashboard_icon_blog"></span>
                        <?php esc_html_e( 'Latest from the blog', 'modula-best-grid-gallery' ); ?>
                    </h3>

                    <?php $this->_render_rss_feed(); ?>
                    <a href="<?php echo esc_attr( $this->plugin_link['blog'] ); ?>" target="_BLANK" class="wpchill_dashboard_item_button"> <?php esc_html_e( 'Read the blog', 'modula-best-grid-gallery' ); ?> <span class="dashicons dashicons-arrow-right-alt"></span> </a>
                </div>

                <!-- Changelog -->
                <div class="wpchill_card wpchill_dashboard_changelog_wrap">
                    <h3 class="wpchill_dashboard_item_title"><span class="wpchill_dashboard_icon wpchill_dashboard_icon_changelog"></span><?php esc_html_e( 'Changelog', 'modula-best-grid-gallery' ); ?> </h3>
                    <?php $this->_render_changelog(); ?>
                    <a href="<?php echo plugin_dir_url( $this->plugin_file ) . "changelog.txt"; ?>" target="_BLANK" class="wpchill_dashboard_item_button wpchill_dashboard_item_button_reverse"> <?php esc_html_e( 'View full changelog', 'modula-best-grid-gallery' ); ?> <span class="dashicons dashicons-arrow-right-alt"></span> </a>
                </div>
            </div>
        </div>
    <?php

    }

    public function _render_about_content(){

    ?>
    <div class="wpchill_dashboard_content_wrap">

        <!-- About Us -->
        <div class="wpchill_dashboard_about_us">
            <h1 class="wpchill_dashboard_about_us_title"><?php esc_html_e( 'About Us', 'modula-best-grid-gallery' ); ?></h1>
            <p class="wpchill_dashboard_about_us_text"><?php echo wp_kses_post( __( 'WPChill is a WordPress development studio currently located in Bucharest, Romania. <br> We\'re a handful of friendly developers, marketers & happiness engineers. <br> Say hi 👋', 'modula-best-grid-gallery' ) ); ?></p>
        
        </div>

        <!-- Our Values -->
        <h1 class="wpchill_dashboard_our_values_title"><?php esc_html_e( 'Our values', 'modula-best-grid-gallery' ); ?></h1>
        <div class="wpchill_dashboard_our_values" >
            <div class="wpchill_dashboard_our_values_item" >
                <div class="wpchill_dashboard_our_values_icon"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 60" height="60" width="60"> <rect fill="#38A0CE" rx="30" height="60" width="60" opacity="0.1"></rect> <path stroke-width="0.125" stroke="#38A0CE" d="M13.0625 46.9375V12.0625H47.9375V46.9375H13.0625Z"></path> <path stroke-miterlimit="10" stroke-width="2" stroke="#38A0CE" d="M30.5 33.875C35.3325 33.875 39.25 29.9575 39.25 25.125C39.25 20.2925 35.3325 16.375 30.5 16.375C25.6675 16.375 21.75 20.2925 21.75 25.125C21.75 29.9575 25.6675 33.875 30.5 33.875Z"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M17.2383 41.5315C18.5821 39.2034 20.5152 37.27 22.8431 35.9259C25.1711 34.5817 27.8119 33.874 30.5 33.874C33.1881 33.874 35.8289 34.5817 38.1569 35.9259C40.4848 37.27 42.4179 39.2034 43.7617 41.5315"></path> </svg></span></div>
                <h2 class="wpchill_dashboard_our_values_title"><?php esc_html_e( 'Commitment', 'modula-best-grid-gallery' ); ?></h2>
                <p class="wpchill_dashboard_our_values_text"><?php esc_html_e( 'It is powered by a deep need to help others and build a customer-centric culture.', 'modula-best-grid-gallery' ); ?></p>
            </div>
            <div class="wpchill_dashboard_our_values_item" >
                <div class="wpchill_dashboard_our_values_icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 60" height="60" width="60"> <rect fill="#38A0CE" rx="30" height="60" width="60" opacity="0.1"></rect> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M31.2777 41.9711L42.3519 30.8969C45.0726 28.1625 45.4691 23.6918 42.8988 20.8344C42.2542 20.1143 41.4695 19.5332 40.5928 19.1266C39.716 18.72 38.7655 18.4964 37.7995 18.4695C36.8334 18.4427 35.872 18.6131 34.9739 18.9703C34.0759 19.3275 33.2602 19.8641 32.5765 20.5472L30.4984 22.639L28.7074 20.8344C25.973 18.1137 21.5023 17.7172 18.6449 20.2875C17.9248 20.9321 17.3437 21.7167 16.9371 22.5935C16.5305 23.4703 16.307 24.4207 16.2801 25.3868C16.2532 26.3529 16.4236 27.3143 16.7808 28.2123C17.1381 29.1104 17.6747 29.9261 18.3578 30.6097L29.7191 41.9711C29.9265 42.1765 30.2066 42.2917 30.4984 42.2917C30.7903 42.2917 31.0703 42.1765 31.2777 41.9711V41.9711Z"></path> </svg></span></div>
                <h2 class="wpchill_dashboard_our_values_title"><?php esc_html_e( 'Passion', 'modula-best-grid-gallery' ); ?></h2>
                <p class="wpchill_dashboard_our_values_text"><?php esc_html_e( 'We love our work & craft and allow it to define us. We take pride in the work we deliver.', 'modula-best-grid-gallery' ); ?></p>
            </div>
            <div class="wpchill_dashboard_our_values_item" >
                <div class="wpchill_dashboard_our_values_icon"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 60" height="60" width="60"> <rect fill="#38A0CE" rx="30" height="60" width="60" opacity="0.1"></rect> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M42.5312 18.5625H18.4688C17.8647 18.5625 17.375 19.0522 17.375 19.6562V39.3438C17.375 39.9478 17.8647 40.4375 18.4688 40.4375H42.5312C43.1353 40.4375 43.625 39.9478 43.625 39.3438V19.6562C43.625 19.0522 43.1353 18.5625 42.5312 18.5625Z"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M23.3906 25.125H37.6094"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M23.3906 29.5H37.6094"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M23.3906 33.875H37.6094"></path> </svg></span></div>
                <h2 class="wpchill_dashboard_our_values_title"><?php esc_html_e( 'Learning', 'modula-best-grid-gallery' ); ?></h2>
                <p class="wpchill_dashboard_our_values_text"><?php esc_html_e( 'Honing our craft, staying ahead of the curve, and over-delivering on all fronts.', 'modula-best-grid-gallery' ); ?></p>
            </div>
            <div class="wpchill_dashboard_our_values_item" >
                <div class="wpchill_dashboard_our_values_icon"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 60" height="60" width="60"> <rect fill="#38A0CE" rx="30" height="60" width="60" opacity="0.1"></rect> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M23.9375 40.3438C26.3537 40.3438 28.3125 38.385 28.3125 35.9688C28.3125 33.5525 26.3537 31.5938 23.9375 31.5938C21.5213 31.5938 19.5625 33.5525 19.5625 35.9688C19.5625 38.385 21.5213 40.3438 23.9375 40.3438Z"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M17.375 43.625C18.1391 42.6062 19.1299 41.7793 20.269 41.2098C21.408 40.6403 22.664 40.3438 23.9375 40.3438C25.211 40.3438 26.467 40.6403 27.606 41.2098C28.7451 41.7793 29.7359 42.6062 30.5 43.625"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M23.9375 26.125C26.3537 26.125 28.3125 24.1662 28.3125 21.75C28.3125 19.3338 26.3537 17.375 23.9375 17.375C21.5213 17.375 19.5625 19.3338 19.5625 21.75C19.5625 24.1662 21.5213 26.125 23.9375 26.125Z"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M17.375 29.4062C18.1391 28.3875 19.1299 27.5606 20.269 26.991C21.408 26.4215 22.664 26.125 23.9375 26.125C25.211 26.125 26.467 26.4215 27.606 26.991C28.7451 27.5606 29.7359 28.3875 30.5 29.4062"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M37.0625 40.3438C39.4787 40.3438 41.4375 38.385 41.4375 35.9688C41.4375 33.5525 39.4787 31.5938 37.0625 31.5938C34.6463 31.5938 32.6875 33.5525 32.6875 35.9688C32.6875 38.385 34.6463 40.3438 37.0625 40.3438Z"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M30.5 43.625C31.2641 42.6062 32.2549 41.7793 33.394 41.2098C34.533 40.6403 35.789 40.3438 37.0625 40.3438C38.336 40.3438 39.592 40.6403 40.731 41.2098C41.8701 41.7793 42.8609 42.6062 43.625 43.625"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M37.0625 26.125C39.4787 26.125 41.4375 24.1662 41.4375 21.75C41.4375 19.3338 39.4787 17.375 37.0625 17.375C34.6463 17.375 32.6875 19.3338 32.6875 21.75C32.6875 24.1662 34.6463 26.125 37.0625 26.125Z"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M30.5 29.4062C31.2641 28.3875 32.2549 27.5606 33.394 26.991C34.533 26.4215 35.789 26.125 37.0625 26.125C38.336 26.125 39.592 26.4215 40.731 26.991C41.8701 27.5606 42.8609 28.3875 43.625 29.4062"></path> </svg></span></div>
                <h2 class="wpchill_dashboard_our_values_title"><?php esc_html_e( 'Teamwork', 'modula-best-grid-gallery' ); ?></h2>
                <p class="wpchill_dashboard_our_values_text"><?php esc_html_e( 'We are working together to deliver the best possible customer experience and product.', 'modula-best-grid-gallery' ); ?></p>
            </div>
            <div class="wpchill_dashboard_our_values_item" >
                <div class="wpchill_dashboard_our_values_icon"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 60" height="60" width="60"> <rect fill="#38A0CE" rx="30" height="60" width="60" opacity="0.1"></rect> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M30.5 43.625C37.7487 43.625 43.625 37.7487 43.625 30.5C43.625 23.2513 37.7487 17.375 30.5 17.375C23.2513 17.375 17.375 23.2513 17.375 30.5C17.375 37.7487 23.2513 43.625 30.5 43.625Z"></path> <path stroke-width="0.125" stroke="#38A0CE" fill="#38A0CE" d="M27.1562 27.7656C27.1562 28.6372 26.4497 29.3438 25.5781 29.3438C24.7066 29.3438 24 28.6372 24 27.7656C24 26.8941 24.7066 26.1875 25.5781 26.1875C26.4497 26.1875 27.1562 26.8941 27.1562 27.7656Z"></path> <path stroke-width="0.125" stroke="#38A0CE" fill="#38A0CE" d="M37 27.7656C37 28.6372 36.2934 29.3438 35.4219 29.3438C34.5503 29.3438 33.8438 28.6372 33.8438 27.7656C33.8438 26.8941 34.5503 26.1875 35.4219 26.1875C36.2934 26.1875 37 26.8941 37 27.7656Z"></path> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#38A0CE" d="M36.1875 33.7812C35.6093 34.7774 34.7796 35.6042 33.7815 36.1789C32.7834 36.7536 31.6518 37.0562 30.5 37.0562C29.3482 37.0562 28.2166 36.7536 27.2185 36.1789C26.2204 35.6042 25.3907 34.7774 24.8125 33.7812"></path> </svg></span></div>
                <h2 class="wpchill_dashboard_our_values_title"><?php esc_html_e( 'Fun', 'modula-best-grid-gallery' ); ?></h2>
                <p class="wpchill_dashboard_our_values_text"><?php esc_html_e( 'Setting a fun environment where ideas can take shape is a vital part of the creation process.', 'modula-best-grid-gallery' ); ?></p>
            </div>
            <div class="wpchill_dashboard_our_values_item" >
                <div class="wpchill_dashboard_our_values_icon"><span><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect opacity="0.1" width="60" height="60" rx="30" fill="#38A0CE"></rect> <path d="M31.2777 41.9711L42.3519 30.8969C45.0726 28.1625 45.4691 23.6918 42.8988 20.8344C42.2542 20.1143 41.4695 19.5332 40.5928 19.1266C39.716 18.72 38.7655 18.4964 37.7995 18.4695C36.8334 18.4427 35.872 18.6131 34.9739 18.9703C34.0759 19.3275 33.2602 19.8641 32.5765 20.5472L30.4984 22.639L28.7074 20.8344C25.973 18.1137 21.5023 17.7172 18.6449 20.2875C17.9248 20.9321 17.3437 21.7167 16.9371 22.5935C16.5305 23.4703 16.307 24.4207 16.2801 25.3868C16.2532 26.3529 16.4236 27.3143 16.7808 28.2123C17.1381 29.1104 17.6747 29.9261 18.3578 30.6097L29.7191 41.9711C29.9265 42.1765 30.2066 42.2917 30.4984 42.2917C30.7903 42.2917 31.0703 42.1765 31.2777 41.9711V41.9711Z" stroke="#38A0CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg></span></div>
                <h2 class="wpchill_dashboard_our_values_title"><?php esc_html_e( 'Integrity', 'modula-best-grid-gallery' ); ?></h2>
                <p class="wpchill_dashboard_our_values_text"><?php esc_html_e( 'Acting with solid ethics is a priority for everyone representing the organization.', 'modula-best-grid-gallery' ); ?></p>
            </div>
        </div>

        <div class="wpchill_dashboard_about_button" > <a href="https://wpchill.com/about/" target="_BLANK" class="wpchill_dashboard_item_button"> <?php esc_html_e( 'Find more about us', 'modula-best-grid-gallery' ); ?> <span class="dashicons dashicons-arrow-right-alt"></span> </a> </div>

    </div>
    <?php

    }

    public function _render_partners_content(){
        ?>

        <div class="wpchill_dashboard_partners" >
            <div class="wpchill-heading-section">
                <h3><?php esc_html_e( 'Our Partners', 'modula-best-grid-gallery' ); ?></h3>
                <p> <?php esc_html_e( 'Other plugins that are known to work great alongside Modula', 'modula-best-grid-gallery' ); ?> </p>
            </div>

            
            <div class="wpchill-addons-container">
                <?php $this->render_partners(); ?>
            </div>
        </div>

        <?php
    }

    public function _render_troubleshoot_content(){

        echo 'pagee!';

    }

    public function _render_rss_feed(){
        include_once( ABSPATH . WPINC . '/feed.php' );
  
        // Get a SimplePie feed object from the specified feed source.
        $rss = fetch_feed(  $this->plugin_link['feed'] );
          
        if ( ! is_wp_error( $rss ) ) {
            $maxitems = $rss->get_item_quantity( 4 ); 
            $rss_items = $rss->get_items( 0, $maxitems );
        }

        ?>
        <div class="wpchill_dashboard_latest_items">
        <?php foreach ( $rss_items as $item ) : ?>
            <?php
            $img = $item->get_description();
            $start = strpos( $img , '||feed_img_start||') + 18;
            $end = strpos( $img, '||feed_img_end||' ) ;
            $img = substr( $img, $start, $end - $start );

            if( false == strpos( $img , '||feed_img_start||') || false == strpos( $img, '||feed_img_end||' ) ){
                $img = plugin_dir_url( $this->plugin_file ) .'assets/images/dashboard/blog-default.png';
            }

                ?>
            <div class="wpchill_dashboard_latest_item">
                <img src="<?php echo esc_url( $img ); ?>" class="wpchill_dashboard_latest_item_img" />
                <div class="wpchill_dashboard_latest_item_data">
                    <a target="_blank" class="wpchill_dashboard_latest_item_title" href="<?php echo esc_url( $item->get_permalink() ); ?>" > <?php echo esc_html( $item->get_title() ); ?></a>
                    <div class="wpchill_dashboard_latest_item_details"><span class="wpchill_dashboard_latest_item_author"><span class="dashicons dashicons-admin-users"></span> <?php echo esc_html( $item->get_author()->get_name() ); ?> </span> - <span class="wpchill_dashboard_latest_item_date"><span class="dashicons dashicons-clock"></span> <?php echo esc_html( $item->get_date( get_option('date_format') ) ); ?> </span></div>
                </div>
            </div>
        <?php endforeach; ?>
        </div>
        <?php
    }

    public function _render_changelog(){
        global $wp_filesystem;

        require_once ( ABSPATH . '/wp-admin/includes/file.php' );
        WP_Filesystem();

        $changelog = ABSPATH .'wp-content/plugins/'. dirname( $this->plugin_file) . "/last-changelog.txt";

        echo '<div class="wpchill_dashboard_changelog">';

        if ( $wp_filesystem->exists( $changelog ) ) {
            $content = $wp_filesystem->get_contents( $changelog );
            echo nl2br(esc_html($content));
        }else{
            esc_html_e( 'The changelog.txt file is missing.', 'modula-best-grid-gallery' );
        }
        echo '</div>';
    }

	public function render_partners() {

        $addons = get_transient( 'wpchill_all_partners' );

        if ( false == $addons ){

            $addons = array();

            $url =  $this->plugin_link['partners'];
    
            // Get data from the remote URL.
            $response = wp_remote_get( $url );

            if ( ! is_wp_error( $response ) ) {
    
                // Decode the data that we got.
                $data = json_decode( $response['body'] , true );
                if ( ! empty( $data ) && is_array( $data ) ) {
                    
                    // Store the data for a week.
                    set_transient( 'wpchill_all_partners', $data, 7 * DAY_IN_SECONDS );
                }

                $addons = $data;
            }
        }

		if ( ! empty( $addons ) ) {

			foreach ( $addons as $addon ) {

                $addon_path = $addon['slug'] . '/' . $addon['slug'] . '.php';
                $addon_status = $this->is_addon_installed( $addon_path ); // should look like 'wp-smtp/wp-smtp.php'

                echo '<div class="wpchill-addon">';
                echo '<div class="wpchill-addon-box">';
        
                if ( !isset( $addon['image'] ) || '' == $addon['image'] ){
                    echo '<div class="wpchill-addon-box-image"><img src="' . esc_url( plugin_dir_url( $this->plugin_file ) .'assets/images/dashboard/blog-default.png' ) . '"></div>';
                } else {
                    echo '<div class="wpchill-addon-box-image"><img src="' . esc_url( $addon['image'] ) . '"></div>';
                }
        
                echo '<div class="wpchill-addon-content">';
                echo '<h3>' . esc_html( $addon['name'] ) . '</h3>';
                echo ( isset( $addon['version'] ) ) ? '<span class="wpchill-addon-version">' . esc_html( 'V ' . $addon['version'] ) . '</span>' : '';
                echo '<div class="wpchill-addon-description">' . wp_kses_post( $addon['description'] ) . '</div>';
                echo '</div>';
                echo '</div>';

                echo '<div class="wpchill-addon-actions">';

                if( empty( $addon['url'] ) ||  'false' == $addon_status ) :

                    if( 'false' != $addon_status ):
                        
                        $activate_url = add_query_arg(
                            array(
                                'action'        => 'activate',
                                'plugin'        => rawurlencode( $addon_path ),
                                'plugin_status' => 'all',
                                'paged'         => '1',
                                '_wpnonce'      => wp_create_nonce( 'activate-plugin_' . $addon_path ),
                            ),
                            admin_url( 'plugins.php' )
                        );	
                    ?>
                        <button class="button wpchill_install_partener_addon"  data-slug="<?php echo esc_attr( $addon['slug'] ); ?>" data-action="<?php echo ( 'install' == $addon_status ? 'install' : 'activate' ); ?>" data-activation_url="<?php echo esc_url( $activate_url ); ?>"><?php echo sprintf( esc_html__( '%s Addon', 'check-email' ),  ( 'install' == $addon_status ? 'Install' : 'Activate' ) ); ?></button>
                    
                    <?php else: ?>
                        <button class="button" disabled="disabled"><?php esc_html_e( 'Already installed', 'modula-best-grid-gallery' ); ?> </button>
                    <?php endif; ?>
                <?php else: ?>
                    <a href="<?php echo $addon['url']; ?> " class="button" ><?php esc_html_e( 'Find more', 'modula-best-grid-gallery' ); ?> </a>
                <?php endif; ?>
                </div>
				</div>
<?php

			}
		}
	}

	/**
	 * Remove Add New link from menu item
	 *
	 * @param $submenu_file
	 *
	 * @return mixed
	 *
	 * @since 2.3.4
	 */
	public function dashboard_view() {

        echo '<div id="wpchill_dashboard_container">';
            $this->render_header();
            $this->render_content();
        echo '</div>';
	}

    /**
    * Checks if WP.org addon is installed and/or active
    * @return string 
    * @since 1.0.5
    */
	public function is_addon_installed( $plugin_path ) {
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		$all_plugins = get_plugins();

		if ( empty( $all_plugins[$plugin_path] ) ) {

			return 'install';
		}else{
			if( !is_plugin_active( $plugin_path ) ){

				return 'activate';
			}else{
				return 'false';
			}
		}
	}

    /**
	 * Check if dashboard page
	 *
	 * @param $return
	 *
	 * @return bool|mixed
	 * @since 2.5.3
	 */
	public function is_dashboard() {

        if ( isset( $_GET['page'] ) && 'wpchill-dashboard' === $_GET['page'] ) {
            return true;
       }

       return false;
	}

    public function enqueue_scripts(){

        wp_enqueue_style( 'modula-dashboard-style', plugin_dir_url( $this->plugin_file ) . 'assets/css/admin/dashboard.css', null, $this->version );
        wp_enqueue_script( 'modula-dashboard-script', plugin_dir_url( $this->plugin_file ) . 'assets/js/admin/dashboard.js', array( 'jquery', 'updates' ), $this->version, true );

    }

	public function render_common_use_cases(){
		
		// Make the request
		$request = wp_remote_get( $this->plugin_link['common_use_cases'] );

        $cases = array();
        if ( ! is_wp_error( $request ) ) {
    
            // Decode the data that we got.
            $data = json_decode( str_replace( "\'s", "'s", $request['body'] ), true );

            $cases = $data;
        }
        foreach( $cases as $case ):
        ?>
        <div class="wpchill_dashboard_use_case"> 
        <h4 class="wpchill_dashboard_uc_title"> <?php echo esc_html( $case['title'] ); ?> </h4> 
            <p class="wpchill_dashboard_item_text"> <?php echo wp_kses_post( $case['description'] ); ?> </p> 
        </div>

        <?php
        endforeach;
	}


    public function redirect_to_list_or_dash(){
        if( $this->is_dashboard() && ! isset( $_GET['post_type'] )){
            $url_to_galleries = add_query_arg( array(
                'post_type' => 'modula-gallery', 
            ), admin_url( 'edit.php') );
            wp_redirect( $url_to_galleries );
            die();
        }
    }

}

