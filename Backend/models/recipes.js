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
    apiId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    vegan: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    glutenFree: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    dairyFree: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    vegetarian: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    readyInMinutes: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image: {
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
