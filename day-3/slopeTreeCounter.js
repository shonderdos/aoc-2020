const slopeTreeCounter = (rawData, traversingPatternX, traversingPatternY) => {
    const rawDataAsArray = rawData.split("\n");
    const slopeWidth = rawData.indexOf("\n");
    let treeCounter = 0;

    let posX = 0; //horizontal
    let posY = 0; //vertical
    while(posY < rawDataAsArray.length) {
        const slopeRow = rawDataAsArray[posY];
        const slopeColumn = posX % slopeWidth;

        const positionValue = slopeRow.charAt(slopeColumn)
        if(positionValue === "#"){
            treeCounter++
        }

        posX += traversingPatternX
        posY += traversingPatternY;
    }

    return treeCounter
}

module.exports = { slopeTreeCounter }
