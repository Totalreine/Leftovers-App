const Sequelize = require("sequelize");
const sequelize = require("../util/dbConnection");

const Ingredient = sequelize.define(
  "ingredient",
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
  },
  {
    timestamps: false,
  }
);

module.exports = Ingredient;
