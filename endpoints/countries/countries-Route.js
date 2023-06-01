const express = require("express");
const router = express.Router();
const countries = require("./countries-model.js");

// Get All Countries
router.get("/:userid", countries.isAdmin, (req, res) => {
  countries
    .getCountries()
    .then(countries => res.status(200).json(countries))
    .catch(error => res.status(500).json({ message: "error getting data" }));
});

router.post("/:userid", countries.isAdmin, (req, res) => {
  countries
    .addNewCountry(req.body)
    .then(countries => res.status(200).json(countries))
    .catch(error => res.status(500).json({ message: "error adding data" }));
});


router.delete("/:userid/:countryid", countries.isAdmin, (req, res) => {
  countries
    .deleteCountry(req.params.countryid)
    .then(countries => res.status(200).json(countries))
    .catch(error => res.status(500).json({ message: "error deleting data" }));
});


module.exports = router;
