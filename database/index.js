const { knex } = require('knex');
const path = require('path');

const sleep = ms => new Promise(r => setTimeout(r, ms)); // TODO: take this to a utils file

let connection = null;

async function dbConnection() {
	if (!connection) {
		// Even with the `depends_on` in the docker-compose file, the app is ready before DB can accept connections
		await sleep(2000); // TODO: could instead retry until successful, with every new retry having an extended wait period

		connection = await knex({
			client: 'pg',
			connection: {
				host: 'modules-db',
				port: 5432,
				user: 'user',
				password: 'totally-secure-password',
				database: 'learning-modules',
			},
		});

		await connection.raw('SELECT 1');

		await connection.migrate.latest({
			tableName: 'knex_migrations',
			directory: path.join(__dirname, '../migrations'),
		});

		console.log('Database connection initialized');
	}

	return connection;
}

module.exports = dbConnection;
