import application from './Application';

const PORT = process.env.port || 3001;
	application.listen(PORT, () => {
		console.log(`Server running on: http://localhost:${PORT}...`);
	});