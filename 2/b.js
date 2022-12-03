const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  let preparedData = data
    .toString()
    .replaceAll(/(\s)/g, "-")
    .split("-")
    .filter((data) => data.length > 0);

  //A = Rock, B = Paper, C = Scissors
  //X = Lose, Y = Draw, Z = Win
  const scoreRubric = {
    A: 1,
    B: 2,
    C: 3,
    X: "Lose",
    Y: "Draw",
    Z: "Win",
  };

  var myScore = 0;
  var outcomeScore = 0;

  //   Function to keep track of my score based on input (ie: Rock = 1pt, Paper = 2pt, Scissor = 3pt);
  function calculateMyScore(input) {
    if (scoreRubric.hasOwnProperty(input)) {
      myScore += scoreRubric[input];
    }
  }

  for (let i = 0; i < preparedData.length; i += 2) {
    // Calculates the score based on player's choice (rock, paper or scissors)
    let oppInput = preparedData[i];
    let outcome = preparedData[i + 1];
    let myInput;

    if (scoreRubric[outcome] === "Lose") {
      if (oppInput === "A") {
        myInput = "C";
      } else if (oppInput === "B") {
        myInput = "A";
      } else if (oppInput === "C") {
        myInput = "B";
      }

      calculateMyScore(myInput);
      outcomeScore += 0;
    }

    if (scoreRubric[outcome] === "Win") {
      if (oppInput === "A") {
        myInput = "B";
      } else if (oppInput === "B") {
        myInput = "C";
      } else if (oppInput === "C") {
        myInput = "A";
      }

      calculateMyScore(myInput);
      outcomeScore += 6;
    }

    if (scoreRubric[outcome] === "Draw") {
      myInput = oppInput;

      calculateMyScore(myInput);
      outcomeScore += 3;
    }
  }
  console.log(myScore + outcomeScore);
});

// If statement hell but it worked =]
