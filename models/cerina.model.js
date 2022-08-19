module.exports = (sequelize, Sequelize) => {
  const Cerina = sequelize.define("cerina", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull:false,
      primaryKey: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull:false,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull:false,
      primaryKey: true
    }
  });
  return Cerina;
};