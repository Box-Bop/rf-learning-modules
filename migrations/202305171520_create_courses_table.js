async function up(knex) {
	await knex.schema.createTable('courses', table => {
		table.increments('id').primary();
		table.string('title').notNullable();
		table.integer('team');
		table.string('description');
		table.timestamps(true, true);
	});
}

async function down(knex) {
	return await knex.schema.dropTable('courses');
}

module.exports = {
	up,
	down
}