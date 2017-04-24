import db from './../models';

const UserController = {};

UserController.get = (request, response) => {
	const collection = db.users.find();
	response.json({
		message: collection
	});
}

export default UserController;