// const ReactDOM = require('react-dom')
// const React = require('react')

import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = document.getElementById('root')
const root = ReactDOM.createRoot(parent)

const Heading = () => {
    return <h1>Hello from React 2!</h1>
}
root.render(<Heading />)
