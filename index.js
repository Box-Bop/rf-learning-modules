const database = require("./database");
const express = require('express');
// import { registerRoutes } from './router';

async function initialize() {
	const db = await database.createConnection();

	database.insertSampleData(db);

	const app = express();
	// registerRoutes(app);
	app.use(express.json());
	
	app.listen(3002, () => {
		console.log('Server listening on port 3002');
	});
}

initialize();