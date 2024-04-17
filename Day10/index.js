const express = require('express');
const fs = require('fs/promises');
const app = express();

const productRouter = require('./routes/productRoute.js')
const userRouter = require("./routes/userRoute.js")

app.use(express.json());

app.use((req, res, next) => {
    const time = new Date().toLocaleString();

    fs.appendFile('log.txt', req.url + '\t' + time + '\n')
    next();
})

// SECOND LEVEL ABSTRACTION ?

// const productRouter = express.Router();
// const userRouter = express.Router();

app.use('/api/products', productRouter) // defines main route
app.use('/api/users', userRouter)

// productRouter.route('/')
//     .get(getAllProducts)
//     .post(addProduct)

// productRouter.route('/:id') // sub route
//     .put(updateProduct)
//     .delete(deleteProduct)

// userRouter.route('/')
//     .get(getUser)
//     .post(addUser)
//     .delete(deleteUser)
//     .put(updateUser)

// app.get('/products', async (req, res) => {
//     const { id, name } = req.query;
//     console.log()
//     const products = await fetchProducts({ id, name })
//     res.json(products)
// });

// FIRST LEVEL ABSTRACTION

// app.route('/api/products')
//     .get(getAllProducts)
//     .post(addProduct)

// app.route('/api/products/:id')
//     .put(updateProduct)
//     .delete(deleteProduct)

// app.route('/api/users')
//     .get(getUser)
//     .post(addUser)
//     .put(updateUser)
//     .delete(deleteUser)

app.listen(1010, (req, res) => {
    console.log('Server is running on port 1010');
})