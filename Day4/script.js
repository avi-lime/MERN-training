const obj = {
    "name": "Avi",
    "lastName": "Singh",
}

// obj.age = 21;

// console.log(obj.age); // 21

// const arr = [1, 2, 3, 4, 5];

// arr.push(10);

// console.log(Array.isArray(arr)); // true

var checkIfObject = (x) => {
    return typeof (x) === 'object' && !Array.isArray(x)
}

// console.log(checkIfObject(arr), checkIfObject(obj), checkIfObject(null)) // false true false

