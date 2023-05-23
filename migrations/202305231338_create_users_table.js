async function up(knex) {
	await knex.schema.createTable('users', table => {
		table.increments('id').primary();
		table.string('name').notNullable();
		table.string('email').notNullable();
		table.integer('role').defaultTo(1);
		table.json('settings');
		table.timestamps(true, true);
	});
}

async function down(knex) {
	return await knex.schema.dropTable('users');
}

module.exports = {
	up,
	down
}