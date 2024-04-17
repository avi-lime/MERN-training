const fs = require('fs/promises')


async function fetchProducts({ id = null, name = null }) {
    const res = await fetch("http://localhost:1010/api/products");
    const data = await res.json();
    const products = data.products

    if (id) return products.find((product) => product.id == id)

    if (name) return products.filter((product) => product.title.toLowerCase().includes(name.toLowerCase()));

    return products;

}

const getAllProducts = async (req, res) => {
    fs.readFile('./data.json', 'utf-8')
        .then((data) => {
            res.status(200);
            res.json({
                status: 'success',
                results: JSON.parse(data).length,
                products: JSON.parse(data)
            });
        }).catch((err) => {
            res.json({
                status: 'error',
                message: err.message
            });
        });
}

const addProduct = async (req, res) => {
    const products = await fetchProducts({});
    const data = req.body;
    if (!data.price || !data.title) {
        res.json({
            status: 'error',
            message: 'Please provide title and price'
        })
        return
    }
    data.id = products.length == 0 ? 1 : products[products.length - 1].id + 1;
    products.push(data);
    fs.writeFile('./data.json', JSON.stringify(products))
    res.end("Done")
}


const updateProduct = async (req, res) => {
    const { id } = req.params;

    const products = await fetchProducts({});
    const data = req.body;
    data.id = parseInt(id);
    const newArray = products.map((product) => {
        if (product.id == id) return data;
        return product
    })

    fs.writeFile('./data.json', JSON.stringify(newArray))
    res.status(200);
    res.json({
        status: 'success',
        data: {
            message: 'Product updated successfully',
            product: data
        }
    });
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    const products = await fetchProducts({});
    const newArray = products.filter((product) => product.id != id);
    fs.writeFile('./data.json', JSON.stringify(newArray))
    res.status(204);
    res.json({
        status: 'success',
        data: {
            message: 'Product deleted successfully'

        }
    });
}

module.exports = { getAllProducts, addProduct, updateProduct, deleteProduct }