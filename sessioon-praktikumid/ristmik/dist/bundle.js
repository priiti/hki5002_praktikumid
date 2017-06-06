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

var _App = __webpack_require__(0);

Object.keys(_App).forEach(function (key) {
	if (key === "default" || key === "__esModule") return;
	Object.defineProperty(exports, key, {
		enumerable: true,
		get: function get() {
			return _App[key];
		}
	});
});

var _Canvas = __webpack_require__(2);

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Rectangle = __webpack_require__(5);

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _Line = __webpack_require__(4);

var _Line2 = _interopRequireDefault(_Line);

var _Circle = __webpack_require__(3);

var _Circle2 = _interopRequireDefault(_Circle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var board = new _Canvas2.default(600, 600, 'board');

// Crossroads
// Roads
var roads = [[0, board.height / 2 - 50, board.width, board.height / 2 - 200, '#696969', true], [board.width / 2 - 50, 0, 100, board.height, '#696969', true]];

for (var i = 0; i < roads.length; i++) {
	var road = new _Rectangle2.default(roads[i][0], roads[i][1], roads[i][2], roads[i][3], roads[i][4], roads[i][5]);
	board.addDrawableItems(road);
}

//  Road lanes
var roadLanes = [[board.width / 2, 0, board.width / 2, board.height / 2 - 50, 'white'], [board.width / 2, board.height / 2 + 50, board.width / 2, board.height, 'white'], [0, board.height / 2, board.width / 2 - 50, board.height / 2, 'white'], [board.width / 2 + 50, board.height / 2, board.width, board.height / 2, 'white']];

for (var _i = 0; _i < roadLanes.length; _i++) {
	var lane = new _Line2.default(roadLanes[_i][0], roadLanes[_i][1], roadLanes[_i][2], roadLanes[_i][3], roadLanes[_i][4]);
	board.addDrawableItems(lane);
}

// Traffic lights
// Rect
var trafficLights = [[board.width / 2 - 145, board.height / 2 + 60, 85, 50, 'black', true], [board.width / 2 + 60, board.height / 2 + 60, 50, 85, 'black', true], [board.width / 2 - 110, board.height / 2 - 145, 50, 85, 'black', true], [board.width / 2 + 60, board.height / 2 - 110, 85, 50, 'black', true]];

for (var _i2 = 0; _i2 < trafficLights.length; _i2++) {
	var light = new _Rectangle2.default(trafficLights[_i2][0], trafficLights[_i2][1], trafficLights[_i2][2], trafficLights[_i2][3], trafficLights[_i2][4], trafficLights[_i2][5]);
	board.addDrawableItems(light);
}

// Circles


board.render();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _App = __webpack_require__(0);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		var canvas = document.createElement('canvas');
		canvas.width = this.width;
		canvas.height = this.height;
		canvas.style.border = '1px solid black';
		document.querySelector('#' + destination).appendChild(canvas);
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
			// Bg
			this.context.fillStyle = 'lightgreen';
			this.context.fillRect(0, 0, this.width, this.height);
			this.context.fill();
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
	function Circle(x, y, radius, color) {
		_classCallCheck(this, Circle);

		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.context = undefined;
	}

	_createClass(Circle, [{
		key: "draw",
		value: function draw(context) {
			this.context = context;
			if (this.context === null) {
				return;
			}
			this.context.beginPath();
			this.context.fillStyle = this.color;
			this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
			this.context.fill();
		}
	}, {
		key: "color",
		set: function set(color) {
			this.color = color;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Line = function () {
	function Line(x, y, endX, endY, color) {
		_classCallCheck(this, Line);

		this.color = color;
		this.x = x;
		this.y = y;
		this.endX = endX;
		this.endY = endY;
	}

	_createClass(Line, [{
		key: "draw",
		value: function draw(context) {
			this.context = context;
			if (this.context === null) {
				return false;
			}
			this.context.beginPath();
			this.context.strokeStyle = this.color;
			this.context.setLineDash([5, 10]);
			this.context.moveTo(this.x, this.y);
			this.context.lineTo(this.endX, this.endY);
			this.context.lineWidth = 5;
			this.context.stroke();
		}
	}]);

	return Line;
}();

exports.default = Line;

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
			this.context.fill();
		}
	}]);

	return Rectangle;
}();

exports.default = Rectangle;

/***/ })
/******/ ]);