const display = (e) => {
    e.preventDefault();
    // let userData = {
    //     userHobbies: []
    // }

    // for (let i = 0; i < e.target.length; i++) {
    //     let t = e.target[i];
    //     let type = t.type;
    //     let name = t.name;
    //     let value = t.value;

    //     if (type == 'submit') continue;
    //     if (type == 'checkbox' && t.checked) {
    //         userData[name].push(value);
    //     }
    //     if (type == 'radio' && t.checked) {
    //         userData[name] = value;
    //     }
    //     userData[name] = value;

    // }
    // console.dir(userData);
    let name = document.getElementById('userName').value;
    let email = document.getElementById('userEmail').value;
    let password = document.getElementById('userPassword').value;
    let hobbies = document.querySelectorAll('input[type="checkbox"]:checked');
    let gender = document.querySelector('input[type="radio"]:checked').value;

    let data = {
        name: name,
        email: email,
        password: password,
        hobbies: [...hobbies].map(hobby => hobby.value),
        gender: gender
    }

    for (let key in data) {
        console.log(data[key])
        document.getElementById(key).innerHTML += data[key];
    }

}


const nameChange = (e) => {
    console.log(e.target.value)
}