const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

const testUser = { }
const testUserTwo = { }

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db('users').truncate()
})

afterAll(async () => {
    await db.destroy()
})

describe('endpoints', () => {
    describe('[GET] /api/users', () => {
        it('responds with 200 OK', async () => {

        })
        it('responds with an empty array if no users', async () => {

        })
        it('responds with users if users', async () => {

        })
    })
    describe('[GET] /api/users/:id', () => {
        it('responds with the user with the given id', async () => {
           
        })
        it('responds with a 404 if user with id does not exist', async () => {
            
        })
    })
    describe('[GET] /api/users/:id/rentals', () => {
        it('responds with the rentals with the assocated user id', async () => {

        })
        it('responds with a 404 if user with id does not exist', async () => {
            
        })
    })
    describe('[PUT] /api/users/:id', () => {
        it('responds with the newly updated user', async () => {

        })
        it('responds with 200 OK', async () => {
            
        })
    })
    describe('[POST] /api/:id/rentals', () => {
        it('responds with the newly created rental for specified user', async () => {

        })
        it('responds with a 404 if user with id does not exist', async () => {
            
        })
        it('responds with a 400 if a required rental field is missing', async () => {
            
        })
    })
    describe('[DELETE] /api/users/:id', () => {
        it('responds with "The user has been deleted" when rental is deleted', async () => {

        })
        it('responds with a 404 error if user with id does not exist', async () => {
            
        })
    })
})