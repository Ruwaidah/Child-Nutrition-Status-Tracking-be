exports.up = function (knex) {
  return knex.schema.createTable("childs_tracking", (tbl) => {
    tbl.increments();

    tbl.decimal("weight", 100).notNullable();
    tbl.decimal("height", 100).notNullable();
    tbl.date("date", 100).notNullable();
    tbl.string("description", 255);
    tbl
      .integer("child_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("childs");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("childs_tracking");
};
