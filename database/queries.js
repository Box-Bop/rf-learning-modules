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
		console.error('Error retrieving modules by category name:', error);
	}
}

async function getPopularModules() {
	try {
		const now = new Date();
		const oneMonthAgo = new Date();
		oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

		const db = await dbConnection();

		const topModules = await db('progress')
			.select('modules.id', 'modules.name')
			.count('progress.module_id AS progress_count')
			.join('modules', 'progress.module_id', '=', 'modules.id')
			.whereBetween('progress.updated_at', [oneMonthAgo, now])
			.groupBy('modules.id', 'modules.name')
			.orderBy('progress_count', 'desc')
			.limit(10);

		return topModules;
	} catch (error) {
		console.error('Error retrieving popular modules:', error);
	}
}

module.exports = {
	insertSampleData,
	getModulesByCategoryName,
	getPopularModules
}