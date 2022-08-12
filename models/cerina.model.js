module.exports = (sequelize, Sequelize) => {
  const Cerina = sequelize.define("cerina", {
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });
  return Cerina;
};