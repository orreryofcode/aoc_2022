const fs = require("fs");
const values = require("./values");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const preparedData = data
    .toString()
    .replaceAll(/(\r\n)/g, "-")
    .split("-");

  const potentialBadges = [];
  const badges = [];

  function calculateMyScore(input) {
    if (values.hasOwnProperty(input)) {
      total += values[input];
    }
  }

  for (let i = 0; i < preparedData.length; i += 3) {
    const firstString = preparedData[i];
    const secondString = preparedData[i + 1];
    const thirdString = preparedData[i + 2];

    let lastDupe = "";

    for (let j = 0; j <= firstString.length; j++) {
      for (k = 0; k <= secondString.length; k++) {
        if (firstString[j] === secondString[k]) {
          potentialBadges.push(firstString[j]);
          if (
            thirdString.includes(firstString[j]) &&
            firstString[j] !== lastDupe
          ) {
            badges.push(firstString[j]);
            lastDupe = firstString[j];
          }
        }
      }
    }
  }

  let total = 0;
  badges.forEach((badge) => {
    calculateMyScore(badge);
  });

  console.log(total); //2413
});
