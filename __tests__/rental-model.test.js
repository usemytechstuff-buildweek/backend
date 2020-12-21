const Rental = require('../api/rentals/rentals-model');
const db = require('../data/dbConfig');

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db('rentals').truncate()
})

afterAll(async () => {
    await db.destroy()
})

describe('Rental model', () => {
    
})