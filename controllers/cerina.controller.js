const db = require("../models");
const Cerina = db.cerina;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  let cerina = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
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
exports.findOne = (req,res) => {
  const username = req.query.username;
  return Cerina.findOne({
    where:{
      username : username
    }
  }).then(data => {
    if (data){
      res.send(data);
    }else{
      res.status(404).send({
        message: "User Does Not Exist"
      });
    };
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving data"
    });
  });
};
exports.findAll = (req, res) => {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  // Cerina.findAll({ where: condition })
    Cerina.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving table."
      });
    });
};
exports.delete = (req, res) => {
  const id = req.query.id;
  Cerina.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};