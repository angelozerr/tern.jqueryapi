(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  tern.registerPlugin("jquery-ui", function(server, options) {
    return {
      defs : defs
    };
  });
  
  var defs = {"!name":"jquery-ui1-12","!define":{},"jQuery":{"Widget":{"!doc":"The base widget used by the widget factory."},"fn":{"accordion":{"!type":"fn() -> !this","!doc":"Convert a pair of headers and content panels into an accordion."},"autocomplete":{"!type":"fn() -> !this","!doc":"Autocomplete enables users to quickly find and select from a pre-populated list of values as they type, leveraging searching and filtering."},"button":{"!type":"fn() -> !this","!doc":"Themeable buttons."},"buttonset":{"!type":"fn() -> !this","!doc":"Themeable button sets."},"datepicker":{"!type":"fn() -> !this","!doc":"Select a date from a popup or inline calendar"},"dialog":{"!type":"fn() -> !this","!doc":"Open content in an interactive overlay."},"draggable":{"!type":"fn() -> !this","!doc":"Allow elements to be moved using the mouse."},"droppable":{"!type":"fn() -> !this","!doc":"Create targets for draggable elements."},"menu":{"!type":"fn() -> !this","!doc":"\n\t\tThemeable menu with mouse and keyboard interactions for navigation.\n\t"},"mouse":{"!type":"fn() -> !this","!doc":"The base interaction layer."},"progressbar":{"!type":"fn() -> !this","!doc":"Display status of a determinate or indeterminate process."},"resizable":{"!type":"fn() -> !this","!doc":"Change the size of an element using the mouse."},"selectable":{"!type":"fn() -> !this","!doc":"Use the mouse to select elements, individually or in a group."},"selectmenu":{"!type":"fn() -> !this","!doc":"Duplicates and extends the functionality of a native HTML select element to overcome the limitations of the native control."},"slider":{"!type":"fn() -> !this","!doc":"Drag a handle to select a numeric value."},"sortable":{"!type":"fn() -> !this","!doc":"Reorder elements in a list or grid using the mouse."},"spinner":{"!type":"fn() -> !this","!doc":"\n\t\tEnhance a text input for entering numeric values, with up/down buttons and arrow key handling.\n\t"},"tabs":{"!type":"fn() -> !this","!doc":"A single content area with multiple panels, each associated with a header in a list."},"tooltip":{"!type":"fn() -> !this","!doc":"Customizable, themeable tooltips, replacing native tooltips."}}}}
});   