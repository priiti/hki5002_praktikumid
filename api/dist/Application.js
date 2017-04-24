'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _Routes = require('./Routes');

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import mongoose from 'mongoose';
var application = (0, _express2.default)();

// Middleware
application.use(_bodyParser2.default.json());
application.use('/', _Routes2.default);

exports.default = application;
//# sourceMappingURL=Application.js.map