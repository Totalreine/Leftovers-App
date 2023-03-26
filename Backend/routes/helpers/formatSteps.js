//returns array of step objects
const formatSteps = function (steps) {
  console.log("steps", steps)
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

exports.formatSteps = formatSteps;