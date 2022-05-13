jQuery(window).on( 'load', function () {
	if( window.location.hash.length != 0 && window.location.href.indexOf('modula-gallery&page=modula') != -1 ) {

		try_find_setting_general(window.location.href);
	}
    jQuery("#modula_settings_search_results").selectize({
        valueField: "name",
        labelField: "name",
        searchField: ["name", "description"],
        sortField: "name",
        placeholder: translate.placeholder,
        create: false,
        render: {
          option: function (item, escape) {

            var badge = disabled = '';
            if( item.badge == 'pro' ){
                badge = "<span class='modula_search_result_req_pro'>pro</span>";
                disabled = "disabled='disabled' style='pointer-events: none; color: #aaa;'";
            }else{
                badge = "<span class='modula_search_result_badge'>" + item.badge + "</span>";
            }
              return ( 
            "<a href='" + escape(item.url) + "' class='modula_search_result_item' " + disabled + ">\
                <span class='mrgl mrgl-details'>\
                <span class='modula_search_result_item_name'>" + escape(item.name) + "</span>\
                <span class='modula_search_result_item_description'>" + escape(item.description) + "</span>\
                <span class='modula_search_result_item_bread'>" + escape(item.breadcrumbs) + "</span>\
                </span>\
                <span class='mrgl badge-center'>" + badge + "</span>\
            </a>" );

          },
        },
        onInitialize: function () {
            if( !tracking_accord.accord ){
                this.lock();
            }
            var self = this;
            get_settings_data( self );
            

            
        },
        onItemAdd: function(value, $item){

            if( !this.options[value]['pro'] ){
                
                if( window.location.href.indexOf( 'post-new.php?post_type=modula-gallery') != -1 || window.location.href.indexOf( 'post.php?post=') != -1 ){
                    try_find_setting_subjective( this.options[value]['url'] );
                }
                
                if( window.location.href.indexOf( 'post_type=modula-gallery&page=modula') != -1  && window.location.href.indexOf( 'modula-addons') == -1  && 'general' === this.options[value]['type'] ){
                    
                    console.log( 'general function call from click');
                    try_find_setting_general( this.options[value]['url'] );
                }

                window.location.href = this.options[value]['url'];
            }
        },
        onFocus: function(){
            if( !tracking_accord.accord ){
                jQuery( "body" ).removeClass( "modula_searchbar_disabled" );
            }
        },
    });

    function get_settings_data( self ){
        jQuery.ajax({
            url: ajaxurl,
            type: 'post',
            dataType: "json",
            data: { 
                action: "modula_search_settings",
                modula_post_id: modula_post_id.id,
            },
            error: function () {
            return;
            },
            success: function (res) {
                self.addOption( res );
                self.refreshOptions(false);
            },
        });
    }

});

    
function try_find_setting_subjective( $url ){
    var modulaTabHash = $url.split( '#!' )[1];
    var modulaSettingHash = $url.split( '#!' )[2];
    var modulaSettingParent = $url.split( '#!' )[3];

    jQuery( '.modula-tabs,.modula-tabs-content' ).find( '.active-tab' ).removeClass( 'active-tab' );
    jQuery( '.modula-tabs' ).find( '.' + modulaTabHash ).addClass( 'active-tab' );
    jQuery( '#' + modulaTabHash ).addClass( 'active-tab').trigger('modula-current-tab');
    var postAction = jQuery( "#post" ).attr('action');
    if( postAction ) {
        postAction = postAction.split( '#' )[0];
        jQuery( '#post' ).attr( 'action', postAction + window.location.hash );
    }
    if( 'undefined' !== typeof modulaSettingHash ){
        jQuery( '.modula-tabs,.modula-tabs-content' ).find( '.found-setting' ).removeClass( 'found-setting' );

            $found = jQuery( '.modula-tabs-content' ).find( '[data-container="' + modulaSettingHash + '"]' );
            if( $found.is(":not(:visible)") ){
                $found = jQuery( '.modula-tabs-content' ).find( '[data-container="' + modulaSettingParent + '"]' );
            }
            $found.addClass( 'found-setting' );
            jQuery('html, body').animate({
            scrollTop: ($found.offset().top - 300 )
        },500);
    }
}

    
function try_find_setting_general( $url ){
    var modulaSettingHash = $url.split( '#!' )[1];
    var modulaSettingParent = $url.split( '#!' )[2];
    if( 'undefined' !== typeof modulaSettingHash ){
        jQuery( '.modula-columns' ).find( '.found-setting' ).removeClass( 'found-setting' );
            $found = jQuery( '.modula-columns' ).find( '[data-container="' + modulaSettingHash + '"]' );
            if( $found.is(":not(:visible)") ){
                $found = jQuery( '.modula-columns' ).find( '[data-container="' + modulaSettingParent + '"]' );
            }
            $found.addClass( 'found-setting' );
            jQuery('html, body').animate({
            scrollTop: ($found.offset().top - 300 )
        },500);
    }
}