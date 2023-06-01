// Login Check
const loginFieldsMissing = (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) next();
  else
    res.status(404).json({
      message: "Please Provide username and password !"
    });
};

// register Check
const registerFieldsMissing = (req, res, next) => {
  req.body.isAdmin = Number(req.body.isAdmin)
  const {
    username,
    password,
    firstname,
    lastname,
    email,
    country_name,
    isAdmin
  } = req.body;
  if (
    username &&
    password &&
    firstname &&
    lastname &&
    email &&
    (isAdmin == 0 || isAdmin == 1) &&
    country_name
  )
    next();
  else
    res.status(404).json({
      message: "Please Fill Out all the fields !"
    });
};

module.exports = {
  loginFieldsMissing,
  registerFieldsMissing
};
