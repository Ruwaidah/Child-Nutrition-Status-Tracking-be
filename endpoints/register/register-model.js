const db = require("../../database/db-config.js");
const bcrypt = require("bcryptjs");

module.exports = {
  addUSer,
  findCountry
};

function addUSer(user) {
  user.password = bcrypt.hashSync(user.password);
  return db("users").insert(user, "id");
}

function findCountry(id) {
  return db("countries")
    .where({ id })
    .first();
}

// function findUser(user) {
//   return db("users")
//     .where({ username: user.username, email: user.email })
//     .first();
// }
