jQuery(document).ready(function ($) {
    var element = $("#modula_settings_search_results");
    var instance = $(element).selectize({
        valueField: "name",
        labelField: "name",
        searchField: ["name", "description"],
        sortField: "name",
        placeholder: "Search Modula settings...",
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
            var self = this;
            get_settings_data( self );
            
        },
        onItemAdd: function(value, $item){

            if( !this.options[value]['pro'] ){
                window.location.href = this.options[value]['url'];
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
 