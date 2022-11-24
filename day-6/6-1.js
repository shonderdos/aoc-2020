const fs = require('fs');
const rawData = fs.readFileSync('./data.txt', 'utf8');

const rawDataAsArray = rawData
    .split(/\n\n/)
    .map(x => x.replace(/\n/g, ""))
    .map(string => [...string].reduce((result, char) => {
        if(!result.includes(char)){
            result.push(char)
        }

        return result
    }, []))
    .map(string => string.length)
    .reduce((count, number) => {
        return count + number
    }, 0)

console.log(rawDataAsArray)
