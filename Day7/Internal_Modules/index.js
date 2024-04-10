// const fs = require('fs');

// // const data = fs.readFileSync('myReadMe.txt', { encoding: 'utf-8' })

// // console.log(data)

// // fs.writeFileSync('logs.txt', "10/4/2024: Day 7")

// const DATA_FILE = __dirname + '/data.json'
// let data

// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// const user = new User("John Doe", 30)
// if (fs.existsSync(DATA_FILE)) {
//     data = fs.readFileSync(DATA_FILE)
//     data = JSON.parse(data.toString())
//     // data.push(user)
//     console.log(data)
//     // fs.writeFileSync(DATA_FILE, JSON.stringify(data))
// } else {
//     fs.appendFileSync(DATA_FILE, JSON.stringify({ name: 'John Doe', age: 30 }))
// }

// const fsPromises = require('fs/promises')

// const pr = fsPromises.readFile('myReadMe.txt', { encoding: 'utf-8' })

// pr.then(res => console.log(res))

// const fsCallback = require('fs')

// fsCallback.readFile('myReadMe.txt', { encoding: 'utf-8' }, (err, data) => {
//     if (err && err.code === 'ENOENT') {
//         console.log("File does not exist")
//     } else {
//         console.log(data)
//     }
// }
// )


// const http = require('http')
// const fs = require('fs')
// const data = fs.readFileSync('data.json', { encoding: 'utf-8' })

// http.createServer((req, res) => {
//     // res.setHeader('Content-Type', 'text/plain')
//     console.log(data)
//     res.write(data)
//     res.end()
//     console.log(req.url === '/' ? Object.keys(req) : "")
//     console.log(req.url === '/' ? req.method : req.url)
// }).listen(1010, () => console.log("<---- Server Started ---->"))


const http = require('http')
const fs = require('fs')

const data = fs.readFileSync('products.json', { encoding: 'utf-8' })

const htmlTemplate = `
    <!DOCTYPE html>
    <html>
        <head>
            <style>

                .products {
                    display: grid;
                    grid-template: auto / repeat(auto-fill, minmax(300px, 1fr));
                }
                .product-card {
                    border: 1px solid #000;
                    padding: 10px;
                    margin: 10px;
                    width: 300px;
                    display: inline-block;
                }

            </style>
        </head>
        <body>
            <div class='products'>
            __PRODUCT__CARDS__
            </div>
        </body>
    </html>
`
const cardTemplate = `
    <div class='product-card'>
        <h2>__TITLE__</h2>
        <p>__INFO__</p>
    </div>
`

let products = ""

// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(data => {
//         data.products.forEach(product => {
//             const card = cardTemplate
//                 .replace('__TITLE__', product.title)
//                 .replace('__INFO__', product.description)
//             products += card
//         })

//         renderUI(products)
//     });


JSON.parse(data).products.forEach(product => {
    const card = cardTemplate
        .replace('__TITLE__', product.title)
        .replace('__INFO__', product.description)
    products += card
})

renderUI(products)

function renderUI(products) {
    const page = htmlTemplate.replace('__PRODUCT__CARDS__', products)
    const server = http.createServer((req, res) => {
        res.setHeader('Content-Type', 'text/html')
        res.write(page)
        res.end()
    })
    server.listen(1010, () => console.log("<---- Server Started ---->"))

}


