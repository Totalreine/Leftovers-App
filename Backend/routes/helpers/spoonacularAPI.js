const formatIngredients = require("./formatIngredients");
const formatSteps = require("./formatSteps");
const axios = require('axios');

const newRecipes = (ingredients, diet, mealtype, intolerances) => {
  const apiKey = process.env.API_KEY;

  let params = {
    addRecipeInformation: true, 
    fillIngredients: true,
    instructionsRequired: true,
    sort: "max-used-ingredients",
    number: 3,
    diet: diet,
    type: mealtype,
    intolerances: intolerances
  }

  if (ingredients && ingredients.length > 0) {
    params["includeIngredients"] = ingredients;
  }

  // Send a GET request
  return axios({
    method: 'get',
    url: `https://api.spoonacular.com/recipes/complexSearch`,
    headers: {'x-api-key': apiKey},
    params,
    transformResponse: [
      (data) => {
        return JSON.parse(data);
      }
    ]
  })
    .then((res) => {
      const results = res.data["results"];

      let transformedRecipes = [];
      
      for (const recipe of results) {
        const missedIngredients = formatIngredients.formatIngredients(recipe["missedIngredients"]);
        const usedIngredients = formatIngredients.formatIngredients(recipe["usedIngredients"]);
        const unusedIngredients = formatIngredients.formatIngredients(recipe["unusedIngredients"]);

        let instructions = [];

        if (recipe["analyzedInstructions"] && recipe["analyzedInstructions"].lenght > 0) {
        const analysedInstructions = recipe["analyzedInstructions"][0]["steps"]
        instructions = formatSteps.formatSteps(analysedInstructions)
        }
        
        const newRecipe = {
          apiId: recipe["id"],
          title: recipe["title"],
          readyInMinutes: recipe["readyInMinutes"],
          image: recipe["image"],
          vegetarian: recipe["vegetarian"],
          vegan: recipe["vegan"],
          glutenFree: recipe["glutenFree"],
          dairyFree: recipe["dairyFree"],
          missedIngredients,
          usedIngredients,
          unusedIngredients,
          instructions
        }

        transformedRecipes.push(newRecipe);
      }
      //returns array of recipies
      return transformedRecipes;
    });
};


exports.newRecipes = newRecipes;