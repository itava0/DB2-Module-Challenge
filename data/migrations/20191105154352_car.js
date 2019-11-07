
exports.up = function(knex) {
  return knex.schema.createTable('car', function(table) {
    table.increments();

    table.string('VIN', 255).notNullable();
    table.string('make', 64).notNullable();
    table.string('model', 64).notNullable();
    table.integer('mileage').notNullable();
    table.string('transmission type', 128);
    table.string('status of the title', 128);

    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car');
};
