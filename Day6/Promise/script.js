// setInterval(() => {
//     let time = new Date().toLocaleTimeString();
//     document.getElementById('time').innerHTML = time;
// }, 1000);

// console.log("start")

// setTimeout(() => {
//     console.log('Hello World');
// }, 0);
// console.log("end")
// console.log("test")
// console.log("test")
// console.log("test")


// // settimeout inside settimeout
// setTimeout(() => {
//     console.log('1');
//     setTimeout(() => {
//         console.log('2');
//     }, 0);
// }, 5000);


// createOrder()

// makePayment()


// function createOrder(item = 'soap', fn) {
//     console.log(item)
//     let orderID = '1234'
//     setTimeout(() => fn(orderID), 1000)
// }

// function makePayment(orderID) {
//     console.log(orderID)
// }

// createOrder("soap", makePayment)

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error')
    }, 5000);
})
pr.then((res) => console.log(res))
    .catch((err) => console.log(err))