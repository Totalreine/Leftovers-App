//returns array of ingredient objects
const formatIngredients = function (ingredients) {
  let ingredientsArray = [];

  for (const i of ingredients) {
    const name = i["name"];
    const amount = i["amount"];
    const unit = i["unit"];

    const formattedIngredient = {
      name,
      amount,
      unit
    }

    ingredientsArray.push(formattedIngredient);
  }

  return ingredientsArray;
}

exports.formatIngredients = formatIngredients;