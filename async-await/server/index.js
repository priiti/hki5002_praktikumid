const express = require('express')
const application = express();
const PORT = process.env.port || 3004;

// Had issues with running localhost and getting the Access-Control-Allow.. errors
application.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	response.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// Respond with JSON to get request
application.get('/api/joke', (request, response) => {
	response.json({
		name: "Chuck Norris",
		joke: "There is no 'ctrl' button on Chuck Norris' computer. Chuck Norris is always in control."
	});
});

application.listen(PORT, () => {
	console.log('Express server running on %s', PORT);
});