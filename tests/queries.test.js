const Knex = require('knex');
const query = require('../database/queries');

jest.mock('knex');

describe('/database/queries', () => {
	let queryBuilder;
	let mKnex;

	beforeAll(() => {
		queryBuilder = {
			select: jest.fn().mockReturnThis(),
			join: jest.fn().mockReturnThis(),
			whereRaw: jest.fn().mockReturnThis(),
			count: jest.fn().mockReturnThis(),
			whereBetween: jest.fn().mockReturnThis(),
			groupBy: jest.fn().mockReturnThis(),
			orderBy: jest.fn().mockReturnThis(),
			limit: jest.fn().mockReturnThis(),
			migrate: {
				latest: jest.fn().mockReturnThis(),
			},
		};
		mKnex = jest.fn().mockReturnValue(queryBuilder);
		mKnex.migrate = {
			latest: jest.fn().mockReturnThis(),
		};
		Knex.mockReturnValue(mKnex);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});


	describe('getModulesByCategoryName', () => {
		it('should insert category name into DB query', async () => {
			await query.getModulesByCategoryName('exploit');

			expect(mKnex).toBeCalledWith('modules');
			expect(queryBuilder.select).toBeCalledTimes(1);
			expect(queryBuilder.join).toBeCalledTimes(3);
			expect(queryBuilder.whereRaw).toBeCalledWith("LOWER(categories.name) LIKE ?", "%exploit%");
		});

		it('should throw error on incorrect input', async () => {
			expect(
				await query.getModulesByCategoryName(null)
			).toEqual(
				TypeError("Cannot read property 'toLowerCase' of null")
			);
		})
	});

	describe('getPopularModules', () => {
		it('should receive proper date values (now & now - 1 month)', async () => {
			const now = new Date();
			const oneMonthAgo = new Date();
			oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

			now.setMilliseconds(0);
			oneMonthAgo.setMilliseconds(0);

			await query.getPopularModules();

			expect(mKnex).toBeCalledWith('progress');
			expect(queryBuilder.select).toBeCalledTimes(1);
			expect(queryBuilder.count).toBeCalledTimes(1);
			expect(queryBuilder.join).toBeCalledTimes(1);
			expect(queryBuilder.whereBetween).toBeCalledWith('progress.updated_at', [oneMonthAgo, now]);
		});
	});
});