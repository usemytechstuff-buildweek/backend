const User = require('../api/users/users-model');
const db = require('../data/dbConfig');

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

describe('User model', () => {
    it('User.addRental adds new rental to correct user in db', async () => {

    })
    it('User.find returns an empty array if no users', async () => {
        
    })
    it('User.find returns users', async () => {

    })
    it('User.findBy returns specified user from db', async () => {

    })
    it('User.findById returns correct user by id from db', async () => {

    })
    it('User.findRentalByUserId returns correct rental associated with user id', async () => {

    })
    it('User.update updates user in db', async () => {

    })
    it('User.remove removes user from db', async () => {
        
    })
})