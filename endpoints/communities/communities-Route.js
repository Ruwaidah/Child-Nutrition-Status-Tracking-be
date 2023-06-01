const express = require("express");
const router = express.Router();
const communities = require("./communities-model.js");
const Users = require("../users/users-model.js");

// Get All communities / Get Country By Id

router.get("/:userid/:countryid", checkAdmin, (req, res) => {
  communities
    .getCountryById(req.params.countryid)
    .then(allcommunities => {
      console.log(allcommunities)
      res.status(200).json(allcommunities);

    })
    .catch(error => res.status(500).json({ message: "error getting data" }));
});


router.post("/", (req, res) => {
  console.log(req.body)
  communities
    .adding(req.body)
    .then(allcommunities => {
      res.status(200).json(allcommunities);
    })
    .catch(error => res.status(500).json({ message: "error getting data" }));
});

function checkAdmin(req, res, next) {
  Users.findUserByid(req.params.userid)
    .then(user => {
      if (user.isAdmin == 0) {
        if (req.params.countryid == user.country_id) {
          communities
            .getCountryById(user.country_id)
            .then(allcommunities => {
              console.log(allcommunities)
              res.status(200).json(allcommunities);
            })
            .catch(error =>
              res.status(500).json({ message: "error getting data" })
            );
        } else {
          res.status(401).json({ message: "Don't have access" });
        }
      } else next();
    })
    .catch(error => res.status(500).json({ message: "error getting data1" }));
}

module.exports = router;
