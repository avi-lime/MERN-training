// console.log("GEC Start")

// function printPretty() {
//     console.log('prettyStart')
//     let ans = 2 + 3;
//     console.log(ans)
//     console.log('prettyEnd')

// }
// setTimeout(printPretty, 3000)
// sleep(3000)
// const btn = document.getElementById("btn")

// btn.addEventListener("click", printPretty)


// console.log("GEC End")


console.log('start')

let randProductId = Math.floor(Math.random() * 100)

fetch(`https://dummyjson.com/products/${randProductId}`)
    .then(res => res.json())
    .then(json => console.log(json))


    



const fetchUser = async (userName) => {

    let link = `https://api.github.com/users/${userName}`

    let res = await fetch(link)
    let user = await res.json()

    console.log(user)

}

fetchUser("avi-lime")


console.log('end')