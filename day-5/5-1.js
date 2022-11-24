const fs = require('fs');
const rawData = fs.readFileSync('./data.txt', 'utf8');
const getResult = (arr, string) => {
    if (arr.length === 1) return arr[0]

    const firstChar = string.substring(0, 1)
    const splitArray = [arr.splice(0, arr.length / 2), arr]
    if (['L', 'F'].includes(firstChar)) {
        return getResult(splitArray[0], string.substring(1))
    } else {
        return getResult(splitArray[1], string.substring(1))
    }

}


let rawDataAsArray = rawData
    .trim()
    .split(/\n/)
    .map(r => [r.substring(0, 7), r.substring(7)])
    .map(([row, column]) => {
        return [getResult([...Array(128).keys()], row), getResult([...Array(8).keys()], column)]
    })
    .map(([row, column]) => (row * 8) + column)
    .sort((a,b) => a - b)

console.log(rawDataAsArray)
