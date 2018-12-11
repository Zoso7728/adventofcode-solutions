(() => {
    const year = process.argv[2]
    const day = process.argv[3]

    const puzzle = require(`./${year}/day-${day}/run.js`)
    puzzle()
})()
