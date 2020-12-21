
exports.up = function(knex) {
  return knex.schema
  .createTable('users', table => {
      table.increments()
      table.string('username', 128).notNullable().unique()
      table.string('password', 128).notNullable()
      table.string('firstName', 128).notNullable()
      table.string('lastName', 128).notNullable()
  })
  .createTable('rentals', table => {
    table.increments()
    table.integer('user_id')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    table.string('rental_name', 128).notNullable()
    table.string('description')
    table.boolean('rented').notNullable().defaultTo(false)
    table.integer('price_per_day').notNullable()
  })
  .createTable('renters_owners_rentals', table => {
    table.increments()
    table.integer('renter_id')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    table.integer('owner_id')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    table.integer('rental_id')
          .notNullable()
          .unsigned()
          .references('id')
          .inTable('rentals')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('renters_owners_rentals')
    .dropTableIfExists('rentals')
    .dropTableIfExists('users')
};
