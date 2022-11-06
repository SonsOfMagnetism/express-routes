require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/greeting', (req, res) => {
    res.send(`
    <h1>Hello, stranger</h1>`)
})

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    res.send(`Wow! Hello there, ${name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total
    const tipPercentage = req.params.tipPercentage
    const tip = total * tipPercentage / 100
    res.send(`Total = ${total} <br> Tip = ${tip} <br> Tip Percentage = ${tipPercentage}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})