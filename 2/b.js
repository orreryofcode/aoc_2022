const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  let preparedData = data
    .toString()
    .replaceAll(/(\s)/g, "-")
    .split("-")
    .filter((data) => data.length > 0);

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

  function calculateMyScore(input) {
    if (scoreRubric.hasOwnProperty(input)) {
      myScore += scoreRubric[input];
    }
  }

  for (let i = 0; i < preparedData.length; i += 2) {
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
