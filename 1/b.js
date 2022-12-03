const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  let preparedData = data
    .toString()
    .replaceAll(/(\r\n)/g, "-")
    .split("-");

  let elfSums = [];

  var total = 0;
  for (let i = 0; i < preparedData.length; i++) {
    if (preparedData[i]) {
      total += parseInt(preparedData[i]);
    }

    if (!preparedData[i]) {
      elfSums.push(total);
      total = 0;
    }
    // Value at 1st index should be 34,142
    // Value at 2nd index should be 54,868
  }

  //   sort elfSums array from lowest to highest
  const sorted = elfSums.sort(function (a, b) {
    return a - b;
  });

  //Sum of the total calories of the highest 3 elves
  const topThreeElves = sorted[254] + sorted[253] + sorted[252];
  console.log(topThreeElves);
});
