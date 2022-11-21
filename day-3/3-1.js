const fs = require('fs');
const lib = require("./slopeTreeCounter")

const rawData = fs.readFileSync('./data.txt', 'utf8');
const result = lib.slopeTreeCounter(rawData, 3, 1)

console.log(result)
