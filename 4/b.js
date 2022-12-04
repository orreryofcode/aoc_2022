const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const preparedData = data.toString().replaceAll(/\r\n/g, ",").split(/,/);

  let total = 0;

  function splitAndCompare(a, b) {
    const newA = a.split("-");
    const newB = b.split("-");

    const conditionA =
      parseInt(newA[1]) < parseInt(newB[0]) ||
      parseInt(newA[0]) > parseInt(newB[1]);

    if (conditionA) {
      console.log("No overlap");
    } else {
      total++;
    }
  }

  for (let i = 0; i <= preparedData.length - 2; i += 2) {
    splitAndCompare(preparedData[i], preparedData[i + 1]);
  }

  console.log(total);
});
