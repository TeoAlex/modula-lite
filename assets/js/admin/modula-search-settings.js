jQuery(document).ready(function ($) {

    $("#modula_settings_search_results").selectize({
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
                window.location.href = this.options[value]['url'];
            }
        },
        onFocus: function(){
            if( !tracking_accord.accord ){
                $( "body" ).removeClass( "modula_searchbar_disabled" );
            }
        },
    });

    function get_settings_data( self ){
        $.ajax({
            url: ajaxurl,
            type: 'post',
            dataType: "json",
            data: { 
                action: "modula_search_settings",
            },
            error: function () {
            return;
            },
            success: function (res) {
                console.log(res);
            // return( res  );
                self.addOption( res );
                self.refreshOptions(false);
            },
        });
    }

});
 