'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const homeController = {};

// homeController.get = (request, response) => {
// 	response.json({
// 		message: 'See on avaleht!'
// 	});
// };

// export default homeController;

var HomeController = function HomeController() {
	_classCallCheck(this, HomeController);

	this.homeController = {};
	this.homeController.get = function (request, response) {
		response.json({
			message: 'See on avaleht!'
		});
	};
};

// export default class HomeController;


exports.default = HomeController;
//# sourceMappingURL=HomeController.js.map