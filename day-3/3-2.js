const fs = require('fs');
const lib = require("./slopeTreeCounter")

const rawData = fs.readFileSync('./data.txt', 'utf8');
const right3down1 = lib.slopeTreeCounter(rawData, 3, 1)

const right1down1 = lib.slopeTreeCounter(rawData, 1, 1)
const right5down1 = lib.slopeTreeCounter(rawData, 5, 1)
const right7down1 = lib.slopeTreeCounter(rawData, 7, 1)
const right1down2 = lib.slopeTreeCounter(rawData, 1, 2)
console.log(right1down1 * right3down1 * right5down1 * right7down1 * right1down2)
