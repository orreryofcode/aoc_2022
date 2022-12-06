const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  const stringD = data.toString();
  const test = stringD.split("");

  let newSet;

  for (let i = 0; i < test.length; i++) {
    newSet = new Set(test.slice(i, i + 4));
    if (newSet.size === 4) {
      break;
    }
  }

  let uniqueString = Array.from(newSet).join("");

  console.log(stringD.indexOf(uniqueString) + 4);
});
