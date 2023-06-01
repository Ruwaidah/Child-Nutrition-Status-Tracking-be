exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("firstname", 100).notNullable();
    tbl.string("lastname", 100).notNullable();
    tbl.string("username", 100).notNullable().unique();
    tbl.string("password", 100).notNullable();
    tbl.string("email", 100).notNullable().unique();
    tbl.boolean("isAdmin").notNullable();
    tbl
      .integer("country_id")
      // .unsigned()
      .notNullable()
      .references("id")
      .inTable("countries");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
