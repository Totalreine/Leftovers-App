import formatIngredients from "./formatIngredients"
import formatSteps from "./formatSteps"
const axios = require('axios');

const newRecipes = (ingredients, diet, mealtype, intolerances) => {
  const apiKey = process.env.API_KEY;

  // Send a GET request
  return axios({
    method: 'get',
    url: `https://api.spoonacular.com/recipes/complexSearch`,
    headers: {'x-api-key': apiKey},
    params: {
      includeIngredients: ingredients,
      addRecipeInformation: true,
      fillIngredients: true,
      instructionsRequired: true,
      sort: max-used-ingredients,
      number: 30,
      diet: diet,
      type: mealtype,
      intolerances: intolerances
    },
    transformResponse: [
      (data) => {
        let resp
  
        try {
          resp = JSON.parse(data)
        } catch (error) {
          throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(error)}`)
        }
  
        if (resp.status === 'success') {
          return resp.data
        } else {
          throw Error(`[requestClient] Request failed with reason -  ${data}`)
        }
      }
    ]
  })
    .then((res) => {
      const results = res.results;

      let transformedRecipes = [];
      
      for (const recipe of results) {
        const missedIngredients = formatIngredients(recipe["missedIngredients"]);
        const usedIngredients = formatIngredients(recipe["usedIngredients"]);
        const unusedIngredients = formatIngredients(recipe["unusedIngredients"]);

        const analysedInstructions = recipe["analyzedInstructions"]["steps"]
        const instructions = formatSteps(analysedInstructions)
        
        
        const newRecipe = {
          id: recipe["id"],
          title: recipe["title"],
          readyInMinutes: recipe["readyInMinutes"],
          image: recipe["image"],
          vegeterian: recipe["vegeterian"],
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