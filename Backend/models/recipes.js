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
    name: {
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
    veryhealthy: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    vegetarian: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    readyinminutes: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    servings: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    sourceurl: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    image: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    summary: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    weightperserving: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    instructions: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    cuisine: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Recipe;
