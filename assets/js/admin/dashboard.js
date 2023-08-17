
function activatePlugin(url) {
    jQuery.ajax({
      async: true,
      type: "GET",
      dataType: "html",
      url: url,
      success: function () {
        location.reload();
      },
    });
  }

  // Install plugins actions
  jQuery(".wpchill_install_partener_addon").on("click", (event) => {
    event.preventDefault();
    const current = jQuery(event.currentTarget);
    console.log( current.data("slug"));
    const plugin_slug = current.data("slug");
    const plugin_action = current.data("action");
    const activate_url = current.data("activation_url");

    // Now let's disable the button and show the action text
    //current.attr("disabled", true);
    

    if ("install" === plugin_action) {
        current.html("Installing plugin...", true);
      const args = {
        slug: plugin_slug,
        success: (response) => {
          current.html("Activating plugin...");

          activatePlugin(response.activateUrl);
        },
        error: (response) => {
          current.removeClass("updating-message");

        },
      };

      wp.updates.installPlugin(args);
    } else if ("activate" === plugin_action) {
        current.html("Activating plugin...");

      activatePlugin(activate_url);
    }
  });

/**
 *  Endpoint AI testing
 */
jQuery(document).on('click', '#endpoint_ai', (e) => {
  // Prevent default behaviour
  e.preventDefault();
  // Get the data
  const data = {
    galleryID: jQuery('input#post_ID').val(),
    action   : 'endpoint_ai'
  }
  // Send the data
  jQuery.post(ajaxurl, data, function (response) {
  });
});