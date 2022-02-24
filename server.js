import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

import Cards from './dbCards.js'

// App Config
const app = express()
const port = process.env.PORT || 8001
const dbuser = process.env.MONGO_USER
const dbpw = process.env.MONGO_PW
const connection_uri = `mongodb+srv://${dbuser}:${dbpw}@cluster0.8qyol.mongodb.net/beachSandDatingApp?retryWrites=true&w=majority`
console.log(connection_uri)

// Middleware
app.use(express.json())
app.use(Cors())

// DB Config
mongoose.connect(connection_uri)

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello Joseph Dubon'))

app.post('/dating/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err + 'what did you do...?')
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/dating/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))