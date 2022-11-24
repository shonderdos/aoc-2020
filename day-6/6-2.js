const fs = require('fs');
const rawData = fs.readFileSync('./data.txt', 'utf8');

const rawDataAsArray = rawData
    .trim()
    .split(/\n\n/)
    .map(string => string.split(/\n/))
    .map(groupArray => {
        if(groupArray.length === 1) groupArray[0].length

        groupArray.sort()
        const [firstInGroup] = groupArray.splice(0,1)
        const count = [...firstInGroup].reduce((uniqueLetters, letter) => {
            const everyoneHasThisQuestion = groupArray.every(string => string.includes(letter))

            if(everyoneHasThisQuestion) {
                uniqueLetters.push(letter)
            }

            return uniqueLetters
        }, [])

        return count.length

    })
    .reduce((count, number) => {
        return count + number
    }, 0)

console.log(rawDataAsArray)
