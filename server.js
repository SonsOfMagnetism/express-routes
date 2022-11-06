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

app.get('/magic/:answer', (req, res) => {
    const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    const randomAnswers = answers[Math.floor(Math.random()*answers.length)]
    res.send(`<h1>${randomAnswers}</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})