<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Modula_Rest_Ai' ) ) {

	/**
	 * Modula_Rest_Ai
	 *
	 * @since 4.6.0
	 */
	class Modula_Rest_Ai {

		/**
		 * DLM_Reports constructor.
		 *
		 * @since 4.6.0
		 */
		public function __construct() {

			add_action( 'rest_api_init', array( $this, 'register_routes' ) );
			add_action( 'admin_notices', array( $this, 'test' ) );

		}

        /**
		 * Register DLM Logs Routes
		 *
		 * @since 4.6.0
		 */
		public function register_routes() {
            
			// The REST route for downloads reports.
			register_rest_route(
				'modula/v1',
				'/images_update',
				array(
					'methods'  => 'POST',
					'callback' => array( $this, 'update_images' ),
				)
			);

		}

        public function update_images( WP_REST_Request $request ){

            $batch      = json_decode( $request->get_body() );
            $images     = array();
            $old_images = false;

            if ( ! empty( $batch ) ) {
                $images = $batch->images;
            }

            if ( isset( $batch->gallery_id ) && 0 !== absint( $batch->gallery_id ) ) {
                $old_images = get_post_meta( $batch->gallery_id, 'modula-images', true );
            }
            var_dump($old_images);
            foreach( $images as $image ) {

                // 1. Check if the id coresponds to an attachment.
                if ( get_post_type( $image->id ) && get_post_type( $image->id ) == 'attachment' ) {

                    // 2. Set post new data in array;
                    $img_data = array(
                        'ID'           => $image->id,
                        'post_title'   => $image->title,
                        'post_content' => $image->description,
                        'post_excerpt' => $image->description,
                    );

                    // 3. Update the post into the database
                    wp_update_post( $img_data );

                    // 4. Update the image alt text.
                    update_post_meta( $image->id, '_wp_attachment_image_alt', $image->alt );

                    // 5. If we can, also update the gallery's image
                    if ( $old_images ) {
                        foreach ( $old_images as $key => $old_image ) {
                            if ( $old_image['id'] == $image->id ) {
                                $old_images[ $key ]['alt']         = $image->alt;
                                $old_images[ $key ]['title']       = $image->title;
                                $old_images[ $key ]['description'] = $image->description;
                            }
                        }
                        update_post_meta( $batch->gallery_id, 'modula-images', $old_images );
                    }
                }
            }
            die();
        }

        public function test(){
            ?>
            <button class="button butontest"> AAAAAAAAAAAAA </button>
            <script>
                jQuery(document).on("click", '.butontest', function (e) {
                    const date = {
                        batchid: 12,
                        gallery_id: 908,
                        images: [{ id: 935, alt: 'Alt 1', title: 'Title 1', description: 'Desc 1' }, { id: 922, alt: 'Alt 2', title: 'Title 2', description: 'Desc 2' }, { id: 954, alt: 'Alt 3', title: 'Title 3', description: 'Desc 3' }],
                    };
                    e.preventDefault();
                    jQuery.ajax({
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json',
                        url: 'https://modula.local/wp-json/modula/v1/images_update',
                        data: JSON.stringify(date),
                        success: function (response) {
                            if (response) {
                                console.log(response); //testing what's in the response
                            }
                        }
                    });
                });
            </script>
            
            <?php
        }
    }
}

new Modula_Rest_Ai();