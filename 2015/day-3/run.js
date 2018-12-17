const distinct = (val, idx, self) => self.indexOf(val) === idx

const setCoordinates = (element, coordinate)  => {
    if (element === '^') ++coordinate.y
    if (element === 'v') --coordinate.y
    if (element === '>') ++coordinate.x
    if (element === '<') --coordinate.x
}

const firstCalc = arr => {
    let coordinate = { x: 0, y: 0 }
    const totalLocationsVisited = []

    totalLocationsVisited.push(`${coordinate.x}${coordinate.y}`) // track initial house

    arr.forEach(element => {
        setCoordinates(element, coordinate)

        const str = `${coordinate.x}${coordinate.y}`

        const exists = totalLocationsVisited.find(i => i === str)
        if (!exists) totalLocationsVisited.push(str)
    })

    return totalLocationsVisited.length
}

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
            setCoordinates(element, santaCoordinate)

            const str = `${santaCoordinate.x}${santaCoordinate.y}`
            const exists = santaLocationsVisited.concat(roboSantaLocaltionsVisited).find(i => i === str)
            if (!exists) santaLocationsVisited.push(str)
        }

        if (!santaTurn) {
            setCoordinates(element, roboSantaCoordinate)

            const str = `${roboSantaCoordinate.x}${roboSantaCoordinate.y}`
            const exists = roboSantaLocaltionsVisited.concat(santaLocationsVisited).find(i => i === str)
            if (!exists) roboSantaLocaltionsVisited.push(str)
        }
    })

    const distinct = (val, idx, self) => self.indexOf(val) === idx

    return santaLocationsVisited
        .concat(roboSantaLocaltionsVisited)
        .filter((val, idx, self) => {
            return self.indexOf(val) === idx
        }).length
}

module.exports = data => {
    const arr = data.split('')

    const firstYearLocations = firstCalc(arr)
    const secondYearLocations = secondCalc(arr)

    console.log('Number of houses visited on first year:', firstYearLocations)
    console.log('Number of houses visited on second year:', secondYearLocations)
}
