const express = require('express')
const { generateImage } = require('../controllers/imageController')

const imageRouter = express.Router()

imageRouter.route('/')
    .get((req, res) => {
        res.status(200).json({
            status: 'success',
            message: 'GET Request to /api/v1/images'
        })
    })
    .post(generateImage)

module.exports = imageRouter