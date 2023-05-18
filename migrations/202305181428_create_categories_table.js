async function up(knex) {
	await knex.schema.createTable('categories', table => {
		table.increments('id').primary();
		table.string('name').notNullable();
		table.string('description');
		table.timestamps(true, true);
	});
}

async function down(knex) {
	return await knex.schema.dropTable('categories');
}

module.exports = {
	up,
	down
}