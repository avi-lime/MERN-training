console.log("...App Started...")

const API_KEY = "fc8657764b5a4465bc3318a1bb7c0bbd"

function fillData(div) {
    let text = ""
    fetch(`https://newsapi.org/v2/top-headlines?country=in&from=2024-03-08&sortBy=publishedAt&apiKey=${API_KEY}`)
        .then(res => res.json())
        .then(data => {
            // let randIndex = Math.floor(Math.random() * data.articles.length)
            // let randomArticle = data.articles[randIndex]

            // let dt = randomArticle.publishedAt ? randomArticle.publishedAt : Date.now()
            // dt = new Date(dt).toDateString()
            // let author = randomArticle.author ? randomArticle.author : "No Author"

            // text += `<a href='${randomArticle.url}' target='_blank'> <h1>${randomArticle.title}</h1></a>`
            // text += `<img src="${randomArticle.urlToImage}" alt="image"> <br>`
            // text += `<p>${author} | ${dt}</p>`
            // text += `<p>${randomArticle.description}</p>`

            // All articles

            data.articles.forEach((article) => {
                let dt = article.publishedAt ? article.publishedAt : Date.now()
                dt = new Date(dt).toDateString()
                let author = article.author ? article.author : "No Author"

                text += `<article>`
                text += `<a href='${article.url}' target='_blank'> <h1>${article.title}</h1></a>`
                text += `<img src="${article.urlToImage}" alt="image"> <br>`
                text += `<p>${author} | ${dt}</p>`
                text += `<p>${article.description}</p>`
                //
                // let a = document.createElement('a')
                // a.href = article.url
                text += `</article>`
            })

            div.innerHTML = text
        })


}

function renderUI() {
    const root = document.getElementById('root')

    const div = document.createElement('article')
    fillData(root)
}

renderUI()