const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  let preparedData = data
    .toString()
    .replaceAll(/(\s)/g, "-")
    .split("-")
    .filter((data) => data.length > 0);

  //A = Rock, B = Paper, C = Scissors
  //X = Rock, Y = Paper, Z = Scissors
  const scoreRubric = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
  };

  let myScore = 0;

  let outcomeScore = 0;

  for (let i = 0; i < preparedData.length; i += 2) {
    // Calculates the score based on player's choice (rock, paper or scissors)
    let myInput = preparedData[i + 1];
    let oppInput = preparedData[i];

    if (scoreRubric.hasOwnProperty(myInput)) {
      myScore += scoreRubric[myInput];
    }

    // Calculates the score based on outcome (lose, draw, win)

    if (scoreRubric[oppInput] === scoreRubric[myInput]) {
      outcomeScore += 3;
    }

    // If they pick rock...
    if (oppInput === "A") {
      if (myInput === "Y") {
        outcomeScore += 6;
      } else {
        outcomeScore += 0;
      }
    }

    // If they pick paper...
    if (oppInput === "B") {
      if (myInput === "Z") {
        outcomeScore += 6;
      } else {
        outcomeScore += 0;
      }
    }

    // If they pick scissors...
    if (oppInput === "C") {
      if (myInput === "X") {
        outcomeScore += 6;
      } else {
        outcomeScore += 0;
      }
    }
  }

  console.log(myScore + outcomeScore);
});
