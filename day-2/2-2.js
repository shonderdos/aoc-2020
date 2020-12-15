var fs = require('fs');

var formatData = data => {
    let splitted = data.toString().split("\n");
    return splitted.map(split => {
        return {
            firstPos: +(/(\d+)-/.exec(split)[1]) - 1, // add one to compensate for the zero
            secondPos: +(/-(\d+)/.exec(split)[1]) - 1,
            character: /([a-z]+):/.exec(split)[1],
            password: /([a-z]+)$/.exec(split)[1],
        }
    })
}

const formattedData = formatData(fs.readFileSync('../data.txt', 'utf8'));

const result = formattedData.reduce((total, {firstPos, secondPos, character, password}) => {
    const valuesInPosition = `${password[firstPos] || ''}${password[secondPos] || ''}`;
    const result = valuesInPosition.match(new RegExp(character, "g"));

    if (result && result.length === 1) {
        total++
    }

    return total;
}, 0)

console.log(result)