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
			add_action( 'wp_ajax_endpoint_ai', array( $this, 'endpoint_ai_request' ) );

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
			// Log to file also.
			global $wp_filesystem;
			require_once( ABSPATH . '/wp-admin/includes/file.php' );
			WP_Filesystem();
			$batch      = json_decode( $request->get_body() );

			$date          = '[' . date( 'Y-m-d H:i:s' ) . '] - ';
			$post_text     = $date . json_encode( $batch );
			$old_post_text = $wp_filesystem->get_contents( __DIR__ . '/log_callback_file.txt' );
			$post_text     = $old_post_text ? $old_post_text . "\n" . $post_text : $post_text;
			$wp_filesystem->put_contents( __DIR__ . '/log_callback_file.txt', $post_text );
			$old_images = false;
			$gallery_id = false;

			if ( empty( $batch ) ) {
				wp_die();
			}

			foreach ( $batch as $image ) {
				$id         = absint( $image->parentReference );
				$alt        = sanitize_text_field( $image->altText );
				$gallery_id = absint( $image->galleryId );

				// Get old images if not already retrieved.
				if ( 0 !== absint( $gallery_id ) && empty( $old_images ) ) {
					$old_images = get_post_meta( $gallery_id, 'modula-images', true );
				}
				// 1. Check if the id corresponds to an attachment.
				if ( get_post_type( $id ) && 'attachment' === get_post_type( $id ) ) {

					// 2. Set post new data in array;
					$img_data = array(
						'ID'           => $id,
						'post_content' => $alt,
						'post_excerpt' => $alt,
					);

					// 3. Update the post into the database.
					wp_update_post( $img_data );

					// 4. Update the image alt text.
					update_post_meta( $id, '_wp_attachment_image_alt', $alt );

					// 5. If we can, also update the gallery's image.
					if ( $old_images ) {

						foreach ( $old_images as $key => $old_image ) {
							if ( absint( $old_image['id'] ) === $id ) {
								$old_images[ $key ]['alt']         = $alt;
								$old_images[ $key ]['description'] = $alt;
							}
						}
					}
				}
			}
			// Place the update here, so we don't update the gallery meta on every image.
			if ( $gallery_id ) {
				update_post_meta( $gallery_id, 'modula-images', $old_images );
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

		public function endpoint_ai_request() {
			// Log to file also.
			global $wp_filesystem;
			require_once( ABSPATH . '/wp-admin/includes/file.php' );
			WP_Filesystem();
			$gallery_id    = absint( $_POST['galleryID'] );
			$imagesData    = get_post_meta( $gallery_id, 'modula-images', true );
			$requestImages = array();
			if ( $imagesData ) {
				foreach ( $imagesData as $image ) {
					$requestImages[] = array(
						'id'          => (string)$image['id'],
						'url'         => ( function_exists( 'wp_get_original_image_url' ) ) ? wp_get_original_image_url( $image['id'] ) : wp_get_attachment_url( $image['id'] ),
						'callbackUrl' => rest_url( 'modula/v1/images_update' ),
					);
				}
			}
			$json_data = array(
				'url'       => rest_url( 'modula/v1/images_update' ),
				'galleryId' => (string) $gallery_id,
				'images'    => $requestImages
			);

			$date          = '[' . date( 'Y-m-d H:i:s' ) . '] - ';
			$post_text     = $date . json_encode( $json_data );
			$old_post_text = $wp_filesystem->get_contents( __DIR__ . '/log_post_file.txt' );
			$post_text     = $old_post_text ? $old_post_text . "\n" . $post_text : $post_text;
			$wp_filesystem->put_contents( __DIR__ . '/log_post_file.txt', $post_text );

			$response = wp_remote_post(
				'http://ec2-35-92-119-243.us-west-2.compute.amazonaws.com:3000/upload-from-urls',
				array(
					'method'      => 'POST',
					'timeout'     => 45,
					'redirection' => 5,
					'httpversion' => '1.0',
					'blocking'    => true,
					'headers'     => array( 'content-type' => 'application/json' ),
					'body'        => json_encode( $json_data ),
					'cookies'     => array(),
				)
			);

			if ( is_wp_error( $response ) ) {
				$error_message = $response->get_error_message();
				$txt           = $date . $error_message;
				$old_text      = $wp_filesystem->get_contents( __DIR__ . '/log_call_response_file.txt' );
				$text          = $old_text ? $old_text . "\n" . $txt : $txt;
			} else {
				$txt      = $date . wp_remote_retrieve_body( $response );
				$old_text = $wp_filesystem->get_contents( __DIR__ . '/log_call_response_file.txt' );
				// Need double quotes around the \n to make it work.
				$text = $old_text ? $old_text . "\n" . $txt : $txt;
			}
			$wp_filesystem->put_contents( __DIR__ . '/log_call_response_file.txt', $text );
			wp_die();
		}
	}
}

new Modula_Rest_Ai();