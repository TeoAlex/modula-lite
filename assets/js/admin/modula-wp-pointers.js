jQuery(document).ready( function($) {
    modula_open_pointer(0);

    function accept_tracking( elem ){
        $.post( ajaxurl, {
            action: 'accept_modula_search_tracking',
            consent: 'accept'
        });

        var select = $("#modula_settings_search_results");
        select[0].selectize.unlock();
        elem.pointer('close');

    }
    function reject_tracking( elem ){
        $.post( ajaxurl, {
            action: 'accept_modula_search_tracking',
            consent: 'reject'
        });

        var select = $("#modula_settings_search_results");
        select[0].selectize.lock();
        elem.pointer('close');

    }

    function modula_open_pointer(i) {
        pointer = modulaPointer.pointers[i];
        options = $.extend( pointer.options, {

            buttons: function( event, t ) {
                    button  = $( '<a class=\"close\" href=\"#\">' + modulaPointerButtons.reject + '</a>' ),
                    button2 = $( '<a class=\"button button-primary\" href=\"#\">' + modulaPointerButtons.accept + '</a>' ),
                    wrapper = $( '<div class=\"modula-pointer-buttons\" />' );

                button.on( 'click.pointer', function(e) {
                    e.preventDefault();
                    reject_tracking(t.element);
                });

                button2.on( 'click.pointer', function(e) {
                    e.preventDefault();
                    accept_tracking(t.element);
                });

                wrapper.append( button2 );
                wrapper.append( button );

                return wrapper;
            },
        });
 
        $(pointer.target).pointer( options ).pointer('open');
    }
});