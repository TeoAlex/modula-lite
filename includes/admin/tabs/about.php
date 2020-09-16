<?php
$issues = array(
    'fix'     => array(
        esc_html__( 'Typos fixes', 'modula-best-grid-gallery' ),
        esc_html__( 'Fixed compatibility with themes overwriting CSS for lightbox elements', 'modula-best-grid-gallery' ),
         esc_html__( 'Fixed FooGallery grid type selection on migration', 'modula-best-grid-gallery' ),
    ),
    'feature' => array(
	    esc_html__( 'Enhanced the migration functionality, now using AJAX, so that the PHP time limit won\'t be an issue.', 'modula-best-grid-gallery' ),
	    esc_html__( 'Add a default title to Modula\'s Gutenberg block', 'modula-best-grid-gallery' ),
    )
);

?>
<div id="modula-about-page" class="row modula-about-row">
    <div class="modula-about__container">
        <div class="modula-about-header">
            <div class="modula-about-heading">
                <h1><?php esc_html_e( 'Modula', 'modula-best-grid-gallery' ) ?> <span><?php echo MODULA_LITE_VERSION; ?></span></h1>
            </div>
            <div class="modula-about__header-text">
                <p><?php esc_html_e('Modula is the most powerful, user-friendly WordPress gallery plugin. Add galleries, masonry grids and more in a few clicks.','modula-best-grid-gallery'); ?></p>
            </div>
        </div>
        <div class="modula-about-content">

            <h2><?php printf(esc_html__('Version %s addressed %s fixes and %s enhancements.', 'modula-best-grid-gallery'), MODULA_LITE_VERSION, count($issues['fix']), count($issues['feature'] )); ?></h2>
            <?php if (!empty($issues)) { ?>
            <ul class="modula-about-list">
                <?php
                foreach ($issues as $key => $iss) {
                    foreach ($iss as $is) {
                        echo "<li class='$key'>$is</li>";
                    }
                }
                ?>
            </ul>

            <?php } ?>
        </div>
    </div>
</div>
