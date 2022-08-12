const db = require("../models");
const Cerina = db.cerina;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  let cerina = {
    username: req.body.usernameData,
    password: req.body.passwordData 
  };
  Cerina.create(cerina)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};