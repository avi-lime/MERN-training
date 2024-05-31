const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
// parent.innerHTML = `<h1>Hello from JS DOM</h1>
//     <ul>
//       <li>Item 1</li>
//       <li>Item 2</li>
//     </ul> `

// const h1 = document.createElement('h1')
// h1.innerText = "Hello from JS DOM"

// const ul = document.createElement('ul')
// const li1 = document.createElement('li')
// li1.innerText = "Item 1"
// const li2 = document.createElement('li')
// li2.innerText = "Item 2"

// ul.appendChild(li1)
// ul.appendChild(li2)

// parent.appendChild(h1)
// parent.appendChild(ul)

const heading = React.createElement('h1', {}, "Hello from React");
const listItem1 = React.createElement('li', {
    key: 'li1',
    className: 'li-c-1',
    name: 'likhilesh',
    id: 'id-1',
    "data-args": "avi",
    style: {
        backgroundColor: 'red'
    }
}, "Item 1")
const listItem2 = React.createElement('li', { key: 'li2' }, "Item 2")
const list = React.createElement('ul', {}, [listItem1, listItem2])

// const s1 = {
//     border: '1px solid red',
//     backgroundColor: 'blue'
// } 

const h1 = <h1>Hello from React JSX</h1>
const li1 = <li style={{ // object hai wo, kuch b kar skta hai
    border: '1px solid red',
    backgroundColor: 'blue'
}}>Item 1</li>
const li2 = <li>Item 2</li>
const ul = <ul>{[li1, li2].map(el => el)}</ul>

root.render([h1, ul])