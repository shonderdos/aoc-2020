const fs = require('fs');
const rawData = fs.readFileSync('./data.txt', 'utf8');

const rawDataAsArray = rawData
    .split(/\n\n/)
    .map(x => x.replace(/\n/g, ""))
    .reduce((sum, string) => sum + new Set(string).size, 0);

console.log(rawDataAsArray)
