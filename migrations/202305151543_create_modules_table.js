async function up(knex) {
	await knex.schema.createTable('modules', table => {
		table.increments('id').primary();
		table.string('name').notNullable();
		table.integer('difficulty').notNullable();
		table.string('type');
		table.string('description');
		table.integer('length');
		table.timestamps(true, true);
	});
}

async function down(knex) {
	return await knex.schema.dropTable('modules');
}

module.exports = {
	up,
	down
}