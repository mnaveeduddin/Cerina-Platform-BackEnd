module.exports = app => {
  const cerina = require("../controllers/cerina.controller.js");
  var router = require("express").Router();
  // Create a new Tutorial
  router.post("/login", cerina.create);
  return router;
};