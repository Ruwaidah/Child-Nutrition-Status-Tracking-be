const express = require("express");
const router = express.Router();
const Adding = require("./register-model.js");
const Users = require("../login/login-model.js");
const countries = require("../countries/countries-model.js");


router.post("/", (req, res) => {
  Users.findUser(req.body.username)
    .then(user => {
      if (!user) {
        countries.getCountryByName(req.body.country_name)
          .then(country => {
            console.log(country)
            if (country) {
              const data = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                isAdmin: Number(req.body.isAdmin),
                country_id: country.id
              }
              console.log(data)
              Adding.addUSer(data)
                .then(ids => {
                  res.status(200).json({
                    message: "register Completed"
                  });
                })
                .catch(error =>
                  res.status(500).json({
                    message: "error adding new user"
                  })
                );
            } else {
              res.status(404).json({
                message: "No Conutry with this id"
              });
            }
          });
      } else {
        res.status(400).json({
          message: "username is not availabe"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "error adding new user"
      });
    });
});

module.exports = router;
