module.exports = app => {
  const cerina = require("../controllers/cerina.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/createAccount", cerina.create);
  router.get("/login", cerina.findOne);
  router.get("/usersInfo", cerina.findAll);
  router.delete("/deleteUser", cerina.delete);
  return router;
};