//returns array of ingredients objects
const joinIngredients = function (array1, array2, array3) {
  let stepsArray = [];

  for (const i of steps) {
    const number = i["number"];
    const step = i["step"];

    const formattedstep = {
      number,
      step
    }

    stepsArray.push(formattedstep);
  }

  return stepsArray;
}

exports.joinIngredients = joinIngredients;