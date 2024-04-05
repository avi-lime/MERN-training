let divEl = document.querySelector("div");

// divEl.remove();
// divEl.removeChild(divEl.childNodes[1])

let pEl = document.querySelector("p:nth-of-type(2)");


divEl.removeChild(pEl)

// pEl.remove();

let newChild = (e) => {
    // let newEl = document.createElement("h1");
    // newEl.textContent = "This is a new element";
    // divEl.appendChild(newEl)
    // e.target.remove();
}

let changeLocation = (e) => {

    let x = Math.floor(Math.random() * innerWidth);
    let y = Math.floor(Math.random() * innerHeight);
    e.target.style.position = "absolute";
    e.target.style.left = `${x - 20}px`;
    e.target.style.top = `${y - 5}px`;


}