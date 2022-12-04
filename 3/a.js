const fs = require("fs");
const values = require("./values");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const preparedData = data
    .toString()
    .replaceAll(/(\r\n)/g, "-")
    .split("-");

  const duplicates = [];

  function calculateMyScore(input) {
    if (values.hasOwnProperty(input)) {
      total += values[input];
    }
  }

  preparedData.forEach((rucksack) => {
    const half = Math.ceil(rucksack.length / 2);

    const firstHalf = rucksack.slice(0, half);
    const secondHalf = rucksack.slice(half);

    let lastDupe = "";

    for (let i = 0; i <= firstHalf.length; i++) {
      for (let j = 0; j <= secondHalf.length; j++) {
        if (firstHalf[i] === secondHalf[j] && firstHalf[i] !== lastDupe) {
          duplicates.push(firstHalf[i]);
          lastDupe = firstHalf[i];
        }
      }
    }
  });

  let total = 0;

  const cleanDupes = duplicates.filter((letter) => letter);
  cleanDupes.forEach((dupe) => {
    calculateMyScore(dupe);
  });

  console.log(total); //8394
});
