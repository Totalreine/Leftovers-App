//returns instructions string
const formatInstructions = function (instructions) {
  let formattedInstructions = "";
  console.log(instructions)

  for (const i of instructions) {
    const divider = "   ";
    const number = i.number;
    const step = i.step;
    
    formattedInstructions += divider;
    formattedInstructions += number;
    formattedInstructions += divider;
    formattedInstructions += step;
  }

  return formattedInstructions;
}

exports.formatInstructions = formatInstructions;