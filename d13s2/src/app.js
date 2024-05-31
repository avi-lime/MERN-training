import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './pages/homepage/homepage'

const parent = document.getElementById('root')
const root = ReactDOM.createRoot(parent)

const App = () => {
    return (<>
        <Homepage />
    </>)
}

root.render(<App />)