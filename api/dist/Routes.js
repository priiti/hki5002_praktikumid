'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _HomeController = require('./controllers/HomeController');

var _HomeController2 = _interopRequireDefault(_HomeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express2.default)();

// Get route testing
routes.get('/', homeController.get);

exports.default = routes;
//# sourceMappingURL=Routes.js.map