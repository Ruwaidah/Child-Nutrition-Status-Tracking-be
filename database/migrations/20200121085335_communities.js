exports.up = function(knex) {
  return knex.schema.createTable("communities", tbl => {
    tbl.increments();
    tbl.string("community_name", 100).notNullable();
    tbl
      .integer("country_id")
      // .unsigned()
      .notNullable()
      .references("id")
      .inTable("countries");
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("childs_tracking")
    .dropTableIfExists("childs")
    .dropTableIfExists("communities");
};
