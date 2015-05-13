var util = require("./util");

exports['test QUnit completion'] = function() {
	util.assertCompletion("QUnit.te", {
	    "start":{"line":0,"ch":6},
	    "end":{"line":0,"ch":8},
	    "isProperty":true,
	    "isObjectKey":false,
	    "completions":[{"name":"test","type":"fn(name: string, callback: fn(assert: {}))","origin":"qunit1-19"},
	                   {"name":"testDone","type":"fn(callback: fn(details: ?))","origin":"qunit1-19"},
	                   {"name":"testStart","type":"fn(callback: fn(details: ?))","origin":"qunit1-19"}]
	});
}

if (module == require.main) require("test").run(exports);