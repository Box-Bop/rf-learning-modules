const createConnection = require("./database");
const express = require('express');
// import { registerRoutes } from './router';

async function initialize() {
	await createConnection();

	const app = express();
	// registerRoutes(app);
	app.use(express.json());
	
	app.listen(3002, () => {
		console.log('Server listening on port 3002');
	});
}

initialize();