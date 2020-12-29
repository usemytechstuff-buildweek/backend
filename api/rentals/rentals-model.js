const db = require('../../data/dbConfig');

module.exports = {
    // add,
    find,
    findBy,
    findById,
    update,
    remove
}

// function add(rental) {
//     return db('rentals')
//       .insert(rental)
//       .then(ids => {
//         return findById(ids[0]);
//       });
// }

function find() {
    return db('rentals')
}

function findBy(filter) {
    return db('rentals').where(filter)
}

function findById(id) {
    return db('rentals').where({ id }).first()
}

function update(id, changes) {
    return db('rentals').where({ id }).update(changes)
}

function remove(id) {
    return db('rentals').where({ id }).del()
}