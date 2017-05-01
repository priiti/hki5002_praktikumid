class PostsController {
	getAll(request, response) {
		response.json({
			post: {
				id: '123456',
				title: 'Post title',
				content: 'Post content'
			}
		});
	}
}

module.exports = new PostsController;