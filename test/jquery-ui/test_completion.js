var util = require("./util");

exports['test jQuery UI completion'] = function() {
	util.assertCompletion("$('#slider').sl", {
	    "start":{"line":0,"ch":13},
	    "end":{"line":0,"ch":15},
	    "isProperty":true,
	    "isObjectKey":false,
	    "completions":[{"name":"slice","type":"fn(start: number, end: number) -> jQuery.fn","origin":"jQuery"},
	                   {"name":"slideDown","type":"fn(duration?: number, complete?: fn()) -> jQuery.fn","origin":"jQuery"},
	                   {"name":"slideToggle","type":"fn(duration?: number, complete?: fn()) -> jQuery.fn","origin":"jQuery"},
	                   {"name":"slideUp","type":"fn(duration?: number, complete?: fn()) -> jQuery.fn","origin":"jQuery"},
	                   {"name":"slider","type":"fn(options?: {})","origin":"jquery-ui1-12"}]
	});
}

if (module == require.main) require("test").run(exports);