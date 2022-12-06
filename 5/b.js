const fs = require("fs");

fs.readFile("instructions.txt", (err, data) => {
  if (err) throw err;

  const boxes = [
    ["R", "G", "H", "Q", "S", "B", "T", "N"],
    ["H", "S", "F", "D", "P", "Z", "J"],
    ["Z", "H", "V"],
    ["M", "Z", "J", "F", "G", "H"],
    ["T", "Z", "C", "D", "L", "M", "S", "R"],
    ["M", "T", "W", "V", "H", "Z", "J"],
    ["T", "F", "P", "L", "Z"],
    ["Q", "V", "W", "S"],
    ["W", "H", "L", "M", "T", "D", "N", "C"],
  ];

  let instructions = [];

  let test = Array.from(data.toString().replaceAll(/\r\n/g, " ").split(" "));
  test.forEach((value) => {
    if (parseInt(value) > 0) {
      instructions.push(value);
    }
  });

  for (let k = 0; k < instructions.length; k += 3) {
    let removedItems = [];
    let moveFrom = instructions[k + 1];
    let moveTo = instructions[k + 2];

    for (let i = instructions[k]; i > 0; i--) {
      let removed = boxes[moveFrom - 1].pop();
      removedItems.push(removed);
      console.log("This is the array: ", removedItems);
    }

    boxes[moveTo - 1] = boxes[moveTo - 1].concat(removedItems.reverse());
  }
  console.log(boxes);
});

// WZMFVGGZP
