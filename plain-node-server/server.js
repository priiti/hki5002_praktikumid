const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

http.createServer((request, response) => {
	// response.writeHead(200, {'Content-Type': 'text/plain'});
	// response.end('Tere');
	
	const uri = url.parse(request.url).pathname;
	const filename = path.join(process.cwd(), uri);
	
	console.log(filename);

	fs.readFile(filename, 'binary', (error, file) => {
		if (error) {
			response.writeHead(500, {'Content-Type': 'text/plain'});
			response.write(error + '\n');
			response.end();
			return;
		}
		console.log(`File is ${file}`);
		response.writeHead(200);
		response.write(file, 'binary');
		response.end()
	});

}).listen(8888);