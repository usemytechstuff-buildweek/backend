const db = require('../../data/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id')
    return findById(id);
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

async function update(id, changes) {
    await db('users').where({ id }).update(changes)
    return findById({ id })
}

function remove(id) {
    return db('users').where({ id }).del()
}