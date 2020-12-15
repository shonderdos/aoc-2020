var fs = require('fs');

var formatData = data => {
    let splitted = data.toString().split("\n");
    return splitted.map(split => {
        return {
            min: /(\d+)-/.exec(split)[1],
            max: /-(\d+)/.exec(split)[1], // possibly doesnt work when there are numbers in the password. adding a '?' might work
            character: /([a-z]+):/.exec(split)[1],
            password: /([a-z]+)$/.exec(split)[1],
        }
    })
}

const formattedData = formatData(fs.readFileSync('../data.txt', 'utf8'));

const result = formattedData.reduce((total, {min, max, character, password}) => {
    const result = password.match(new RegExp(`${character}`, "g"))

    if (result && result.length >= min && result.length <= max) {
        total++
    }

    return total;
}, 0)

console.log(result)