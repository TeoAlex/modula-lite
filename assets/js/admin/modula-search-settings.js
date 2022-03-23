jQuery(document).ready(function ($) {

    var search_bar = $('#modula_settings_search');
    var typingTimer = null;

    $( search_bar ).keyup(function() {

        //reset timer on each key press
        clearTimeout(typingTimer);
        console.log('aa');
        typingTimer = setTimeout(ajax_modula_search_settings, 1000, search_bar);
        
    });
    var element = $("#modula_settings_search_results");
    $(element).selectize({
        valueField: "name",
        labelField: "name",
        searchField: ["name"],
        create: false,
        render: {
          option: function (item, escape) {
              console.log(item);
              return "<div><img src=" + escape(item.name) + "><span>" + escape(item.name) + "</span></div>";
          },
        },
        load: function (query, callback) {

            console.log( query );
            console.log( callback );
            
         // if (!query.length) return callback();
          $.ajax({
            url: ajaxurl,
            type: 'post',
            dataType: "json",
            data: { 
                action: "modula_search_settings",
                search_val: query,
            },
            error: function () {
              callback();
            },
            success: function (res) {
                console.log(res);
                // callback( [{name:'border'},{name:'booring'}]  );
                callback( res  );
            },
          });
        },
      });

});


    function ajax_modula_search_settings(elem){
        console.log('bb');
        if( elem.val() && '' != elem.val() ){
            console.log('cc');
            jQuery.ajax({
                method: "POST",
                url: ajaxurl,
                data: { 
                    action: "modula_search_settings",
                    search_val: elem.val(),
                },
                success: function (res) {
                    jQuery('#modula_settings_search_results').show();
                    jQuery('#modula_settings_search_results').html(res);
                   
                },
            });
        }
    } 