const initializeDatabase = require("./database");
const db = require('./database/queries');
const express = require('express');

async function initialize() {
	await initializeDatabase()

	const app = express();
	app.use(express.json());

	app.get('/getModulesByCategoryName/:category', async (req, res) => {
		const modulesSearchResult = await db.getModulesByCategoryName(req.params.category);

		res.send(modulesSearchResult);
	});

	app.get('/getPopularModules', async (req, res) => {
		const popularModules = await db.getPopularModules();

		res.send(popularModules);
	});
	
	app.listen(3002, () => {
		console.log('Server listening on port 3002');
	});

	await db.insertSampleData();
}

initialize();