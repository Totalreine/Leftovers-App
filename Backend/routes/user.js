const express = require("express");
const Recipe = require("../models/recipes");
const User = require("../models/users");
const Ingredient = require("../models/ingredients");
const router = express.Router();

router.get("/recipes", async (req, res) => {
  const userID = req.session.userID;
  try {
    const user = await User.findByPk(userID);
    const recipes = await user.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500);
  }
});

router.get("/recipe/:id", async (req, res) => {
  const recipeId = req.params.id;
  try {
    const recipe = await Recipe.findOne({
      where: {
        id: recipeId,
      },
    });
    res.json(recipe);
  } catch (err) {
    res.status(500);
  }
});

router.post("/recipe", async (req, res) => {
  const userID = req.session.userID;
  const {
    name,
    vegan,
    glutenfree,
    dairyfree,
    veryhealthy,
    vegetarian,
    readyinminutes,
    servings,
    sourceurl,
    image,
    summary,
    weightperserving,
    instructions,
    cuisine,
    recipeIng,
    recipeNut,
  } = req.body;
  try {
    const user = await User.findByPk(userID);

    const ingredients = await Ingredient.bulkCreate(recipeIng);

    const recipe = await Recipe.create({
      name,
      vegan,
      glutenfree,
      dairyfree,
      veryhealthy,
      vegetarian,
      readyinminutes,
      servings,
      sourceurl,
      image,
      summary,
      weightperserving,
      instructions,
      cuisine,
    });

    // await recipe.addNutrient(nutrients);
    await recipe.addIngredient(ingredients);
    await user.addRecipe(recipe);
    res.json("done");
  } catch (err) {
    console.log(err);
  }
});

router.post("/edit-recipe", async (req, res) => {
  const {
    prodId,
    name,
    vegan,
    glutenfree,
    dairyfree,
    veryhealthy,
    vegetarian,
    readyinminutes,
    servings,
    sourceurl,
    image,
    summary,
    weightperserving,
    instructions,
    cuisine,
  } = req.body;
  try {
    const recipe = await Recipe.update(
      {
        name,
        vegan,
        glutenfree,
        dairyfree,
        veryhealthy,
        vegetarian,
        readyinminutes,
        servings,
        sourceurl,
        image,
        summary,
        weightperserving,
        instructions,
        cuisine,
      },
      {
        where: {
          id: prodId,
        },
      }
    );
    res.json("done");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/recipe/:id", async (req, res) => {
  const recipeId = req.params.id;
  try {
    const recipe = await Recipe.destroy({
      where: {
        id: recipeId,
      },
    });

    res.json("deleted");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
