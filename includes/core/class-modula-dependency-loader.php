<?php

/**
 * Dependency loader for Modula plugin.
 *
 * Responsible for loading all plugin dependencies organized by category.
 *
 * @since 2.0.0
 */
class Modula_Dependency_Loader {

	/**
	 * Load all plugin dependencies.
	 *
	 * Organizes dependency loading into logical categories for better maintainability.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function load_all(): void {
		$this->load_core_dependencies();
		$this->load_admin_dependencies();
		$this->load_public_dependencies();
		$this->load_compatibility_dependencies();
		$this->load_third_party_dependencies();
		$this->load_feature_modules();

		if ( is_admin() ) {
			$this->load_conditional_admin_dependencies();
		}
	}

	/**
	 * Load core dependencies required for basic plugin functionality.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function load_core_dependencies(): void {
		require_once MODULA_PATH . 'includes/libraries/class-modula-template-loader.php';
		require_once MODULA_PATH . 'includes/helper/class-modula-helper.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-image.php';
		require_once MODULA_PATH . 'includes/class-modula-script-manager.php';
		require_once MODULA_PATH . 'includes/public/modula-helper-functions.php';
		require_once MODULA_PATH . 'includes/troubleshoot/class-modula-troubleshooting.php';
		require_once MODULA_PATH . 'includes/grid/class-modula-grid.php';
		require_once MODULA_PATH . 'includes/class-scripts.php';
	}

	/**
	 * Load admin-specific dependencies.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function load_admin_dependencies(): void {
		require_once MODULA_PATH . 'includes/admin/class-modula-cpt.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-upsells.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-admin.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-notifications.php';
		require_once MODULA_PATH . 'includes/admin/wpchill/class-wpchill-notifications.php';
		require_once MODULA_PATH . 'includes/admin/wpchill/class-wpchill-about-us.php';
		require_once MODULA_PATH . 'includes/admin/class-gallery-listing-output.php';
		require_once MODULA_PATH . 'includes/admin/rest-api/class-modula-rest-api.php';
		require_once MODULA_PATH . 'includes/admin/settings/class-modula-settings.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-admin-assets.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-media.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-editor.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-offers.php';
	}

	/**
	 * Load public-facing dependencies.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function load_public_dependencies(): void {
		require_once MODULA_PATH . 'includes/public/class-modula-shortcode.php';
		require_once MODULA_PATH . 'includes/public/meta/class-modula-meta.php';
		require_once MODULA_PATH . 'includes/class-modula-gutenberg.php';
		require_once MODULA_PATH . 'includes/class-modula-image-sitemaps.php';
	}

	/**
	 * Load compatibility dependencies for other plugins and themes.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function load_compatibility_dependencies(): void {
		require_once MODULA_PATH . 'includes/compatibility/class-modula-compatibility.php';
		require_once MODULA_PATH . 'includes/compatibility/class-modula-media-compat.php';
		require_once MODULA_PATH . 'includes/compatibility/class-modula-backward-compatibility.php';
		require_once MODULA_PATH . 'includes/compatibility/class-ai-compatibility.php';
	}

	/**
	 * Load third-party builder integrations.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function load_third_party_dependencies(): void {
		require_once MODULA_PATH . 'includes/third-party-builders/elementor/class-modula-elementor-check.php';
		require_once MODULA_PATH . 'includes/third-party-builders/modula-beaver-block/class-modula-beaver.php';
		require_once MODULA_PATH . 'includes/widget/class-modula-widget.php';
		require_once MODULA_PATH . 'includes/duplicator/class-modula-duplicator.php';
	}

	/**
	 * Load feature modules (AI, licensing, telemetry, etc.).
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function load_feature_modules(): void {
		require_once MODULA_PATH . 'includes/class-modula-licensing.php';
		require_once MODULA_PATH . 'includes/ai/class-client.php';
		require_once MODULA_PATH . 'includes/migrate/class-modula-importer.php';
		require_once MODULA_PATH . 'includes/wpchill/wpchill-telemetry-loader.php';
		require_once MODULA_PATH . 'includes/class-modula-telemetry-integration.php';
	}

	/**
	 * Load admin-only dependencies that are conditionally required.
	 *
	 * These dependencies are only loaded when in the admin area.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function load_conditional_admin_dependencies(): void {
		require_once MODULA_PATH . 'includes/admin/class-modula-readme-parser.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-importer-exporter.php';
		require_once MODULA_PATH . 'includes/libraries/class-modula-review.php';
		require_once MODULA_PATH . 'includes/uninstall/class-modula-uninstall.php';
		require_once MODULA_PATH . 'includes/migrate/class-modula-ajax-migrator.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-admin-helpers.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-debug.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-onboarding.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-dashboard.php';
		require_once MODULA_PATH . 'includes/admin/class-modula-gallery-upload.php';
	}
}
