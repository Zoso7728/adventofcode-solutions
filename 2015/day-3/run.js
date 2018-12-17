const firstCalc = arr => {
    let coordinate = { x: 0, y: 0 }
    const totalLocationsVisited = []

    totalLocationsVisited.push(`${coordinate.x}${coordinate.y}`) // track initial house

    arr.forEach(element => {
        if (element === '^') ++coordinate.y
        if (element === 'v') --coordinate.y
        if (element === '>') ++coordinate.x
        if (element === '<') --coordinate.x

        const str = `${coordinate.x}${coordinate.y}`

        const exists = totalLocationsVisited.find(i => i === str)
        if (!exists) totalLocationsVisited.push(str)
    })

    console.log('Total locations visited the first year:', totalLocationsVisited.length)
}

const distinct = (val, idx, self) => self.indexOf(val) === idx

const secondCalc = arr => {
    let santaCoordinate = { x: 0, y: 0 }
    let roboSantaCoordinate = { x: 0, y: 0 }
    const santaLocationsVisited = []
    const roboSantaLocaltionsVisited = []

    santaLocationsVisited.push(`${santaCoordinate.x}${santaCoordinate.y}`) // track initial house
    roboSantaLocaltionsVisited.push(`${roboSantaCoordinate.x}${roboSantaCoordinate.y}`) // track initial house

    arr.forEach((element, key) => {
        const santaTurn = key % 2 === 0

        if (santaTurn) {
            if (element === '^') ++santaCoordinate.y
            if (element === 'v') --santaCoordinate.y
            if (element === '>') ++santaCoordinate.x
            if (element === '<') --santaCoordinate.x

            const str = `${santaCoordinate.x}${santaCoordinate.y}`
            const exists = santaLocationsVisited.concat(roboSantaLocaltionsVisited).find(i => i === str)
            if (!exists) santaLocationsVisited.push(str)
        }

        if (!santaTurn) {
            if (element === '^') ++roboSantaCoordinate.y
            if (element === 'v') --roboSantaCoordinate.y
            if (element === '>') ++roboSantaCoordinate.x
            if (element === '<') --roboSantaCoordinate.x

            const str = `${roboSantaCoordinate.x}${roboSantaCoordinate.y}`
            const exists = roboSantaLocaltionsVisited.concat(santaLocationsVisited).find(i => i === str)
            if (!exists) roboSantaLocaltionsVisited.push(str)
        }
    })

    console.log('Total locations visisted the second year:', santaLocationsVisited.concat(roboSantaLocaltionsVisited).filter(distinct).length)
}

module.exports = data => {
    const arr = data.split('')

    firstCalc(arr)
    secondCalc(arr)
}
