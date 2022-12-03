const fs = require("fs");
const values = require("./values");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  //Format data so it doesn't suck to work with
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

  //   iterate over every 3 strings
  for (let i = 0; i < preparedData.length; i += 3) {
    const firstString = preparedData[i];
    const secondString = preparedData[i + 1];
    const thirdString = preparedData[i + 2];

    // lastDupe stores the last duplicate character so that we don't push that character multiple times. We check if the character being pushed is equal to lastDupe later
    let lastDupe = "";

    //Compare each character in firstString and secondString and find duplicates
    for (let j = 0; j <= firstString.length; j++) {
      for (k = 0; k <= secondString.length; k++) {
        // Pushes duplicate character to holding array potentialBadges
        if (firstString[j] === secondString[k]) {
          potentialBadges.push(firstString[j]);

          //Checks to see if thirdString includes any of the values stored in potentialBadges and pushes that value into a final array badges
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
