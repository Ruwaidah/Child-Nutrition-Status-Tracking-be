const db = require("../../database/db-config.js");

const isAdmin = (req, res, next) => {
  db("users")
    .select("isAdmin")
    .where({ id: req.params.userid })
    .first()
    .then((isadmin) => {
      if (isadmin && isadmin.isAdmin == 1) next();
      else {
        res.status(404).json({ meassge: "Dont have access" });
      }
    })
    .catch((error) => res.status(500).json({ message: "error getting data" }));
};

// Country By Name
function getCountryByName(name) {
  return db("countries").where({ country_name: name }).first();
}

async function addNewCountry(data) {
  let id1 = await db("countries").insert(data, "id");
  return getCountries();
}

function getCountries() {
  return db("countries");
}

async function deleteCountry(id) {
  let ids = await db("countries").where({ id }).del();
  return getCountries();
}

module.exports = {
  isAdmin,
  getCountries,
  getCountryByName,
  addNewCountry,
  deleteCountry,
};
