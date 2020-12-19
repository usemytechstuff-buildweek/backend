const db = require('../../data/dbConfig');

module.exports = {
    add,
    addRental,
    find,
    findBy,
    findById,
    findRentalByUserId,
    update,
    remove
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id')
    return findById(id);
}

async function addRental(newRental) {
    const [id] = await db('rentals').insert(newRental, id)
    return findById({ id })
}

function find() {
    return db('users')
    .select('id', 'username', 'firstName', 'lastName')
    .orderBy('id')
}

function findBy(filter) {
    return db('users')
    .where(filter)
}

function findById(id) {
    return db('users')
    .select('id', 'username', 'firstName', 'lastName')
    .where({ id })
    .first()
}

function findRentalByUserId(id) {
    return db('users')
    .join('rentals', 'users.id', 'rentals.user_id')
    .select(
        'users.username', 
        'rentals.rental_name', 
        'rentals.description', 
        'rentals.rented', 
        'rentals.price_per_day'
    )
    .where('users.id', id)
}

function update(id, changes) {
    return db('users').where({ id }).update(changes)
}

function remove(id) {
    return db('users').where({ id }).del()
}