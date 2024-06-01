const imageModel = require('../models/imageModel');
const fs = require('fs')
const path = require('path')

const generateImage = async (req, res) => {
    const { searchText } = req.body
    res.status(200).json({
        status: 'success',
        message: 'POST Request to /api/v1/images',
        data: {
            searchText,
            url: searchText
        }
    })
}

module.exports = { generateImage }