require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    const beerStart = 99
    res.send(`
    <h1>${beerStart} Bottles of beer on the wall</h1>
    <a href="/${beerStart-1}">take one down, pass it around</a>`)
})

app.get('/:number_of_bottles', (req, res) => {
    const beerBottles = req.params.number_of_bottles
    if (beerBottles > 0) {
        res.send(`
        <h1>${beerBottles} Bottles of beer on the wall</h1>
        <a href="/${beerBottles-1}">take one down, pass it around</a>`)
    } else {
        res.send(`
        <h1>${beerBottles} Bottles of beer on the wall</h1>
        <a href="/">take one down, pass it around</a>`)
    }

})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})