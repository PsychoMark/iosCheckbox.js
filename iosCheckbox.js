/**
 * iosCheckbox.js
 * Version: 2.0.0
 *
 * Fork of iosCheckbox.js by Ron Masas
 * https://github.com/masasron/iosCheckbox.js
 *
 * Fork by: Mark van Renswoude
 */

(function($)
{
    $.fn.extend(
      {
        iosCheckbox: function(options)
        {
          function getParameter(element, name, defaultValue)
          {
            var data = $(element).data(name);
            if (data)
              return data;

            if (typeof options !== 'undefined' && options[name])
              return options[name];

            return defaultValue;
          }


          function toggle(org_checkbox, ios_checkbox)
          {
            ios_checkbox.toggleClass("checked");

            org_checkbox.prop('checked', ios_checkbox.hasClass("checked"));
            org_checkbox.change();
          }


          $(this).each(function()
          {
            var org_checkbox = $(this);

            // Determine if we've been here before...
            // For now modifications aren't supported, but this would be the place to add it.
            if (org_checkbox.data('iosCheckboxified'))
              return;

            var style = getParameter(org_checkbox, 'style', 'slide');
            var extraClass = getParameter(org_checkbox, 'class', null);

            org_checkbox.data('iosCheckboxified', true);
            var ios_checkbox = $('<div>', { class: 'ios-ui-' + style }).append($('<div>', { class: 'inner' }));

            if (org_checkbox.is(':checked'))
              ios_checkbox.addClass('checked');

            if (extraClass)
              ios_checkbox.addClass(extraClass);

            // Capture changes to the original checkbox to support
            // <label for="[org_checkbox id]"> tags
            org_checkbox.change(function()
            {
              if (org_checkbox.is(':checked') != ios_checkbox.hasClass('checked'))
                toggle(org_checkbox, ios_checkbox);
            })

            // Hide the original checkbox
            org_checkbox.hide().after(ios_checkbox);

            ios_checkbox.click(function()
            {
              toggle(org_checkbox, ios_checkbox);
				    });
			    });
        }
    });
})(jQuery);
