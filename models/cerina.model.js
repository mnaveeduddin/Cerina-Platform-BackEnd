module.exports = (sequelize, Sequelize) => {
  const Cerina = sequelize.define("cerina", {
    username: {
      allowNull:false,
      type: Sequelize.STRING
    },
    password: {
      allowNull:false,
      type: Sequelize.STRING
    }
  });
  return Cerina;
};