const express = require("express");
const server = express();
const helmet = require("helmet");
const cors = require("cors");
const loginRouter = require("../endpoints/login/login-Route.js");
const registerRouter = require("../endpoints/register/register-Route");
const restrictedMW = require("./restricted-middleWare.js");
const authen = require("./middle-Wares.js");
const countriesRoute = require("../endpoints/countries/countries-Route.js");
const communitiesRoute = require("../endpoints/communities/communities-Route.js");
const childrens = require("../endpoints/childrens/childrens-Route.js");
const userById = require("../endpoints/users/users-router.js");

server.use(helmet());
server.use(express.json());
server.use(cors());

// Routers;
server.use("/api/auth/login", authen.loginFieldsMissing, loginRouter);
server.use("/api/auth/register", authen.registerFieldsMissing, registerRouter);
server.use("/api/auth/countries", restrictedMW, countriesRoute);
server.use("/api/auth/communities", restrictedMW, communitiesRoute);
// server.use("/api/auth/user", restrictedMW, childrens);
server.use("/api/auth/childrens", restrictedMW, childrens);
server.use("/api/auth/users", userById);

module.exports = server;

server.get("/", (req, res) => {
  res.send("<h2>Welcome <h2>");
});
