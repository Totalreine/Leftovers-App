const express = require("express");
const axios = require("axios");
const router = express.Router();

const spoonacularApi = require("./helpers/spoonacularAPI");

router.get("/recipes", (req, res) => {
  const { ingredients, diet, mealtype, intolerances } = req.query;

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
