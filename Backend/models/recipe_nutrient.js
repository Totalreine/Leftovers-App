const Sequelize = require("sequelize");
const sequelize = require("../util/dbConnection");

const recipe_nutrient = sequelize.define(
  "recipe_nutrient",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = recipe_nutrient;
