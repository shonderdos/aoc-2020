const obj = require('./data.json');

const indexArr = [0, 1];
const isCorrectCombination = (arr, indexArr, expectedResult) => {
    return indexArr
        .map(index => arr[index])
        .reduce((acc, curr) => acc + curr) === expectedResult;
}

const getResult = (arr, indexArr) => {
    return indexArr
        .map(index => arr[index])
        .reduce((acc, curr) => acc * curr);
}

const increaseIndexArr = (indexArr, maxIndex) => {
    let lastIndex = indexArr.pop();
    lastIndex++;

    if (lastIndex > maxIndex) {
        lastIndex = [...indexArr].reverse().shift() + 1;
        increaseIndexArr(indexArr, maxIndex);
    }

    indexArr.push(lastIndex);
}

while (!isCorrectCombination(obj.data, indexArr, 2020)) {
    increaseIndexArr(indexArr, obj.data.length);
}

console.log(getResult(obj.data, indexArr));
