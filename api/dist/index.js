'use strict';

var _Application = require('./Application');

var _Application2 = _interopRequireDefault(_Application);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.port || 3001;

_Application2.default.listen(PORT, function () {
	console.log('Server running on: http://localhost:' + PORT + '...');
});
//# sourceMappingURL=index.js.map