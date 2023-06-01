const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").then(function() {
    // Inserts seed entries
    return knex("users").insert([
      {
        id: 1,
        username: "test",
        password: bcrypt.hashSync("test", 12),
        firstname: "test",
        lastname: "test",
        email: "test@test.com",
        country_id: 1,
        isAdmin: true
      },
      {
        id: 2,
        username: "test1",
        password: bcrypt.hashSync("test1", 12),
        firstname: "test1",
        lastname: "test1",
        email: "test1@test1.com",
        country_id: 1,
        isAdmin: false
      },
      {
        id: 3,
        username: "test2",
        password: bcrypt.hashSync("test2", 12),
        firstname: "test2",
        lastname: "test2",
        email: "test2@test2.com",
        country_id: 2,
        isAdmin: true
      }
    ]);
  });
};
