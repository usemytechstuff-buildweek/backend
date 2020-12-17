
exports.seed = function(knex) {
      return knex('rentals').insert([
        {
          user_id: 1, 
          rental_name: '2020 MacBook Pro', 
          description: '16 inch screen, 11 hour battery life, 64GB memory',
          rented: false,
          price_per_day: 80
        },
        {
          user_id: 1, 
          rental_name: 'iPhone 12 Pro', 
          description: '5G, 6.1 Super Retina Display, ceramic shield',
          rented: false,
          price_per_day: 50
        },
        {
          user_id: 2, 
          rental_name: 'HomePod', 
          description: 'Multiroom audio, Siri, Audio technology',
          rented: true,
          price_per_day: 40
        },
      ]);
};
