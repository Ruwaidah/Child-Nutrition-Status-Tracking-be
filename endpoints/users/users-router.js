const express = require("express");
const router = express.Router();
const Users = require("./users-model.js");
const countries = require("../countries/countries-model.js");
// User By Id
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  Users.findUserByid(id)
    .then(user => {
      res.status(200).json({
        user: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          country_id: user.country_id,
          country_name: user.country_name
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "error getting the user"
      });
    });
});

// All Users
router.get("/", (req, res) => {
  Users.allUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        message: "error getting the user"
      });
    });
});



// EDITE USER
router.put("/:id", (req, res) => {
  console.log(req.body)
  countries.getCountryByName(req.body.country_name)
    .then(country => {
      if (country) {
        const data = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          email: req.body.email,
          isAdmin: Number(req.body.isAdmin),
          country_id: country.id
        }
        Users.userUpdate(req.params.id, data)
          .then(users => {
            res.status(200).json(users);
          })
          .catch(error => {
            console.log(error)
            res.status(500).json({
              message: "error getting the user"
            });
          })
      }
    })

});




// DELETE USER
router.delete("/:id", (req, res) => {
  console.log(req.params)
  Users.deleteUser(req.params.id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({
        message: "error getting the user"
      });
    })
})


module.exports = router;
