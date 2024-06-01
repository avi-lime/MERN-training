const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    query: {
        type: String,
        required: [true, 'Query is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    }
})

const imageModel = mongoose.model('images', imageSchema)

module.exports = imageModel