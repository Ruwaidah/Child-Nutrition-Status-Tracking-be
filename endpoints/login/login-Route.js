const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("./login-model.js");

// LogIn EndPoint
router.post("/", (req, res) => {
  const { username, password } = req.body;
  Users.findUser(username)
    .then(user => {
      console.log(user)
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          console.log("ewfwefewfw")
          const token = generateToken(user);
          res.status(200).json({
            token,
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
        } else {
          res.status(400).json({
            message: "username or password is incorrect!"
          });
        }
      } else {
        res.status(400).json({
          message: "username or password is incorrect!"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "error getting the user"
      });
    });
});

function generateToken(user) {
  const payload = {
    username: user.username
  };

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
