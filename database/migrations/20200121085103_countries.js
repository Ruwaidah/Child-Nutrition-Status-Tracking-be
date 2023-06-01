exports.up = function(knex) {
  return knex.schema.createTable("countries", tbl => {
    tbl.increments();
    tbl
      .string("country_name", 100)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("childs_tracking")
    .dropTableIfExists("childs")
    .dropTableIfExists("users")
    .dropTableIfExists("communities")
    .dropTableIfExists("countries");
};
