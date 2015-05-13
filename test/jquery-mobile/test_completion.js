var util = require("./util");

exports['test jQuery Mobile completion'] = function() {
	util.assertCompletion("$('#slider').butt", {
	    "start":{"line":0,"ch":13},
	    "end":{"line":0,"ch":17},
	    "isProperty":true,
	    "isObjectKey":false,
	    "completions":[{"name":"button","type":"fn(options?: {})","origin":"jquery-ui1-12"},
	                   {"name":"buttonMarkup","type":"fn(options: bool|string, overwriteClasses: bool)","origin":"jquery-mobile1.5"},
	                   {"name":"buttonset","type":"fn(options?: {})","origin":"jquery-ui1-12"}]
	});
}

if (module == require.main) require("test").run(exports);