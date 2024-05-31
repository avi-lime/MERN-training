import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import ImageGenerator from './pages/ImageGenerator/ImageGenerator'
import Navbar from './pages/Navbar/Navbar'
import History from './pages/History/History'
const parent = document.getElementById('root')
const root = ReactDOM.createRoot(parent)

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/image-generator',
        element: <ImageGenerator />
    },
    {
        path: '/history',
        element: <History />
    },
    {
        path: '/contact',
        element: <div>contact</div>
    },
    {
        path: '/help',
        element: <div>help</div>
    },
])

const App = () => {
    return (

        <RouterProvider router={router} />
    )
}

root.render(<App />)
