const fs = require('fs');
const rawData = fs.readFileSync('./data.txt', 'utf8');
const arrayOfPassports = rawData.split("\n\n")
const requiredPassportFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
const count = arrayOfPassports.reduce((store, currentPassport) => requiredPassportFields.every(currentPassport.includes) ? store++ : store, 0)

console.log(count)
