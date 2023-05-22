const sampleData = require('./sample-data');
const dbConnection = require('./index');

async function insertSampleData() {
	try {
		const db = await dbConnection();

		await db.transaction(async (trx) => {
			for (const [key, value] of Object.entries(sampleData)) {
				await trx(key)
					.insert(value)
					.onConflict('id')
					.merge();
			}

			console.log('Sample data inserted successfully');
		});
	} catch (error) {
		console.error('Error inserting sample data:', error);
	}
}

async function getModulesByCategoryName(categoryName) {
	try {
		const db = await dbConnection();
		const modules = await db('modules')
			.select('modules.*')
			.join('course_modules', 'modules.id', '=', 'course_modules.module_id')
			.join('category_courses', 'course_modules.course_id', '=', 'category_courses.course_id')
			.join('categories', 'category_courses.category_id', '=', 'categories.id')
			.whereRaw('LOWER(categories.name) LIKE ?', `%${categoryName.toLowerCase()}%`);

		console.log(modules);
		return modules;
	} catch (error) {
		console.error('Error retrieving modules:', error);
	}
}

module.exports = {
	insertSampleData,
	getModulesByCategoryName
}