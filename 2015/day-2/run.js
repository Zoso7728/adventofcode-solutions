let squareFeetWrappingPaper = 0
let feetRibbon = 0

const calcWrappingPaper = (l, w, h) => {
    const areaA = l*w
    const areaB = w*h
    const areaC = h*l

    const surfaceArea = 2*areaA + 2*areaB + 2*areaC

    const smallestArea = Math.min(areaA, areaB, areaC)

    squareFeetWrappingPaper += surfaceArea + smallestArea
}

const calcRibbon = (l, w, h) => {
    const [sideA, sideB] = [l, w, h].sort((a, b) => a - b).slice(0, 2)
    const smallestPerimeter = 2*sideA + 2*sideB
    const cubicVolume = l*w*h

    feetRibbon += smallestPerimeter + cubicVolume
}

module.exports = data => {
    const regex = /^([0-9]*)+x([0-9]*)+x([0-9]*)/
    const arr = data.split('\n')

    arr.forEach(element => {
        const [_, l, w, h] = element.match(regex)

        calcWrappingPaper(l, w, h)
        calcRibbon(l, w, h)
    })

    console.log('Total square feet of wrapping paper:', squareFeetWrappingPaper)
    console.log('Total feet of ribbon:', feetRibbon)
}
