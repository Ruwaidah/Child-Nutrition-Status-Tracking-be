const db = require("../../database/db-config.js");
module.exports = {
  childsOfcomunity, childById, addingChild, childTrack
  , addingChildTrack
};

function childsOfcomunity(id) {
  return db("childs")
    .select(
      "childs.id",
      "childName",
      "gender",
      "birth",
      "screenDate",
      "weight",
      "height",
      "parentName",
      "phoneNo",
      "country",
      "state",
      "city",
      "street",
      "childs.country_id",
      "community_id",
      "country_name",
      "community_name"
    )
    .where({ community_id: id })
    .join("countries", "childs.country_id", "countries.id")
    .join("communities", "community_id", "communities.id")

}


function childById(id) {
  return db("childs")
    .select(
      "childs.id",
      "childName",
      "gender",
      "birth",
      "screenDate",
      "weight",
      "height",
      "parentName",
      "phoneNo",
      "country",
      "state",
      "city",
      "street",
      "childs.country_id",
      "community_id",
      "country_name",
      "community_name"
    )
    .where({ "childs.id": id })
    .join("countries", "childs.country_id", "countries.id")
    .join("communities", "community_id", "communities.id")
    .first()
}


// childs_tracking
function childTrack(id) {
  return db("childs_tracking").where({ child_id: id }).orderBy("date", "DESC")
  // "ASC" or ""DESC""
}



// adding childs_tracking
async function addingChildTrack(id, data) {
  let newrecord = await db("childs_tracking").insert(data, "id").where({ id })
  return childById(id)

}


async function addingChild(data, id) {
  let comid = await db("childs").insert(data, "id")
  return childsOfcomunity(comid)
}