(() => {
    const year = process.argv[2]
    const day = process.argv[3]

    const BASE_PATH = `./${year}/day-${day}`

    const data = require(`${BASE_PATH}/data.js`)
    const puzzle = require(`${BASE_PATH}/run.js`)

    puzzle(data)
})()
