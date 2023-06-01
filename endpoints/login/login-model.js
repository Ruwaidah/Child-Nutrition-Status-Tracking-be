const db = require("../../database/db-config.js");

module.exports = {
  findUser,
  findById
};

function findUser(username) {
  return db("users")
    .select(
      "users.id",
      "firstname",
      "lastname",
      "username",
      "email",
      "isAdmin",
      "country_id",
      "country_name",
      "password"
    )
    .where({ username })
    .join("countries", "country_id", "countries.id")
    .first();
}

function findById(id) {
  return db("users")
    .where({ id: id })
    .first();
}
