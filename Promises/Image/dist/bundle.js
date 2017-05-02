/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ImageLoader = __webpack_require__(1);

	var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addNewImage = function addNewImage(src) {
		var imageElement = document.createElement('img');
		imageElement.setAttribute('height', 200);
		imageElement.setAttribute('width', 300);
		imageElement.src = src;
		document.body.appendChild(imageElement);
	};

	Promise.all([(0, _ImageLoader2.default)('https://cdn.pixabay.com/photo/2016/03/05/22/16/aroma-1239226_1280.jpg'), (0, _ImageLoader2.default)('https://cdn.pixabay.com/photo/2016/04/26/16/58/coffe-1354786_1280.jpg'), (0, _ImageLoader2.default)('https://cdn.pixabay.com/photo/2015/05/31/12/11/break-791434_1280.jpg')]).then(function (that) {
		return that[0];
	}).then(function (a) {
		addNewImage(a.src);
	});
	// .then((images) => {
	// 	images.forEach((img) => {
	// 		addNewImage(img.src);
	// 	});
	// });

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function loadImage(url) {
		return new Promise(function (resolve, reject) {
			var image = new Image();

			image.onload = function () {
				resolve(image);
			};

			image.onerror = function () {
				var message = "Could not load image from " + url;
				reject(new Error(message));
			};
			image.src = url;
		});
	};

	exports.default = loadImage;

/***/ }
/******/ ]);