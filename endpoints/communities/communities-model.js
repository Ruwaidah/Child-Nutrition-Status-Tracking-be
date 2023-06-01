const db = require("../../database/db-config.js");

function getCountryById(id) {
  return db("communities")
    .select(
      "communities.id as communityid",
      "community_name",
      "country_name",
      "country_id"
    )
    .where({ country_id: id })
    .join("countries", "country_id", "countries.id");
}

function getCommunity(country_id, community_id) {
  return db("communities")
    .where({
      country_id: country_id,
      id: community_id
    })
    .first();
}


async function adding(data) {
  let id = await db("communities").insert(data, "id")
  return getCountryById(data.country_id)
}

module.exports = {
  getCountryById,
  getCommunity,
  adding
};
