const db = require("../../database/db-config.js");

module.exports = {
  findUserByid,
  allUsers,
  userUpdate,
  deleteUser
};

function allUsers() {
  return db("users")
    .select(
      "users.id",
      "firstname",
      "lastname",
      "username",
      "email",
      "isAdmin",
      "country_id",
      "country_name"
    )
    .join("countries", "country_id", "countries.id");
}

async function userUpdate(id, data) {
  console.log(data)
  let user = db("users")
    .update(data)
    .where({ "users.id": id })
  let user_update = await user
  return findUserByid(id)
}

function findUserByid(id) {
  return db("users")
    .select(
      "users.id",
      "firstname",
      "lastname",
      "username",
      "email",
      "isAdmin",
      "country_id",
      "country_name"
    )
    .where({ "users.id": id })
    .join("countries", "country_id", "countries.id")
    .first();
}



function deleteUser(id) {
  return db("users")
    .where({ "users.id": id }).del()
}
