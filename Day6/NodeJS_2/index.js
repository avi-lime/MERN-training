// const figlet = require('figlet');

// figlet('Hello World!!', (err, data) => {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });


async function callAPI() {
    const pr1 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise 1');
            resolve("Promise 1 resolved");
        }, 1000);
    });
    const pr2 = await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise 2');
            resolve("Promise 1 resolved");
        }, 2000);
    });
}

callAPI();