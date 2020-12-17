
exports.seed = function(knex) {
      return knex('users').insert([
        {username: 'johndoe', password: '1234', firstName: 'John', lastName: 'Doe'},
        {username: 'janedoe', password: '1234', firstName: 'Jane', lastName: 'Doe'}
      ]);
};
