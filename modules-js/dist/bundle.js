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

var _Canvas = __webpack_require__(2);

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Rectangle = __webpack_require__(5);

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _Circle = __webpack_require__(3);

var _Circle2 = _interopRequireDefault(_Circle);

var _Nav = __webpack_require__(4);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
	function App() {
		_classCallCheck(this, App);

		document.body.innerHTML = _Nav2.default;
		this.board = new _Canvas2.default(600, 600, 'board');
	}

	_createClass(App, [{
		key: 'createDrops',
		value: function createDrops(num) {
			for (var i = 0; i < num; i++) {
				var color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
				var circle = new _Circle2.default(this.randomNumber(1, this.board.width), this.randomNumber(-20, -200), this.randomNumber(2, 5), color, this.randomNumber(3, 7));
				this.board.addDrawableItems(circle);
			}
		}
	}, {
		key: 'randomNumber',
		value: function randomNumber(start, end) {
			return Math.floor(Math.random() * end + start);
		}
	}, {
		key: 'expolode',
		value: function expolode(yValue, itemRadius) {
			if (yValue > this.board.height - itemRadius * 2) {
				return true;
			}
			return false;
		}
	}, {
		key: 'animation',
		value: function animation(board) {
			var _this = this;

			this.board.render();
			this.board.items.forEach(function (item) {
				item._yValue += item._speed;
				if (_this.expolode(item._yValue, item._radius)) {
					item._radius += 4;
				}
				if (item._yValue > _this.board.height) {
					item._yValue = _this.randomNumber(-20, -200);
					item._xValue = _this.randomNumber(1, _this.board.width);
					item._speed = _this.randomNumber(3, 7);
					item._radius = _this.randomNumber(2, 5);
				}
			});
			window.requestAnimationFrame(this.animation.bind(this, this.board));
		}
	}]);

	return App;
}();

exports.default = App;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(0);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
	var application = new _App2.default();
	application.createDrops(500);
	application.animation(application.board);
}; // Staring point of the application

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
	function Canvas(width, height, destination) {
		_classCallCheck(this, Canvas);

		this.items = [];
		this.width = width;
		this.height = height;
		this.destination = destination;
		var canvas = document.createElement('canvas');
		canvas.width = this.width;
		canvas.height = this.height;
		canvas.style.border = '1px solid black';
		document.querySelector('#' + this.destination).appendChild(canvas);
		this.context = canvas.getContext('2d');
	}

	_createClass(Canvas, [{
		key: 'addDrawableItems',
		value: function addDrawableItems(object) {
			this.items.push(object);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
			this.context.fillStyle = 'black';
			this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
			this.items.forEach(function (item) {
				item.draw(_this.context);
			});
		}
	}]);

	return Canvas;
}();

exports.default = Canvas;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function () {
	function Circle(x, y, radius, color, speed) {
		_classCallCheck(this, Circle);

		this._xValue = x;
		this._yValue = y;
		this._radius = radius;
		this._color = color;
		this._speed = speed;
	}

	_createClass(Circle, [{
		key: "draw",
		value: function draw(context) {
			this.context = context;
			if (this.context === null) {
				return;
			}
			this.context.beginPath();
			this.context.fillStyle = this._color;
			this.context.arc(this._xValue, this._yValue, this._radius, 0, 2 * Math.PI);
			this.context.fill();
		}
	}, {
		key: "radius",
		set: function set(radius) {
			if (Number.isNaN(radius)) {
				throw new Error("Kontrolli ringi raadiust!");
			}
			this._radius = radius;
		}
	}, {
		key: "color",
		set: function set(color) {
			this._color = color;
		}
	}, {
		key: "yValue",
		set: function set(value) {
			this._yValue = value;
		}
	}]);

	return Circle;
}();

exports.default = Circle;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var header = "\n\t<header>\n\t\t<nav>\n\t\t\t<h1>Canvas objects</h1>\n\t\t\t<div id=\"board\"></div>\n\t\t</nav>\n\t</header>\n";

exports.default = header;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function () {
	function Rectangle(x, y, width, height, color) {
		_classCallCheck(this, Rectangle);

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
		this.context = undefined;
	}

	_createClass(Rectangle, [{
		key: "draw",
		value: function draw(context) {
			this.context = context;
			if (this.context === null) {
				return;
			}
			this.context.fillStyle = this.color;
			this.context.fillRect(this.x, this.y, this.width, this.height);
			this.context.stroke();
		}
	}]);

	return Rectangle;
}();

exports.default = Rectangle;

/***/ })
/******/ ]);