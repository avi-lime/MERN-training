// const arr = [10, 20, 30]

// const arr2 = [10.10, 22.22, 33.33]

// const ans = arr.map(a => a ** 2)
// const ans2 = arr2.map(a => parseInt(a, 2)) // Math.floor()

// console.log(ans)
// console.log(ans2)


// const arr = [
//     "Delhi",
//     "Mumbai",
//     "Kolkata",
//     "Chennai",
//     "Bangalore",
//     "Pune",
//     "India",
//     "USA",
//     "Russia",
//     "Iraq"
// ]

// let ans = arr.filter(a => a.toLowerCase().includes("i") /*a.match(/i/i) */)

// const ans2 = arr.forEach(a => {

// })
// console.log(ans)

const arr2 = [
    "Delhi, India",
    "Mumbai-india",
    "Kolkata-INDIA",
    "Chennai, India",
    "Bangalore, India",
    "Pune, India",
    "New York, USA",
    "Los Angeles, USA",
    "Moscow, Russia",
    "Baghdad, Iraq"
]

let ans3 = arr2.filter(a => a.toLowerCase().includes("india"))
    .map(a => a.replace(/india/gi, "India"))

// console.log(ans3)

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let obj = {}
let obj2 = Object.assign({}, arr);
let obj3 = {}

arr.reduce((acc, curr, index) => acc[index] = curr, {})
arr.forEach((val, ind) => obj3[ind] = val)


console.log(obj)
// console.log(obj3)
// console.log(obj2)


const strArr = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Pune", "India", "USA", "Russia", "Iraq"]

let str = strArr.reduce((acc, curr) => acc + curr, "")

console.log(str)