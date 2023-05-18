async function up(knex) {
	await knex.schema.createTable('category_courses', table => {
		table.increments('id').primary();
		table.integer('course_id').unsigned().notNullable();
		table.integer('category_id').unsigned().notNullable();
		table
			.foreign('course_id')
			.references('courses.id')
		table
			.foreign('category_id')
			.references('categories.id')
		table.unique(['course_id', 'category_id'])
		table.timestamps(true, true);
	});
}

async function down(knex) {
	return await knex.schema.dropTable('category_courses');
}

module.exports = {
	up,
	down
}