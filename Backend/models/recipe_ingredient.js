const Sequelize = require("sequelize");
const sequelize = require("../util/dbConnection");

const recipe_ingredient = sequelize.define(
  "recipe_ingredient",
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

module.exports = recipe_ingredient;
