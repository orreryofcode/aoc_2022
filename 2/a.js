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
    X: 1,
    Y: 2,
    Z: 3,
  };

  let myScore = 0;

  let outcomeScore = 0;

  for (let i = 0; i < preparedData.length; i += 2) {
    let myInput = preparedData[i + 1];
    let oppInput = preparedData[i];

    if (scoreRubric.hasOwnProperty(myInput)) {
      myScore += scoreRubric[myInput];
    }

    if (scoreRubric[oppInput] === scoreRubric[myInput]) {
      outcomeScore += 3;
    }

    if (oppInput === "A") {
      if (myInput === "Y") {
        outcomeScore += 6;
      } else {
        outcomeScore += 0;
      }
    }

    if (oppInput === "B") {
      if (myInput === "Z") {
        outcomeScore += 6;
      } else {
        outcomeScore += 0;
      }
    }

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
