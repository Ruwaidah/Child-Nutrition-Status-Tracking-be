exports.up = function (knex) {
  return knex.schema.createTable("childs", (tbl) => {
    tbl.increments();
    tbl.string("childName", 100).notNullable();
    tbl.string("gender", 100).notNullable();
    tbl.date("birth", 100).notNullable();
    tbl.date("screenDate", 100).notNullable();
    tbl.decimal("weight", 100).notNullable();
    tbl.decimal("height", 100).notNullable();
    tbl.string("parentName", 100).notNullable();
    tbl.integer("phoneNo", 100);
    tbl.string("country", 100);
    tbl.string("state", 100);
    tbl.string("city", 100);
    tbl.string("street", 100);
    tbl
      .integer("country_id")
      // .unsigned()
      .notNullable()
      .references("id")
      .inTable("countries")
      .onDelete("RESTRICT");
    tbl
      .integer("community_id")
      // .unsigned()
      .notNullable()
      .references("id")
      .inTable("communities");
  });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("childs_tracking")
    .dropTableIfExists("childs");
};
