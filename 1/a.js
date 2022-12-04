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
  }

  const sorted = elfSums.sort(function (a, b) {
    return a - b;
  });

  console.log(sorted[254]);
});
