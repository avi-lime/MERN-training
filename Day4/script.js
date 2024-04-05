const obj = {
    "name": "Avi",
    "lastName": "Singh",
}

// obj.age = 21;

// console.log(obj.age); // 21

// const arr = [1, 2, 3, 4, 5];

// arr.push(10);

// console.log(Array.isArray(arr)); // true

// var checkIfObject = (x) => {
//     return typeof (x) === 'object' && !Array.isArray(x)
// }

// // console.log(checkIfObject(arr), checkIfObject(obj), checkIfObject(null)) // false true false

// // For loops

// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }

// // array
// const arr = [1, 2];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let i of arr) {
//     console.log(i);
// }


// // object
// for (let key in obj) {
//     console.log(`${key}: ${obj[key]}`);
// }

// for (let val of Object.values(obj)) {
//     console.log(val);
// }

// console.dir(window, innerHeight, innerWidth)

// console.log(window.document)

// console.dir(window.document)

const res = document.getElementsByTagName("div")

console.log(res)

const ht1 = document.getElementById("ht1")
const ht2 = document.getElementById("ht2")

console.log(ht1, ht2)

const t1 = document.getElementById("t1")

console.log(t1)

// querySelector
const ht3 = document.querySelector("#ht3")
console.log(ht3)

// querySelectorAll
const ht = document.querySelectorAll(".ht")
console.log(ht)