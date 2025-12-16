<?php

class Modula_Insights_Base {
	private static $instance;
	/**
	 * Active extensions option
	 *
	 * @var string
	 */
	private $active_extensions = 'modula_pro_active_extensions';

	public static function get_instance() {
		if ( ! isset( self::$instance ) || ! ( self::$instance instanceof Modula_Insights_Base ) ) {
			self::$instance = new Modula_Insights_Base();
		}
		return self::$instance;
	}
}
