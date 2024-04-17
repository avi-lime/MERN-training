const express = require('express')
const { getAllProducts, addProduct, updateProduct, deleteProduct } = require("../controllers/productControllers.js")

const productRouter = express.Router()

productRouter.route('/')
    .get(getAllProducts)
    .post(addProduct)

productRouter.route('/:id')
    .put(updateProduct)
    .delete(deleteProduct)


module.exports = productRouter