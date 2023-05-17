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

	return await knex('modules').insert([
		{
			name: "How to use BurpSuite", difficulty: 1,
		},
		{
			name: "How to use WireShark", difficulty: 2,
		}
	]);
}

async function down(knex) {
	return await knex.schema.dropTable('modules');
}

module.exports = {
	up,
	down
}