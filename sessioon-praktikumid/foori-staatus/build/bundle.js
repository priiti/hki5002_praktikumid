/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DOMElements = __webpack_require__(5);

var _DOMElements2 = _interopRequireDefault(_DOMElements);

var _Trafficlight = __webpack_require__(2);

var _Trafficlight2 = _interopRequireDefault(_Trafficlight);

var _Handler = __webpack_require__(3);

var _Handler2 = _interopRequireDefault(_Handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
	function Application() {
		_classCallCheck(this, Application);

		this.handler = new _Handler2.default();
		document.querySelector('#change-btn').addEventListener('click', this.setStatus.bind(this));
	}

	_createClass(Application, [{
		key: 'addNewTrafficlight',
		value: function addNewTrafficlight(id, status) {
			this.handler.items.push(new _Trafficlight2.default(id, status));
			document.querySelector('#root').appendChild(_DOMElements2.default.createDivElement(id + '-light'));
			this.getStatus();
		}
	}, {
		key: 'getStatus',
		value: function getStatus() {
			var status = this.handler.showObjectStatus();
			status.then(function (data) {
				data.forEach(function (item) {
					document.querySelector('#' + item.id + '-light').innerHTML = 'Foori staatus on: ' + item._status;
				});
			}).catch(function (error) {
				throw new Error(error);
			});
		}
	}, {
		key: 'setStatus',
		value: function setStatus() {
			var _this = this;

			var statusPromise = this.handler.changeObjectStatus();
			statusPromise.then(function (data) {
				data[0].status = 'kollane';
				data[1].status = 'punane';
			}).then(function () {
				_this.getStatus();
			}).catch(function (error) {
				throw new Error(error);
			});
		}
	}]);

	return Application;
}();

exports.default = Application;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Application = __webpack_require__(0);

var _Application2 = _interopRequireDefault(_Application);

var _Header = __webpack_require__(4);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
	document.querySelector('#root').innerHTML = _Header2.default;
	var app = new _Application2.default();
	app.addNewTrafficlight('first', 'roheline');
	app.addNewTrafficlight('second', 'roheline');
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrafficLight = function () {
	function TrafficLight(id, status) {
		_classCallCheck(this, TrafficLight);

		this.id = id;
		this._status = status;
	}

	_createClass(TrafficLight, [{
		key: "status",
		get: function get() {
			return this._status;
		},
		set: function set(value) {
			this._status = value;
		}
	}]);

	return TrafficLight;
}();

exports.default = TrafficLight;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Handler = function () {
	function Handler() {
		_classCallCheck(this, Handler);

		this.items = [];
	}

	_createClass(Handler, [{
		key: 'addNewObject',
		value: function addNewObject(object) {
			this.items.push(object);
		}
	}, {
		key: 'showObjectStatus',
		value: function showObjectStatus() {
			var _this = this;

			if (this.items.length === 0) {
				return null;
			}
			return new Promise(function (resolve, reject) {
				resolve(_this.items);
				reject('Error happened!');
			});
		}
	}, {
		key: 'changeObjectStatus',
		value: function changeObjectStatus() {
			var _this2 = this;

			return new Promise(function (resolve, reject) {
				resolve(_this2.items);
				reject('Error happened!');
			});
		}
	}]);

	return Handler;
}();

exports.default = Handler;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Header = "\n\t<header>\n\t\t<h1>Foori staatus</h1>\n\t</header>\n";

exports.default = Header;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOMElements = function () {
	function DOMElements() {
		_classCallCheck(this, DOMElements);
	}

	_createClass(DOMElements, null, [{
		key: 'createDivElement',
		value: function createDivElement(id) {
			var div = document.createElement('div');
			div.id = id;
			return div;
		}
	}]);

	return DOMElements;
}();

exports.default = DOMElements;

/***/ })
/******/ ]);