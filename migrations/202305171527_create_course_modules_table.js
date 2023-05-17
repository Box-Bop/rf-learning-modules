async function up(knex) {
	await knex.schema.createTable('course_modules', table => {
		table.increments('id').primary();
		table.integer('course_id').unsigned().notNullable();
		table.integer('module_id').unsigned().notNullable();
		table
			.foreign('course_id')
			.references('courses.id')
		table
			.foreign('module_id')
			.references('modules.id')
		table.unique(['course_id', 'module_id'])
		table.timestamps(true, true);
	});
}

async function down(knex) {
	return await knex.schema.dropTable('course_modules');
}

module.exports = {
	up,
	down
}