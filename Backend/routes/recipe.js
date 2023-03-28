const express = require("express");
const Recipe = require("../models/recipes");
const Ingredient = require("../models/ingredients");
const router = express.Router();

const formatInstructions = require("./helpers/formatInstructions");

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

router.post("/save", (req, res) => {
  const {
    apiId,
    title,
    readyInMinutes,
    image,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    missedIngredients,
    usedIngredients,
    unusedIngredients,
    instructions
  } = req.body;

  console.log(instructions)
  console.log(req.body)

  const instructionsString = formatInstructions.formatInstructions(instructions);

  Recipe.create({
    apiId,
    title,
    readyInMinutes,
    image,
    vegetarian,
    vegan,
    glutenFree,
    dairyFree,
    instructions: instructionsString
  })
  .then(() => {
    Ingredient.bulkCreate(missedIngredients.concat(usedIngredients, unusedIngredients))
    res.json("done")
  })
  .catch((e) => {
    console.error(e);
    res.send(e);
  });

})

module.exports = router;
