const db = require('../../data/dbConfig');

module.exports = {
    add,
    find,
    findById
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

function findById() {
    return db('users')
    .select('id', 'username', 'firstName', 'lastName')
    .where({ id })
    .first()
}