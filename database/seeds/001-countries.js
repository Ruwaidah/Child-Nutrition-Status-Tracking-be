exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("countries").then(function() {
    // Inserts seed entries
    return knex("countries").insert([
      { id: 1, country_name: "usa" },
      { id: 2, country_name: "canada" },
      { id: 3, country_name: "france" }
    ]);
  });
};
