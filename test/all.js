exports['test jQuery UI Tern completion'] = require('./jquery-ui/test_completion');
exports['test jQuery Mobile Tern completion'] = require('./jquery-mobile/test_completion');
if (require.main === module) require("test").run(exports);