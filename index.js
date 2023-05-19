const initializeDatabase = require("./database");
const db = require('./database/queries');
const express = require('express');

async function initialize() {
	await initializeDatabase()

	const app = express();
	app.use(express.json());
	
	app.listen(3002, () => {
		console.log('Server listening on port 3002');
	});

	await db.insertSampleData();

	await db.getModulesByCategoryName('Inspecting network traffic.')
}

initialize();