const db = require('../../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}

async function add(newRental) {
    const [id] = await db('rentals').insert(newRental, id)
    return findById({ id })
}

function find() {
    return db('rentals')
}

function findBy(filter) {
    return db('rentals').where(filter)
}

function findById(id) {
    return db('rentals').where({ id }).first()
}

async function update(id, changes) {
    await db('rentals').where({ id }).update(changes)
    return findById({ id })
}

function remove(id) {
    return db('rentals').where({ id }).del()
}