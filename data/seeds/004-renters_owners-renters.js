
exports.seed = function(knex) {
      return knex('table_name').insert([
        {renter_id: 1, owner_id: 2, rental_id: 1},
        {renter_id: 2, owner_id: 1, rental_id: 3}
      ]);
};
