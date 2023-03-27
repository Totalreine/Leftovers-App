const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/recipes", (req, res) => {});

router.post("/recipes", (req, res) => {
  const { ing1, ing2, ing3, ing4 } = req.body;
  const ingredients = `${ing1},${ing2},${ing3}`;
  axios
    .get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=6c1771e1cdb34f8dad886336e8b332cc&ingredients=${ingredients}&ranking=1&number=10`
    )
    .then((data) => {
      const recipes = data.data;
      res.json(recipes);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/recipe/:id", (req, res) => {
  const recipeID = req.params.id;

  axios
    .get(
      `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=6c1771e1cdb34f8dad886336e8b332cc&includeNutrition=true`
    )
    .then((data) => {
      const recipe = data.data;
      res.json(recipe);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/recipe/:id", (req, res) => {});

module.exports = router;
