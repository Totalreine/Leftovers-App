const Sequelize = require("sequelize");
const sequelize = require("../util/dbConnection");

const Recipe = sequelize.define(
  "recipe",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    vegan: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    glutenfree: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    dairyfree: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    vegetarian: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    readyinminutes: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    missedIngredients: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    usedIngredients: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    unusedIngredients: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    instructions: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Recipe;
