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
    it('Rental.find returns an empty array if no rentals', async () => {

    })
    it('Rental.find returns rentals', async () => {

    })
    it('Rental.findBy returns specified rental', async () => {

    })
    it('Rental.findById returns rental by ID', async () => {

    })
    it('Rental.update correctly updates specified rental', async () => {

    })
    it('Rental.remove removes rental from db', async () => {
        
    })
})