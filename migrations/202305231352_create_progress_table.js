async function up(knex) {
	await knex.schema.createTable('progress', table => {
		table.increments('id').primary();
		table.integer('course_id').unsigned().notNullable();
		table.integer('module_id').unsigned().notNullable();
		table.integer('user_id').unsigned().notNullable();
		table
			.foreign('course_id')
			.references('courses.id');
		table
			.foreign('module_id')
			.references('modules.id');
		table
			.foreign('user_id')
			.references('users.id');
		table.unique(['course_id', 'module_id', 'user_id']);

		table.decimal('progress', 5, 2).notNullable();
		table.boolean('finished').defaultTo(false);
		table.timestamps(true, true);
	});
}

async function down(knex) {
	return await knex.schema.dropTable('progress');
}

module.exports = {
	up,
	down
}