import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import ImageGenerator from './pages/ImageGenerator/ImageGenerator'
import History from './pages/History/History'
import HistoryPage from './pages/HistoryPage/HistoryPage'
import HistoryInformationPage from './pages/HistoryInformationPage/HistoryInformationPage'
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
        element: <HistoryPage />
    },
    {
        path: '/history/:historyId',
        element: <HistoryInformationPage />
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
