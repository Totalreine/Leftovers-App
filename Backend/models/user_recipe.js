const Sequelize = require("sequelize");
const sequelize = require("../util/dbConnection");

const user_recipe = sequelize.define(
  "user_recipe",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    accepted: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = user_recipe;
