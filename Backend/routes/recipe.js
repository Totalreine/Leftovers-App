const express = require("express");
const axios = require("axios");
const router = express.Router();
const Recipe = require("../models/recipes");
const Ingredient = require("../models/ingredients");

const spoonacularApi = require("./helpers/spoonacularAPI");

router.get("/recipes", (req, res) => {
  const { ingredients, diet, mealtype, intolerances } = req.params;

  spoonacularApi
    .newRecipes(ingredients, diet, mealtype, intolerances)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
});

module.exports = router;
