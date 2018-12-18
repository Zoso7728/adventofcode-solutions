const crypto = require('crypto')

let num = 0
let testVal

module.exports = str => {
    do {
        ++num
        const hex = crypto.createHash('md5').update(`${str}${num}`).digest('hex').toUpperCase()
        testVal = hex.slice(0, 6)
    } while (testVal !== '000000')

    console.log(num)
}
