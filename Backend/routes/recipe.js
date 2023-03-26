const express = require("express");

const router = express.Router();
const Recipe = require("../models/recipes");
const Ingredient = require("../models/ingredients");


router.get("/recipes", (req, res) => {
  const {ingredients, diet, mealtype, intolerances} = req.params

  newRecipes(ingredients, diet, mealtype, intolerances)
  .then(data => {
    res.json(data);
  })
  .catch(e => {
    console.error(e);
    res.send(e);
  });
});

module.exports = router;
