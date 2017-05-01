class HomeController {
	get(request, response) {
		response.json({
			message: 'Avaleht'
		});
	}
}

module.exports = new HomeController;