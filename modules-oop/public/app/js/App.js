(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Canvas = require('./Modules/Canvas');

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Rectangle = require('./Modules/Rectangle');

var _Rectangle2 = _interopRequireDefault(_Rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.onload = function () {
	document.querySelector('#btn_add_elements').addEventListener('click', function () {
		var amount = document.querySelector('#rect_input').value;
		myApp.createElements(amount);
		myApp.startApplication();
	});
};

var App = function () {
	function App() {
		_classCallCheck(this, App);

		this.canvas = new _Canvas2.default(600, 600, 'board');
		this._amount = 0;
	}

	_createClass(App, [{
		key: 'createElements',
		value: function createElements(value) {
			var size = {
				dimensions: 20
			};
			var a = value;
			for (var i = 0; i < a; i++) {
				var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
				var x = Math.floor(Math.random() * 600 + 1);
				var y = Math.floor(Math.random() * 600 + 1);

				var rect = new _Rectangle2.default(x, y, size.dimensions, size.dimensions, color);
				this.canvas.addDrawableItems(rect);
			}
		}
	}, {
		key: 'startApplication',
		value: function startApplication() {
			this.canvas.render();
		}
	}]);

	return App;
}();

var myApp = new App();

},{"./Modules/Canvas":2,"./Modules/Rectangle":3}],2:[function(require,module,exports){
'use strict';

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
			this.items.forEach(function (item) {
				item.draw(_this.context);
			});
		}
	}]);

	return Canvas;
}();

exports.default = Canvas;

},{}],3:[function(require,module,exports){
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
				return false;
			}
			this.context.fillStyle = this.color;
			this.context.fillRect(this.x, this.y, this.width, this.height);
			this.context.stroke();
		}
	}]);

	return Rectangle;
}();

exports.default = Rectangle;

},{}]},{},[1]);
