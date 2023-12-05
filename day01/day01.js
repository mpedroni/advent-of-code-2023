const fs = require("fs");

const lines = fs.readFileSync("day01/input.txt", "utf-8").split("\n");

function reverse(str) {
  return str.split("").reverse().join("");
}

function partOne(lines) {
  const calibrations = lines.map((line) => {
    const first = line.split("").find((c) => !Number.isNaN(Number(c)));
    const last = line.split("").findLast((c) => !Number.isNaN(Number(c)));
    return Number(first + last);
  });

  const sum = calibrations.reduce((acc, value) => acc + value, 0);
  console.log(sum);
}

function partTwo(lines) {
  const cursive = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  const words = Object.keys(cursive);

  const pattern = "([0-9])|(" + words.join("|") + ")";
  const regex = new RegExp(pattern, "g");

  const reversePattern = "([0-9])|(" + words.map(reverse).join("|") + ")";
  const reverseRegex = new RegExp(reversePattern, "g");

  const calibrations = lines.map((line) => {
    let match = line.match(regex);
    const f = match[0];

    match = reverse(line).match(reverseRegex);
    const l = reverse(match[0]);

    const first = cursive[f] || f;
    const last = cursive[l] || l;

    return Number(first + last);
  });

  const sum = calibrations.reduce((acc, value) => acc + value, 0);
  console.log(sum);
}

partOne(lines);
partTwo(lines);
