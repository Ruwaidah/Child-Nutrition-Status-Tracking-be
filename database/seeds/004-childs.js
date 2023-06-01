exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("childs").then(function () {
    // Inserts seed entries
    return knex("childs").insert([
      {
        id: 1,
        childName: "Sam",
        gender: "male",
        birth: "2015-12-02",
        weight: "2",
        height: "10",
        parentName: "michael",
        screenDate: "2015-12-02",
        phoneNo: null,
        country: null,
        state: null,
        city: null,
        street: null,
        country_id: 1,
        community_id: 2,
      },
      {
        id: 2,
        childName: "sarah",
        gender: "female",
        birth: "2016-08-14",
        weight: "3",
        height: "20",
        parentName: "Ruwaidah",
        screenDate: "2015-12-02",
        phoneNo: null,
        country: null,
        state: null,
        city: null,
        street: null,
        country_id: 3,
        community_id: 3,
      },
      {
        id: 3,
        childName: "rowValue1",
        gender: "male",
        birth: "2011-06-25",
        weight: "3.5",
        height: "18",
        parentName: "Ruwaidah",
        screenDate: "2015-12-02",
        phoneNo: null,
        country: null,
        state: null,
        city: null,
        street: null,
        country_id: 1,
        community_id: 1,
      },
    ]);
  });
};
