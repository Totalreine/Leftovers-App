const Sequelize = require("sequelize");
const sequelize = require("../util/dbConnection");

const Nutrient = sequelize.define(
  "nutrient",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    unit: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    percentofdailyneeds: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Nutrient;
