const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("leftoversapp", "juan", "tinto1983", {
  dialect: "postgres",
  host: "localhost",
});

module.exports = sequelize;
