<?php

/**
 * Handles TinyMCE integration for Modula shortcode insertion.
 */
class Modula_Editor {

	/**
	 * @param array $buttons
	 *
	 * @return array
	 */
	public function editor_button( $buttons ) {
		array_push( $buttons, 'separator', 'modula_shortcode_editor' );

		return $buttons;
	}

	/**
	 * @param array $plugin_array
	 *
	 * @return array
	 */
	public function register_editor_plugin( $plugin_array ) {
		$plugin_array['modula_shortcode_editor'] = MODULA_URL . 'assets/js/admin/editor-plugin.js';

		return $plugin_array;
	}

	/**
	 * Display galleries selection.
	 */
	public function modula_shortcode_editor() {
		$css_path  = MODULA_URL . 'assets/css/admin/edit.css';
		$admin_url = admin_url();
		$galleries = Modula_Helper::get_galleries();
		include 'tinymce-galleries.php';
		wp_die();
	}
}
