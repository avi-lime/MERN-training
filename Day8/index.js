const fs = require('fs');
const http = require('http');
const figlet = require('figlet')
const url = require('url');

const data = fs.readFileSync('data.json', { encoding: "utf-8" })
const dataObj = JSON.parse(data)

const htmlTemplate = fs.readFileSync('Templates/page.html', { encoding: "utf-8" })
const cardTemplate = fs.readFileSync('Templates/card.html', { encoding: "utf-8" })
const productTemplate = fs.readFileSync("Templates/product.html", { encoding: "utf-8" })

function getProducts({ id = null, q = null }) {
    let products = ""
    if (!id) {
        dataObj.products.forEach((product, index) => {
            if (q && !product.title.toLowerCase().includes(q.toLowerCase())) return
            products += cardTemplate
                .replace('$_TITLE_$', product.title)
                .replace('$_IMG_SRC_$', product.thumbnail)
                .replace('$_LINK_$', `/products?id=${index}`)
        })
    } else {
        const product = dataObj.products[id]
        products = productTemplate
            .replace('$_PRODUCT_NAME_$', product.title)
            .replace('$_PRODUCT_IMG_SRC_$', product.thumbnail)
            .replace('$_DESCRIPTION_$', product.description)
            .replace('$_PRICE_$', product.price)
            .replace('$_DISC_$', product.discountPercentage)
            .replace('$_PID_$', id)
    }

    return htmlTemplate.replace('$_PRODUCTS_$', products);
}

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    const { pathname, query } = url.parse(req.url, true)
    // console.log(myURL.searchParams)

    switch (pathname) {
        case "/home":
            res.write("<h1>Home</h1>")
            const homePage = fs.readFileSync('Templates/home.html', {
                encoding: 'utf8'
            })
            res.write(homePage)
            break;
        case "/products":
            res.write("<h1>Products</h1>")
            res.write(getProducts({ id: query.id, q: query.q }))
            break;
        case "/buy":
            res.write(`<p>Buying PID - ${query.id}</p>`)
            res.write("Bas ab payment kardo, baaki ka baadme")
            break;
        default:
            res.write("<h1>Default</h1>")
            break;
    }

    res.end()
})



server.listen(1000, () => {
    figlet("Server Started", (err, data) => {
        if (err) console.dir(err)
        console.log(data)
    })
})