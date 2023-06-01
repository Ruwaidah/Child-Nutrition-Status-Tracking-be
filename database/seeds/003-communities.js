exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("communities").then(function() {
    // Inserts seed entries
    return knex("communities").insert([
      { id: 1, community_name: "texas", country_id: 1 },
      { id: 2, community_name: "new york", country_id: 1 },
      { id: 3, community_name: "paris", country_id: 3 }
    ]);
  });
};
