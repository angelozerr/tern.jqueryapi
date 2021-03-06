(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("jquery-ui1-12", function(server, options) {

    return {
      defs : defs
    };
  });
  
  var defs = {
  "!name": "jquery-ui1-12",
  "!define": {
    "selectableOption": {
      "appendTo": {
        "!type": "+Selector",
        "!doc": "Which element the selection helper (the lasso) should be appended to."
      },
      "autoRefresh": {
        "!type": "bool",
        "!doc": "This determines whether to refresh (recalculate) the position and size of each selectee at the beginning of each select operation. If you have many items, you may want to set this to false and call the refresh() method manually."
      },
      "cancel": {
        "!type": "+Selector",
        "!doc": "Prevents selecting if you start on elements matching the selector."
      },
      "classes": {
        "!type": "?"
      },
      "delay": {
        "!type": "number",
        "!doc": "Time in milliseconds to define when the selecting should start. This helps prevent unwanted selections when clicking on an element."
      },
      "distance": {
        "!type": "number",
        "!doc": "Tolerance, in pixels, for when selecting should start. If specified, selecting will not start until the mouse has been dragged beyond the specified distance."
      },
      "filter": {
        "!type": "+Selector",
        "!doc": "The matching child elements will be made selectees (able to be selected)."
      },
      "tolerance": {
        "!type": "string",
        "!doc": "\n\t\t\t\tSpecifies which mode to use for testing whether the lasso should select an item. Possible values:\n\t\t\t\t\n\t\t\t\t\t\"fit\": Lasso overlaps the item entirely.\n\t\t\t\t\t\"touch\": Lasso overlaps the item by any amount.\n\t\t\t\t\n\t\t\t"
      }
    },
    "droppableOption": {
      "accept": {
        "!type": "+Selector",
        "!doc": "Controls which draggable elements are accepted by the droppable."
      },
      "activeClass": {
        "!type": "string",
        "!doc": "\n\t\t\t\tIf specified, the class will be added to the droppable while an acceptable draggable is being dragged.\n\t\t\t\tThe activeClass option has been deprecated in favor of the classes option, using the ui-droppable-active property.\n\t\t\t"
      },
      "addClasses": {
        "!type": "bool",
        "!doc": "If set to false, will prevent the ui-droppable class from being added. This may be desired as a performance optimization when calling .droppable() init on hundreds of elements."
      },
      "classes": {
        "!type": "?"
      },
      "greedy": {
        "!type": "bool",
        "!doc": "By default, when an element is dropped on nested droppables, each droppable will receive the element. However, by setting this option to true, any parent droppables will not receive the element. The drop event will still bubble normally, but the event.target can be checked to see which droppable received the draggable element."
      },
      "hoverClass": {
        "!type": "string",
        "!doc": "\n\t\t\t\tIf specified, the class will be added to the droppable while an acceptable draggable is being hovered over the droppable.\n\t\t\t\tThe hoverClass option has been deprecated in favor of the classes option, using the ui-droppable-hover property.\n\t\t\t"
      },
      "scope": {
        "!type": "string",
        "!doc": "Used to group sets of draggable and droppable items, in addition to the accept option. A draggable with the same scope value as a droppable will be accepted."
      },
      "tolerance": {
        "!type": "string",
        "!doc": "\n\t\t\t\tSpecifies which mode to use for testing whether a draggable is hovering over a droppable. Possible values:\n\t\t\t\t\n\t\t\t\t\t\"fit\": Draggable overlaps the droppable entirely.\n\t\t\t\t\t\"intersect\": Draggable overlaps the droppable at least 50% in both directions.\n\t\t\t\t\t\"pointer\": Mouse pointer overlaps the droppable.\n\t\t\t\t\t\"touch\": Draggable overlaps the droppable any amount.\n\t\t\t\t\n\t\t\t"
      }
    },
    "autocompleteOption": {
      "appendTo": {
        "!type": "+Selector",
        "!doc": "\n\t\t\t\tWhich element the menu should be appended to. When the value is null, the parents of the input field will be checked for a class of ui-front. If an element with the ui-front class is found, the menu will be appended to that element. Regardless of the value, if no element is found, the menu will be appended to the body.\n\t\t\t\tNote: The appendTo option should not be changed while the suggestions menu is open."
      },
      "autoFocus": {
        "!type": "bool",
        "!doc": "If set to true the first item will automatically be focused when the menu is shown."
      },
      "classes": {
        "!type": "?"
      },
      "delay": {
        "!type": "number",
        "!doc": "The delay in milliseconds between when a keystroke occurs and when a search is performed. A zero-delay makes sense for local data (more responsive), but can produce a lot of load for remote data, while being less responsive."
      },
      "minLength": {
        "!type": "number",
        "!doc": "The minimum number of characters a user must type before a search is performed. Zero is useful for local data with just a few items, but a higher value should be used when a single character search could match a few thousand items."
      },
      "position": {
        "!type": "?",
        "!doc": "Identifies the position of the suggestions menu in relation to the associated input element. The of option defaults to the input element, but you can specify another element to position against. You can refer to the jQuery UI Position utility for more details about the various options."
      },
      "source": {
        "!type": "[?]",
        "!doc": "\n\t\t\t\tDefines the data to use, must be specified.\n\t\t\t\tIndependent of the variant you use, the label is always treated as text. If you want the label to be treated as html you can use Scott Gonz�lez' html extension. The demos all focus on different variations of the source option - look for one that matches your use case, and check out the code.\n\t\t\t"
      }
    },
    "tooltipOption": {
      "classes": {
        "!type": "?"
      },
      "content": {
        "!type": "fn(event: +Event)",
        "!doc": "\n\t\t\t\tThe content of the tooltip.\n\n\t\t\t\tWhen changing this option, you likely need to also change the items option.\n\t\t\t"
      },
      "items": {
        "!type": "+Selector",
        "!doc": "\n\t\t\t\tA selector indicating which items should show tooltips. Customize if you're using something other then the title attribute for the tooltip content, or if you need a different selector for event delegation.\n\n\t\t\t\tWhen changing this option, you likely need to also change the content option.\n\t\t\t"
      },
      "position": {
        "!type": "?",
        "!doc": "\n\t\t\t\tIdentifies the position of the tooltip in relation to the associated target element. The of option defaults to the target element, but you can specify another element to position against. You can refer to the jQuery UI Position utility for more details about the various options.\n\t\t\t"
      },
      "tooltipClass": {
        "!type": "string",
        "!doc": "\n\t\t\t\tA class to add to the widget, can be used to display various tooltip types, like warnings or errors.\n\t\t\t\tThe tooltipClass option has been deprecated in favor of the classes option, using the ui-tooltip property.\n\t\t\t"
      },
      "track": {
        "!type": "bool",
        "!doc": "\n\t\t\t\tWhether the tooltip should track (follow) the mouse.\n\t\t\t"
      }
    },
    "spinnerOption": {
      "classes": {
        "!type": "?"
      },
      "culture": {
        "!type": "string",
        "!doc": "Sets the culture to use for parsing and formatting the value. If null, the currently set culture in Globalize is used, see Globalize docs for available cultures. Only relevant if the numberFormat option is set. Requires Globalize to be included."
      },
      "icons": {
        "!type": "?",
        "!doc": "\n\t\t\t\tIcons to use for buttons, matching an icon provided by the jQuery UI CSS Framework.\n\t\t\t\t\n\t\t\t\t\tup (string, default: \"ui-icon-triangle-1-n\")\n\t\t\t\t\tdown (string, default: \"ui-icon-triangle-1-s\")\n\t\t\t\t\n\t\t\t"
      },
      "incremental": {
        "!type": "bool",
        "!doc": "Controls the number of steps taken when holding down a spin button."
      },
      "max": {
        "!type": "number|string",
        "!doc": "The maximum allowed value. The element's max attribute is used if it exists and the option is not explicitly set. If null, there is no maximum enforced."
      },
      "min": {
        "!type": "number|string",
        "!doc": "The minimum allowed value. The element's min attribute is used if it exists and the option is not explicitly set. If null, there is no minimum enforced."
      },
      "numberFormat": {
        "!type": "string",
        "!doc": "Format of numbers passed to  Globalize, if available. Most common are \"n\" for a decimal number and \"C\" for a currency value. Also see the culture option."
      },
      "page": {
        "!type": "number",
        "!doc": "The number of steps to take when paging via the pageUp/pageDown methods."
      },
      "step": {
        "!type": "number|string",
        "!doc": "The size of the step to take when spinning via buttons or via the stepUp()/stepDown() methods. The element's step attribute is used if it exists and the option is not explicitly set."
      }
    },
    "draggableOption": {
      "addClasses": {
        "!type": "bool",
        "!doc": "If set to false, will prevent the ui-draggable class from being added. This may be desired as a performance optimization when calling .draggable() on hundreds of elements."
      },
      "appendTo": {
        "!type": "+jQuery|+Element|+Selector|string",
        "!doc": "\n\t\t\t\tWhich element the draggable helper should be appended to while dragging.\n\t\t\t\tNote: The appendTo option only works when the helper option is set to not use the original element.\n\t\t\t"
      },
      "axis": {
        "!type": "string",
        "!doc": "Constrains dragging to either the horizontal (x) or vertical (y) axis. Possible values: \"x\", \"y\"."
      },
      "cancel": {
        "!type": "+Selector",
        "!doc": "Prevents dragging from starting on specified elements."
      },
      "classes": {
        "!type": "?"
      },
      "connectToSortable": {
        "!type": "+Selector",
        "!doc": "Allows the draggable to be dropped onto the specified sortables. If this option is used, a draggable can be dropped onto a sortable list and then becomes part of it. Note: The helper option must be set to \"clone\" in order to work flawlessly. Requires the jQuery UI Sortable plugin to be included."
      },
      "containment": {
        "!type": "+Selector|+Element|string|[?]",
        "!doc": "Constrains dragging to within the bounds of the specified element or region."
      },
      "cursor": {
        "!type": "string",
        "!doc": "The CSS cursor during the drag operation."
      },
      "cursorAt": {
        "!type": "?",
        "!doc": "Sets the offset of the dragging helper relative to the mouse cursor. Coordinates can be given as a hash using a combination of one or two keys: { top, left, right, bottom }."
      },
      "delay": {
        "!type": "number",
        "!doc": "Time in milliseconds after mousedown until dragging should start. This option can be used to prevent unwanted drags when clicking on an element."
      },
      "distance": {
        "!type": "number",
        "!doc": "Distance in pixels after mousedown the mouse must move before dragging should start. This option can be used to prevent unwanted drags when clicking on an element."
      },
      "grid": {
        "!type": "[?]",
        "!doc": "Snaps the dragging helper to a grid, every x and y pixels. The array must be of the form [ x, y ]."
      },
      "handle": {
        "!type": "+Selector|+Element",
        "!doc": "If specified, restricts dragging from starting unless the mousedown occurs on the specified element(s). Only elements that descend from the draggable element are permitted."
      },
      "helper": {
        "!type": "string",
        "!doc": "Allows for a helper element to be used for dragging display."
      },
      "iframeFix": {
        "!type": "bool|+Selector",
        "!doc": "Prevent iframes from capturing the mousemove events during a drag. Useful in combination with the cursorAt option, or in any case where the mouse cursor may not be over the helper."
      },
      "opacity": {
        "!type": "number",
        "!doc": "Opacity for the helper while being dragged."
      },
      "refreshPositions": {
        "!type": "bool",
        "!doc": "\n\t\t\t\tIf set to true, all droppable positions are calculated on every mousemove.\n\t\t\t\tCaution: This solves issues on highly dynamic pages, but dramatically decreases performance.\n\t\t\t"
      },
      "revert": {
        "!type": "bool",
        "!doc": "Whether the element should revert to its start position when dragging stops."
      },
      "revertDuration": {
        "!type": "number",
        "!doc": "The duration of the revert animation, in milliseconds. Ignored if the revert option is false."
      },
      "scope": {
        "!type": "string",
        "!doc": "Used to group sets of draggable and droppable items, in addition to droppable's accept option. A draggable with the same scope value as a droppable will be accepted by the droppable."
      },
      "scroll": {
        "!type": "bool",
        "!doc": "If set to true, container auto-scrolls while dragging."
      },
      "scrollSensitivity": {
        "!type": "number",
        "!doc": "Distance in pixels from the edge of the viewport after which the viewport should scroll. Distance is relative to pointer, not the draggable. Ignored if the scroll option is false."
      },
      "scrollSpeed": {
        "!type": "number",
        "!doc": "The speed at which the window should scroll once the mouse pointer gets within the scrollSensitivity distance. Ignored if the scroll option is false."
      },
      "snap": {
        "!type": "bool|+Selector",
        "!doc": "Whether the element should snap to other elements."
      },
      "snapMode": {
        "!type": "string",
        "!doc": "Determines which edges of snap elements the draggable will snap to. Ignored if the snap option is false. Possible values: \"inner\", \"outer\", \"both\"."
      },
      "snapTolerance": {
        "!type": "number",
        "!doc": "The distance in pixels from the snap element edges at which snapping should occur. Ignored if the snap option is false."
      },
      "stack": {
        "!type": "+Selector",
        "!doc": "Controls the z-index of the set of elements that match the selector, always brings the currently dragged item to the front. Very useful in things like window managers."
      },
      "zIndex": {
        "!type": "number",
        "!doc": "Z-index for the helper while being dragged."
      }
    },
    "tabsOption": {
      "active": {
        "!type": "bool|number",
        "!doc": "\n\t\t\t\tWhich panel is currently open.\n\t\t\t"
      },
      "classes": {
        "!type": "?"
      },
      "collapsible": {
        "!type": "bool",
        "!doc": "When set to true, the active panel can be closed."
      },
      "disabled": {
        "!type": "bool|[?]",
        "!doc": "Which tabs are disabled."
      },
      "event": {
        "!type": "string",
        "!doc": "The type of event that the tabs should react to in order to activate the tab. To activate on hover, use \"mouseover\"."
      },
      "heightStyle": {
        "!type": "string",
        "!doc": "\n\t\t\t\tControls the height of the tabs widget and each panel. Possible values:\n\t\t\t\t\n\t\t\t\t\t\"auto\": All panels will be set to the height of the tallest panel.\n\t\t\t\t\t\"fill\": Expand to the available height based on the tabs' parent height.\n\t\t\t\t\t\"content\": Each panel will be only as tall as its content.\n\t\t\t\t\n\t\t\t"
      }
    },
    "menuOption": {
      "classes": {
        "!type": "?"
      },
      "icons": {
        "!type": "?",
        "!doc": "\n\t\t\t\tIcons to use for submenus, matching an icon provided by the jQuery UI CSS Framework.\n\t\t\t"
      },
      "items": {
        "!type": "string",
        "!doc": "\n\t\t\t\tSelector for the elements that serve as the menu items.\n\t\t\t\tNote: The items option should not be changed after initialization.\n\t\t\t"
      },
      "menus": {
        "!type": "string",
        "!doc": "\n\t\t\t\tSelector for the elements that serve as the menu container, including sub-menus.\n\t\t\t\tNote: The menus option should not be changed after initialization. Existing submenus will not be updated.\n\t\t\t"
      },
      "position": {
        "!type": "?",
        "!doc": "Identifies the position of submenus in relation to the associated parent menu item. The of option defaults to the parent menu item, but you can specify another element to position against. You can refer to the jQuery UI Position utility for more details about the various options."
      },
      "role": {
        "!type": "string",
        "!doc": "\n\t\t\t\tCustomize the ARIA roles used for the menu and menu items. The default uses \"menuitem\" for items. Setting the role option to \"listbox\" will use \"option\" for items. If set to null, no roles will be set, which is useful if the menu is being controlled by another element that is maintaining focus.\n\t\t\t\tNote: The role option should not be changed after initialization. Existing (sub)menus and menu items will not be updated.\n\t\t\t"
      }
    },
    "resizableOption": {
      "alsoResize": {
        "!type": "+Selector|+jQuery|+Element",
        "!doc": "One or more elements to resize synchronously with the resizable element."
      },
      "animate": {
        "!type": "bool",
        "!doc": "Animates to the final size after resizing."
      },
      "animateDuration": {
        "!type": "number|string",
        "!doc": "How long to animate when using the animate option."
      },
      "animateEasing": {
        "!type": "string",
        "!doc": "Which easing to apply when using the animate option."
      },
      "aspectRatio": {
        "!type": "bool|number",
        "!doc": "Whether the element should be constrained to a specific aspect ratio."
      },
      "autoHide": {
        "!type": "bool",
        "!doc": "Whether the handles should hide when the user is not hovering over the element."
      },
      "cancel": {
        "!type": "+Selector",
        "!doc": "Prevents resizing from starting on specified elements."
      },
      "containment": {
        "!type": "+Selector|+Element|string",
        "!doc": "Constrains resizing to within the bounds of the specified element or region."
      },
      "classes": {
        "!type": "?"
      },
      "delay": {
        "!type": "number",
        "!doc": "Tolerance, in milliseconds, for when resizing should start. If specified, resizing will not start until after mouse is moved beyond duration. This can help prevent unintended resizing when clicking on an element."
      },
      "distance": {
        "!type": "number",
        "!doc": "Tolerance, in pixels, for when resizing should start. If specified, resizing will not start until after mouse is moved beyond distance. This can help prevent unintended resizing when clicking on an element."
      },
      "ghost": {
        "!type": "bool",
        "!doc": "If set to true, a semi-transparent helper element is shown for resizing."
      },
      "grid": {
        "!type": "[?]",
        "!doc": "Snaps the resizing element to a grid, every x and y pixels. Array values: [ x, y ]."
      },
      "handles": {
        "!type": "string|?",
        "!doc": "Which handles can be used for resizing."
      },
      "helper": {
        "!type": "string",
        "!doc": "A class name that will be added to a proxy element to outline the resize during the drag of the resize handle. Once the resize is complete, the original element is sized."
      },
      "maxHeight": {
        "!type": "number",
        "!doc": "The maximum height the resizable should be allowed to resize to."
      },
      "maxWidth": {
        "!type": "number",
        "!doc": "The maximum width the resizable should be allowed to resize to."
      },
      "minHeight": {
        "!type": "number",
        "!doc": "The minimum height the resizable should be allowed to resize to."
      },
      "minWidth": {
        "!type": "number",
        "!doc": "The minimum width the resizable should be allowed to resize to."
      }
    },
    "buttonOption": {
      "classes": {
        "!type": "?"
      },
      "icons": {
        "!type": "?",
        "!doc": "\n\t\t\t\tIcons to display, with or without text (see text option). By default, the primary icon is displayed on the left of the label text and the secondary is displayed on the right. The positioning can be controlled via CSS.\n\n\t\t\t\tThe value for the primary and secondary properties must match an icon class name, e.g., \"ui-icon-gear\". For using only one icon: icons: { primary: \"ui-icon-locked\" }. For using two icons: icons: { primary: \"ui-icon-gear\", secondary: \"ui-icon-triangle-1-s\" }.\n\t\t\t"
      },
      "label": {
        "!type": "string",
        "!doc": "Text to show in the button. When not specified (null), the element's HTML content is used, or its value attribute if the element is an input element of type submit or reset, or the HTML content of the associated label element if the element is an input of type radio or checkbox."
      },
      "text": {
        "!type": "bool",
        "!doc": "Whether to show the label. When set to false no text will be displayed, but the icons option must be enabled, otherwise the text option will be ignored."
      }
    },
    "progressbarOption": {
      "classes": {
        "!type": "?"
      },
      "max": {
        "!type": "number",
        "!doc": "The maximum value of the progressbar."
      },
      "value": {
        "!type": "number|bool",
        "!doc": "The value of the progressbar."
      }
    },
    "datepickerOption": {
      "altField": {
        "!type": "+Selector|+jQuery|+Element",
        "!doc": "An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field."
      },
      "altFormat": {
        "!type": "string",
        "!doc": "The dateFormat to be used for the altField option. This allows one date format to be shown to the user for selection purposes, while a different format is actually sent behind the scenes. For a full list of the possible formats see the formatDate function"
      },
      "appendText": {
        "!type": "string",
        "!doc": "The text to display after each date field, e.g., to show the required format."
      },
      "autoSize": {
        "!type": "bool",
        "!doc": "Set to true to automatically resize the input field to accommodate dates in the current dateFormat."
      },
      "buttonImage": {
        "!type": "string",
        "!doc": "A URL of an image to use to display the datepicker when the showOn option is set to \"button\" or \"both\". If set, the buttonText option becomes the alt value and is not directly displayed."
      },
      "buttonImageOnly": {
        "!type": "bool",
        "!doc": "Whether the button image should be rendered by itself instead of inside a button element. This option is only relevant if the buttonImage option has also been set."
      },
      "buttonText": {
        "!type": "string",
        "!doc": "The text to display on the trigger button. Use in conjunction with the showOn option set to \"button\" or \"both\"."
      },
      "calculateWeek": {
        "!type": "fn()",
        "!doc": "A function to calculate the week of the year for a given date. The default implementation uses the ISO 8601 definition: weeks start on a Monday; the first week of the year contains the first Thursday of the year."
      },
      "changeMonth": {
        "!type": "bool",
        "!doc": "Whether the month should be rendered as a dropdown instead of text."
      },
      "changeYear": {
        "!type": "bool",
        "!doc": "Whether the year should be rendered as a dropdown instead of text. Use the yearRange option to control which years are made available for selection."
      },
      "closeText": {
        "!type": "string",
        "!doc": "The text to display for the close link. Use the showButtonPanel option to display this button."
      },
      "constrainInput": {
        "!type": "bool",
        "!doc": "When true, entry in the input field is constrained to those characters allowed by the current dateFormat option."
      },
      "currentText": {
        "!type": "string",
        "!doc": "The text to display for the current day link. Use the showButtonPanel option to display this button."
      },
      "dateFormat": {
        "!type": "string",
        "!doc": "The format for parsed and displayed dates. For a full list of the possible formats see the formatDate function."
      },
      "dayNames": {
        "!type": "[?]",
        "!doc": "The list of long day names, starting from Sunday, for use as requested via the dateFormat option."
      },
      "dayNamesMin": {
        "!type": "[?]",
        "!doc": "The list of minimised day names, starting from Sunday, for use as column headers within the datepicker."
      },
      "dayNamesShort": {
        "!type": "[?]",
        "!doc": "The list of abbreviated day names, starting from Sunday, for use as requested via the dateFormat option."
      },
      "defaultDate": {
        "!type": "+Date|number|string",
        "!doc": "Set the date to highlight on first opening if the field is blank. Specify either an actual date via a Date object or as a string in the current dateFormat, or a number of days from today (e.g. +7) or a string of values and periods ('y' for years, 'm' for months, 'w' for weeks, 'd' for days, e.g. '+1m +7d'), or null for today."
      },
      "duration": {
        "!type": "number|string",
        "!doc": "Control the speed at which the datepicker appears, it may be a time in milliseconds or a string representing one of the three predefined speeds (\"slow\", \"normal\", \"fast\")."
      },
      "firstDay": {
        "!type": "number",
        "!doc": "Set the first day of the week: Sunday is 0, Monday is 1, etc."
      },
      "gotoCurrent": {
        "!type": "bool",
        "!doc": "When true, the current day link moves to the currently selected date instead of today."
      },
      "hideIfNoPrevNext": {
        "!type": "bool",
        "!doc": "Normally the previous and next links are disabled when not applicable (see the minDate and maxDate options). You can hide them altogether by setting this attribute to true."
      },
      "isRTL": {
        "!type": "bool",
        "!doc": "Whether the current language is drawn from right to left."
      },
      "maxDate": {
        "!type": "+Date|number|string",
        "!doc": "The maximum selectable date. When set to null, there is no maximum."
      },
      "minDate": {
        "!type": "+Date|number|string",
        "!doc": "The minimum selectable date. When set to null, there is no minimum."
      },
      "monthNames": {
        "!type": "[?]",
        "!doc": "The list of full month names, for use as requested via the dateFormat option."
      },
      "monthNamesShort": {
        "!type": "[?]",
        "!doc": "The list of abbreviated month names, as used in the month header on each datepicker and as requested via the dateFormat option."
      },
      "navigationAsDateFormat": {
        "!type": "bool",
        "!doc": "Whether the prevText and nextText options should be parsed as dates by the formatDate function, allowing them to display the target month names for example."
      },
      "nextText": {
        "!type": "string",
        "!doc": "The text to display for the next month link. With the standard ThemeRoller styling, this value is replaced by an icon."
      },
      "numberOfMonths": {
        "!type": "number|[?]",
        "!doc": "The number of months to show at once."
      },
      "prevText": {
        "!type": "string",
        "!doc": "The text to display for the previous month link. With the standard ThemeRoller styling, this value is replaced by an icon."
      },
      "selectOtherMonths": {
        "!type": "bool",
        "!doc": "Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true."
      },
      "shortYearCutoff": {
        "!type": "number|string",
        "!doc": "The cutoff year for determining the century for a date (used in conjunction with dateFormat 'y'). Any dates entered with a year value less than or equal to the cutoff year are considered to be in the current century, while those greater than it are deemed to be in the previous century."
      },
      "showAnim": {
        "!type": "string",
        "!doc": "The name of the animation used to show and hide the datepicker. Use \"show\" (the default), \"slideDown\", \"fadeIn\", any of the jQuery UI effects. Set to an empty string to disable animation."
      },
      "showButtonPanel": {
        "!type": "bool",
        "!doc": "Whether to display a button pane underneath the calendar. The button pane contains two buttons, a Today button that links to the current day, and a Done button that closes the datepicker. The buttons' text can be customized using the currentText and closeText options respectively."
      },
      "showCurrentAtPos": {
        "!type": "number",
        "!doc": "When displaying multiple months via the numberOfMonths option, the showCurrentAtPos option defines which position to display the current month in."
      },
      "showMonthAfterYear": {
        "!type": "bool",
        "!doc": "Whether to show the month after the year in the header."
      },
      "showOn": {
        "!type": "string",
        "!doc": "When the datepicker should appear. The datepicker can appear when the field receives focus (\"focus\"), when a button is clicked (\"button\"), or when either event occurs (\"both\")."
      },
      "showOptions": {
        "!type": "?",
        "!doc": "If using one of the jQuery UI effects for the showAnim option, you can provide additional properties for that animation using this option."
      },
      "showOtherMonths": {
        "!type": "bool",
        "!doc": "Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option."
      },
      "showWeek": {
        "!type": "bool",
        "!doc": "When true, a column is added to show the week of the year. The calculateWeek option determines how the week of the year is calculated. You may also want to change the firstDay option."
      },
      "stepMonths": {
        "!type": "number",
        "!doc": "Set how many months to move when clicking the previous/next links."
      },
      "weekHeader": {
        "!type": "string",
        "!doc": "The text to display for the week of the year column heading. Use the showWeek option to display this column."
      },
      "yearRange": {
        "!type": "string",
        "!doc": "The range of years displayed in the year drop-down: either relative to today's year (\"-nn:+nn\"), relative to the currently selected year (\"c-nn:c+nn\"), absolute (\"nnnn:nnnn\"), or combinations of these formats (\"nnnn:-nn\"). Note that this option only affects what appears in the drop-down, to restrict which dates may be selected use the minDate and/or maxDate options."
      },
      "yearSuffix": {
        "!type": "string",
        "!doc": "Additional text to display after the year in the month headers."
      },
      "beforeShow": {
        "!type": "fn()",
        "!doc": "A function that takes an input field and current datepicker instance and returns an options object to update the datepicker with. It is called just before the datepicker is displayed."
      },
      "beforeShowDay": {
        "!type": "fn()",
        "!doc": "A function that takes a date as a parameter and must return an array with:\n\t\t\t\t\n\t\t\t\t\t[0]: true/false indicating whether or not this date is selectable\n\t\t\t\t\t[1]: a CSS class name to add to the date's cell or \"\" for the default presentation\n\t\t\t\t\t[2]: an optional popup tooltip for this date\n\t\t\t\t\n\t\t\t\tThe function is called for each day in the datepicker before it is displayed."
      },
      "onChangeMonthYear": {
        "!type": "fn()",
        "!doc": "Called when the datepicker moves to a new month and/or year. The function receives the selected year, month (1-12), and the datepicker instance as parameters. this refers to the associated input field."
      },
      "onClose": {
        "!type": "fn()",
        "!doc": "Called when the datepicker is closed, whether or not a date is selected. The function receives the selected date as text (\"\" if none) and the datepicker instance as parameters. this refers to the associated input field."
      },
      "onSelect": {
        "!type": "fn()",
        "!doc": "Called when the datepicker is selected. The function receives the selected date as text and the datepicker instance as parameters. this refers to the associated input field."
      }
    },
    "dialogOption": {
      "appendTo": {
        "!type": "+Selector",
        "!doc": "\n\t\t\t\tWhich element the dialog (and overlay, if modal) should be appended to.\n\t\t\t\tNote: The appendTo option should not be changed while the dialog is open.\n\t\t\t"
      },
      "autoOpen": {
        "!type": "bool",
        "!doc": "If set to true, the dialog will automatically open upon initialization. If false, the dialog will stay hidden until the open() method is called."
      },
      "buttons": {
        "!type": "?|[?]",
        "!doc": "Specifies which buttons should be displayed on the dialog. The context of the callback is the dialog element; if you need access to the button, it is available as the target of the event object."
      },
      "classes": {
        "!type": "?"
      },
      "closeOnEscape": {
        "!type": "bool",
        "!doc": "Specifies whether the dialog should close when it has focus and the user presses the escape (ESC) key."
      },
      "closeText": {
        "!type": "string",
        "!doc": "Specifies the text for the close button. Note that the close text is visibly hidden when using a standard theme."
      },
      "dialogClass": {
        "!type": "string",
        "!doc": "\n\t\t\t\tThe specified class name(s) will be added to the dialog, for additional theming.\n\t\t\t\tThe dialogClass option has been deprecated in favor of the classes option, using the ui-dialog property.\n\t\t\t"
      },
      "draggable": {
        "!type": "bool",
        "!doc": "If set to true, the dialog will be draggable by the title bar. Requires the jQuery UI Draggable widget to be included."
      },
      "height": {
        "!type": "number|string",
        "!doc": "The height of the dialog."
      },
      "maxHeight": {
        "!type": "number",
        "!doc": "The maximum height to which the dialog can be resized, in pixels."
      },
      "maxWidth": {
        "!type": "number",
        "!doc": "The maximum width to which the dialog can be resized, in pixels."
      },
      "minHeight": {
        "!type": "number",
        "!doc": "The minimum height to which the dialog can be resized, in pixels."
      },
      "minWidth": {
        "!type": "number",
        "!doc": "The minimum width to which the dialog can be resized, in pixels."
      },
      "modal": {
        "!type": "bool",
        "!doc": "If set to true, the dialog will have modal behavior; other items on the page will be disabled, i.e., cannot be interacted with. Modal dialogs create an overlay below the dialog but above other page elements."
      },
      "position": {
        "!type": "?",
        "!doc": "\n\t\t\t\tSpecifies where the dialog should be displayed when opened. The dialog will handle collisions such that as much of the dialog is visible as possible.\n\t\t\t\tThe of property defaults to the window, but you can specify another element to position against. You can refer to the jQuery UI Position utility for more details about the available properties.\n\t\t\t"
      },
      "resizable": {
        "!type": "bool",
        "!doc": "If set to true, the dialog will be resizable. Requires the jQuery UI Resizable widget to be included."
      },
      "title": {
        "!type": "string",
        "!doc": "Specifies the title of the dialog. If the value is null, the title attribute on the dialog source element will be used."
      },
      "width": {
        "!type": "number",
        "!doc": "The width of the dialog, in pixels."
      }
    },
    "sliderOption": {
      "animate": {
        "!type": "bool|string|number",
        "!doc": "Whether to slide the handle smoothly when the user clicks on the slider track. Also accepts any valid animation duration."
      },
      "classes": {
        "!type": "?"
      },
      "max": {
        "!type": "number",
        "!doc": "The maximum value of the slider."
      },
      "min": {
        "!type": "number",
        "!doc": "The minimum value of the slider."
      },
      "orientation": {
        "!type": "string",
        "!doc": "Determines whether the slider handles move horizontally (min on left, max on right) or vertically (min on bottom, max on top). Possible values: \"horizontal\", \"vertical\"."
      },
      "range": {
        "!type": "bool|string",
        "!doc": "Whether the slider represents a range."
      },
      "step": {
        "!type": "number",
        "!doc": "Determines the size or amount of each interval or step the slider takes between the min and max. The full specified value range of the slider (max - min) should be evenly divisible by the step."
      },
      "value": {
        "!type": "number",
        "!doc": "Determines the value of the slider, if there's only one handle. If there is more than one handle, determines the value of the first handle."
      },
      "values": {
        "!type": "[?]",
        "!doc": "This option can be used to specify multiple handles. If the range option is set to true, the length of values should be 2."
      }
    },
    "buttonsetOption": {
      "items": {
        "!type": "+Selector",
        "!doc": "Which descendant elements to convert manage as buttons."
      }
    },
    "selectmenuOption": {
      "appendTo": {
        "!type": "+Selector",
        "!doc": "Which element to append the menu to. When the value is null, the parents of the <select> are checked for a class name of ui-front. If an element with the ui-front class name is found, the menu is appended to that element. Regardless of the value, if no element is found, the menu is appended to the body."
      },
      "classes": {
        "!type": "?"
      },
      "icons": {
        "!type": "?",
        "!doc": "\n\t\t\t\tIcons to use for the button, matching an icon defined by the jQuery UI CSS Framework.\n\t\t\t\t\n\t\t\t\t\tbutton (string, default: \"ui-icon-triangle-1-s\")\n\t\t\t\t\n\t\t\t"
      },
      "position": {
        "!type": "?",
        "!doc": "Identifies the position of the menu in relation to the associated button element. You can refer to the jQuery UI Position utility for more details about the various options."
      },
      "width": {
        "!type": "number|bool",
        "!doc": "The width of the menu, in pixels. When the value is null, the width of the native select is used. When the value is false, no inline style will be set for the width, allowing the width to be set in a stylesheet."
      }
    },
    "accordionOption": {
      "active": {
        "!type": "bool|number",
        "!doc": "\n\t\t\t\tWhich panel is currently open.\n\t\t\t"
      },
      "animate": {
        "!type": "bool|number|string|?",
        "!doc": "If and how to animate changing panels."
      },
      "classes": {
        "!type": "?"
      },
      "collapsible": {
        "!type": "bool",
        "!doc": "Whether all the sections can be closed at once. Allows collapsing the active section."
      },
      "event": {
        "!type": "string",
        "!doc": "The event that accordion headers will react to in order to activate the associated panel. Multiple events can be specified, separated by a space."
      },
      "header": {
        "!type": "+Selector",
        "!doc": "\n\t\t\t\tSelector for the header element, applied via .find() on the main accordion element. Content panels must be the sibling immediately after their associated headers.\n\t\t\t"
      },
      "heightStyle": {
        "!type": "string",
        "!doc": "\n\t\t\t\tControls the height of the accordion and each panel. Possible values:\n\t\t\t\t\n\t\t\t\t\t\"auto\": All panels will be set to the height of the tallest panel.\n\t\t\t\t\t\"fill\": Expand to the available height based on the accordion's parent height.\n\t\t\t\t\t\"content\": Each panel will be only as tall as its content.\n\t\t\t\t\n\t\t\t"
      },
      "icons": {
        "!type": "?",
        "!doc": "\n\t\t\t\tIcons to use for headers, matching an icon provided by the jQuery UI CSS Framework. Set to false to have no icons displayed.\n\t\t\t\t\n\t\t\t\t\theader (string, default: \"ui-icon-triangle-1-e\")\n\t\t\t\t\tactiveHeader (string, default: \"ui-icon-triangle-1-s\")\n\t\t\t\t\n\t\t\t"
      }
    },
    "sortableOption": {
      "appendTo": {
        "!type": "+jQuery|+Element|+Selector|string",
        "!doc": "Defines where the helper that moves with the mouse is being appended to during the drag (for example, to resolve overlap/zIndex issues)."
      },
      "axis": {
        "!type": "string",
        "!doc": "If defined, the items can be dragged only horizontally or vertically. Possible values: \"x\", \"y\"."
      },
      "cancel": {
        "!type": "+Selector",
        "!doc": "Prevents sorting if you start on elements matching the selector."
      },
      "classes": {
        "!type": "?"
      },
      "connectWith": {
        "!type": "+Selector",
        "!doc": "A selector of other sortable elements that the items from this list should be connected to. This is a one-way relationship, if you want the items to be connected in both directions, the connectWith option must be set on both sortable elements."
      },
      "containment": {
        "!type": "+Element|+Selector|string",
        "!doc": "\n\t\t\t\tDefines a bounding box that the sortable items are constrained to while dragging.\n\n\t\t\t\tNote: The element specified for containment must have a calculated width and height (though it need not be explicit). For example, if you have float: left sortable children and specify containment: \"parent\" be sure to have float: left on the sortable/parent container as well or it will have height: 0, causing undefined behavior.\n\t\t\t"
      },
      "cursor": {
        "!type": "string",
        "!doc": "Defines the cursor that is being shown while sorting."
      },
      "cursorAt": {
        "!type": "?",
        "!doc": "Moves the sorting element or helper so the cursor always appears to drag from the same position. Coordinates can be given as a hash using a combination of one or two keys: { top, left, right, bottom }."
      },
      "delay": {
        "!type": "number",
        "!doc": "Time in milliseconds to define when the sorting should start. Adding a delay helps preventing unwanted drags when clicking on an element."
      },
      "distance": {
        "!type": "number",
        "!doc": "Tolerance, in pixels, for when sorting should start. If specified, sorting will not start until after mouse is dragged beyond distance. Can be used to allow for clicks on elements within a handle."
      },
      "dropOnEmpty": {
        "!type": "bool",
        "!doc": "If false, items from this sortable can't be dropped on an empty connect sortable (see the connectWith option."
      },
      "forceHelperSize": {
        "!type": "bool",
        "!doc": "If true, forces the helper to have a size."
      },
      "forcePlaceholderSize": {
        "!type": "bool",
        "!doc": "If true, forces the placeholder to have a size."
      },
      "grid": {
        "!type": "[?]",
        "!doc": "Snaps the sorting element or helper to a grid, every x and y pixels. Array values: [ x, y ]."
      },
      "handle": {
        "!type": "+Selector|+Element",
        "!doc": "Restricts sort start click to the specified element."
      },
      "helper": {
        "!type": "string",
        "!doc": "Allows for a helper element to be used for dragging display."
      },
      "items": {
        "!type": "+Selector",
        "!doc": "Specifies which items inside the element should be sortable."
      },
      "opacity": {
        "!type": "number",
        "!doc": "Defines the opacity of the helper while sorting. From 0.01 to 1."
      },
      "placeholder": {
        "!type": "string",
        "!doc": "A class name that gets applied to the otherwise white space."
      },
      "revert": {
        "!type": "bool|number",
        "!doc": "Whether the sortable items should revert to their new positions using a smooth animation."
      },
      "scroll": {
        "!type": "bool",
        "!doc": "If set to true, the page scrolls when coming to an edge."
      },
      "scrollSensitivity": {
        "!type": "number",
        "!doc": "Defines how near the mouse must be to an edge to start scrolling."
      },
      "scrollSpeed": {
        "!type": "number",
        "!doc": "The speed at which the window should scroll once the mouse pointer gets within the scrollSensitivity distance."
      },
      "tolerance": {
        "!type": "string",
        "!doc": "\n\t\t\t\tSpecifies which mode to use for testing whether the item being moved is hovering over another item. Possible values:\n\t\t\t\t\n\t\t\t\t\t\"intersect\": The item overlaps the other item by at least 50%.\n\t\t\t\t\t\"pointer\": The mouse pointer overlaps the other item.\n\t\t\t\t\n\t\t\t"
      },
      "zIndex": {
        "!type": "number",
        "!doc": "Z-index for element/helper while being sorted."
      }
    },
    "mouseOption": {
      "cancel": {
        "!type": "+Selector",
        "!doc": "Prevents interactions from starting on specified elements."
      },
      "delay": {
        "!type": "number",
        "!doc": "Time in milliseconds after mousedown until the interaction should start. This option can be used to prevent unwanted interactions when clicking on an element."
      },
      "distance": {
        "!type": "number",
        "!doc": "Distance in pixels after mousedown the mouse must move before the interaction should start. This option can be used to prevent unwanted interactions when clicking on an element."
      }
    }
  },
  "jQuery": {
    "Widget": {
      "!doc": "The base widget used by the widget factory."
    },
    "fn": {
      "accordion": {
        "!type": "fn(options?: +accordionOption)",
        "!doc": "Convert a pair of headers and content panels into an accordion."
      },
      "addClass": {
        "!type": "fn(className: string)",
        "!doc": "Adds the specified class(es) to each of the set of matched elements while animating all style changes."
      },
      "autocomplete": {
        "!type": "fn(options?: +autocompleteOption)",
        "!doc": "Autocomplete enables users to quickly find and select from a pre-populated list of values as they type, leveraging searching and filtering."
      },
      "button": {
        "!type": "fn(options?: +buttonOption)",
        "!doc": "Themeable buttons."
      },
      "buttonset": {
        "!type": "fn(options?: +buttonsetOption)",
        "!doc": "Themeable button sets."
      },
      "cssClip": {
        "!type": "fn(dimensions: ?)",
        "!doc": "Getter/setter for an object version of the CSS clip property."
      },
      "datepicker": {
        "!type": "fn(options?: +datepickerOption)",
        "!doc": "Select a date from a popup or inline calendar"
      },
      "dialog": {
        "!type": "fn(options?: +dialogOption)",
        "!doc": "Open content in an interactive overlay."
      },
      "disableSelection": {
        "!type": "fn()",
        "!doc": "Disable selection of text content within the set of matched elements."
      },
      "draggable": {
        "!type": "fn(options?: +draggableOption)",
        "!doc": "Allow elements to be moved using the mouse."
      },
      "droppable": {
        "!type": "fn(options?: +droppableOption)",
        "!doc": "Create targets for draggable elements."
      },
      "effect": {
        "!type": "fn(effect: string, options: ?)",
        "!doc": "Apply an animation effect to an element."
      },
      "enableSelection": {
        "!type": "fn()",
        "!doc": "Enable selection of text content within the set of matched elements."
      },
      "focus": {
        "!type": "fn(delay: number, callback: fn())",
        "!doc": "Asynchronously set focus to an element."
      },
      "hide": {
        "!type": "fn(effect: string, options: ?)",
        "!doc": "Hide the matched elements, using custom effects."
      },
      "menu": {
        "!type": "fn(options?: +menuOption)",
        "!doc": "\n\t\tThemeable menu with mouse and keyboard interactions for navigation.\n\t"
      },
      "mouse": {
        "!type": "fn(options?: +mouseOption)",
        "!doc": "The base interaction layer."
      },
      "position": {
        "!type": "fn(options: ?)",
        "!doc": "Position an element relative to another."
      },
      "progressbar": {
        "!type": "fn(options?: +progressbarOption)",
        "!doc": "Display status of a determinate or indeterminate process."
      },
      "removeClass": {
        "!type": "fn(className: string)",
        "!doc": "Removes the specified class(es) from each of the set of matched elements while animating all style changes."
      },
      "removeUniqueId": {
        "!type": "fn()",
        "!doc": "Remove ids that were set by .uniqueId() for the set of matched elements."
      },
      "resizable": {
        "!type": "fn(options?: +resizableOption)",
        "!doc": "Change the size of an element using the mouse."
      },
      "scrollParent": {
        "!type": "fn()",
        "!doc": "Get the closest ancestor element that is scrollable."
      },
      "selectable": {
        "!type": "fn(options?: +selectableOption)",
        "!doc": "Use the mouse to select elements, individually or in a group."
      },
      "selectmenu": {
        "!type": "fn(options?: +selectmenuOption)",
        "!doc": "Duplicates and extends the functionality of a native HTML select element to overcome the limitations of the native control."
      },
      "show": {
        "!type": "fn(effect: string, options: ?)",
        "!doc": "Display the matched elements, using custom effects."
      },
      "slider": {
        "!type": "fn(options?: +sliderOption)",
        "!doc": "Drag a handle to select a numeric value."
      },
      "sortable": {
        "!type": "fn(options?: +sortableOption)",
        "!doc": "Reorder elements in a list or grid using the mouse."
      },
      "spinner": {
        "!type": "fn(options?: +spinnerOption)",
        "!doc": "\n\t\tEnhance a text input for entering numeric values, with up/down buttons and arrow key handling.\n\t"
      },
      "switchClass": {
        "!type": "fn(removeClassName: string, addClassName: string)",
        "!doc": "Adds and removes the specified class(es) to each of the set of matched elements while animating all style changes."
      },
      "tabs": {
        "!type": "fn(options?: +tabsOption)",
        "!doc": "A single content area with multiple panels, each associated with a header in a list."
      },
      "toggle": {
        "!type": "fn(effect: string, options: ?)",
        "!doc": "Display or hide the matched elements, using custom effects."
      },
      "toggleClass": {
        "!type": "fn(className: string, switch: bool)",
        "!doc": "Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument, while animating all style changes."
      },
      "tooltip": {
        "!type": "fn(options?: +tooltipOption)",
        "!doc": "Customizable, themeable tooltips, replacing native tooltips."
      },
      "transfer": {
        "!type": "fn(options: ?|number|string)",
        "!doc": "Transfers the outline of an element to another element"
      },
      "uniqueId": {
        "!type": "fn()",
        "!doc": "Generate and apply a unique id for the set of matched elements."
      },
      "zIndex": {
        "!type": "fn(zIndex: number)",
        "!doc": "Set the z-index for an element."
      }
    },
    "widget": {
      "!type": "fn(name: string, base: fn(), prototype: +PlainObject)",
      "!doc": "The name of the widget to create, including the namespace."
    }
  }
};
});