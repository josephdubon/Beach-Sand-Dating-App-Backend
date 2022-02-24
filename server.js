import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express'
// import mongoose from "mongoose"

// App Config
const app = express()
const port = process.env.PORT || 8001
const dbuser = process.env.MONGO_USER
const dbpw = process.env.MONGO_PW
const connection_uri = `mongodb+srv://${dbuser}:${dbpw}@cluster0.8qyol.mongodb.net/beachSandDatingApp?retryWrites=true&w=majority`
console.log(connection_uri)

// Middleware

//DB Config
mongoose.connect(connection_uri)

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello Joseph Dubon'))

// Listener Config
app.listen(port, () => console.log(`Currently listening on localhost: ${port}`))