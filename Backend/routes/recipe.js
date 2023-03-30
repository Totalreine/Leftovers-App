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
      res.status(500);
    });
});

router.post("/savedrecipes", async (req, res) => {
  try {
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
      instructions,
    } = req.body;

    const instructionsString = formatInstructions.formatInstructions(instructions);

    const recipe = await Recipe.create({
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

    const ingredients = await Ingredient.bulkCreate(missedIngredients.concat(usedIngredients, unusedIngredients))

    await recipe.addIngredients(ingredients);
    res.json("done");

  } catch (error) {
    console.log(error);
    res.send(error);
  }
})

router.get("/savedrecipes", (req, res) => {
  Recipe.findAll({include: Ingredient})
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.send(e);
    });
});

router.delete("/savedrecipes/:id", (req, res) => {
  const { id } = req.params;

  console.log(req.params);
  console.log(id);

  Recipe.destroy({
    where: {
      id: id,
    },
  })
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.send(e);
    });
});

module.exports = router;
