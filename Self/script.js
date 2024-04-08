import fs from 'fs'

const enterDetails = (e) => {
    e.preventDefault();
    const product = {
        productName: document.getElementById("name").value,
        productPrice: document.getElementById("price").value
    }
    fs.appendFileSync("data.json", JSON.stringify())

}

const loadData = () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => console.log(data))
}