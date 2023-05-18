async function up(knex) {
	await knex.schema.createTable('modules', table => {
		table.increments('id').primary();
		table.string('name').notNullable();
		table.integer('difficulty').notNullable().defaultTo(1);
		table.string('type').defaultTo(1);
		table.string('description').defaultTo('In this module, you will ...');
		table.integer('length').defaultTo(15);
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