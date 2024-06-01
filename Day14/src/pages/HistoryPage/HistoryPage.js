import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './HistoryPage.css'
import { Link } from 'react-router-dom'

const HistoryPage = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    const getData = async () => {
        // const response = await fetch('https://dummyjson.com/products')
        const response = await fetch(`https://dummyjson.com/products/search?q=${search}`)
        const obj = await response.json()
        let products = obj.products
        // if (searchText)
        //     products = products.filter(item => item.title.toLowerCase().startsWith(searchText.toLowerCase()))
        setData(products)
    }

    useEffect(() => {
        getData()
        // getData(search)
    }, [search])

    return (
        <div>
            <Navbar page="history" />
            <input type='text' onChange={(e) => setSearch(e.target.value)} />
            <div className='history-main-container'>
                {
                    data.map(item => {
                        return (
                            <div key={item.id} className='history-item'>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <Link to={`/history/${item.id}`}>more...</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HistoryPage