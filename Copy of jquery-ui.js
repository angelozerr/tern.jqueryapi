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
  
  var defs = {
    "!name": "jquery-ui",
    "!define": {
       "animateConfig": {
        "easing" :{
        	
        },
        "duration": {
        	
        }
       }
       "AccordionOption": {
         "animate": {
            "!type": "bool|number|string|+animateConfig"	 
         }
       },
      "Accordion": {
    	"!type": "fn()",
        "prototype": {
          "!proto": "jQuery.Widget.prototype",
          "refresh": {
            "!type": "fn()"
          }
        }	  
      }    	
    },
    "jQuery": {
      "fn": {
    	"accordion": {
    	  "!type": "fn(options?: +AccordionOption) -> +Accordion",	
    	}  
      },
      "widget": {
    	"!type": "fn(name: string, base?: fn(), prototype: ?)",
    	"!doc": "Create stateful jQuery plugins using the same abstraction as all jQuery UI widgets.",
    	"!url": "http://api.jqueryui.com/jQuery.widget/#jQuery-widget1"
      },
      "Widget": {
    	"!url": "http://api.jqueryui.com/jQuery.widget/#jQuery-Widget2",
    	"!doc": "The base widget used by the widget factory.",    	
    	"prototype": {
    	  "destroy": {
    	    "!type": "fn()"
    	  }  
    	}
      }
    }
  }
});   