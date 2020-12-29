const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

const testRental = { 
    rental_name: 'Test Name', 
    description: 'Test description', 
    rented: 'false', 
    price_per_day: '20'}
const testRentalTwo = { 
    rental_name: 'Test Name', 
    description: 'Test description', 
    rented: 'false', 
    price_per_day: '20'}

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

describe('endpoints', () => {
    describe('[GET] /api/rentals', () => {
        it('responds with 200 OK', async () => {
            const res = await request(server).get('/api/rentals')
            expect(res.status).toBe(200)
        })
        it('responds with an empty array if no hobbits', async () => {
            const res = await request(server).get('/api/rentals')
            expect(res.body).toHaveLength(0)
        })
        it('responds with rentals if rentals', async () => {
            await db('rentals'.insert(testRental))
            let res = await request(server).get('/api/rentals')
            expect(res.body).toHaveLength(1)
            await db('rentals').insert(testRentalTwo)
            res = await request(server).get('/api/rentals')
            expect(res.body).toHaveLength(2)
            expect(res.body[0]).toMatchObject(testRental)
            expect(res.body[1]).toMatchObject(testRentalTwo)
        })
    })
    describe('[GET] /api/rentals/:id', () => {
        it('responds with the rental with the given id', async () => {
            await db('rentals').insert(testRental)
            let res = await request(server).get('/api/rentals/1')
            expect(res.body).toMatchObject(testRental)
        })
        it('responds with a 404 if rental with id does not exist', async () => {
            let res = await request(server).get('/api/rentals/45')
            expect(res.status).toBe(404)
        })
    })
    describe('[PUT] /api/rentals/:id', () => {
        it('responds with the newly updated rental', async () => {

        })
        it('responds with 200 OK', async () => {
            
        })
    })
    describe('[DELETE] /api/rentals/:id', () => {
        it('responds with "The rental has been deleted" when rental is deleted', async () => {
            await db('rentals').insert(testRental)
            let res = await request(server).delete('/api/rentals/1')
            expect(JSON.stringify(res.body)).toMatch('The rental has been deleted')
        })
        it('responds with a 404 error if rental with id does not exist', async () => {
            await db('rentals').insert(testRental)
            await db('rentals').insert(testRentalTwo)
            let res = await request(server).delete('/api/rentals/5')
            expect(res.status).toBe(404)
            
        })
    })
})