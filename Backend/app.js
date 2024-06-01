// Importing Modules
const express = require('express');
const path = require('path')
const cors = require('cors')
const imageRouter = require('./routes/imageRouter.js')

// Middleware
const app = express();
app.use(cors({ origin: true }))
app.use(express.json())

app.use('/api/v1/images', imageRouter)

module.exports = app