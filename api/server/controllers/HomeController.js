const homeController = {};

homeController.get = (request, response) => {
	response.json({
		message: 'See on avaleht!'
	});
};

export default homeController;