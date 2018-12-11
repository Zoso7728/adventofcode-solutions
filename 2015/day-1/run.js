const data = require('./data.js')

let floor = 0
let basementPosition = 0

module.exports = () => {
    const arr = data.split('')

    arr.forEach((element, key) => {
        if (element === '(') ++floor
        if (element === ')') --floor

        if (floor < 0 && !basementPosition) basementPosition = key
    })

    console.log('Santa arrives on this floor:', floor)
    console.log('This floor is the first time Santa reaches the basement:', basementPosition)
}
