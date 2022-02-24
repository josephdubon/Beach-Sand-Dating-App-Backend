require('dotenv').config()

import express from 'express'
// import mongoose from "mongoose"

// App Config
const app = express()
const port = process.env.PORT || 8001

// Middleware

// DB Config

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello Joseph Dubon'))

// Listener Config
app.listen(port, () => console.log(`Currently listening on localhost: ${port}`))