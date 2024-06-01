import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const activeStyle = {
        color: 'red',
        textDecoration: 'underline'
    }

    const links = [
        { key: 'home', url: '/', name: 'Home' },
        { key: 'image', url: '/image-generator', name: 'Image Generator' },
        { key: 'history', url: '/history', name: 'History' },
        { key: 'contact', url: '/contact', name: 'Contact' },
        { key: 'help', url: '/help', name: 'Help' },
        { key: 'orders', url: '/orders', name: 'Orders' }
    ]

    return (
        <div className='header-container'>
            <div className='left'>
                {
                    links.map(link => {
                        return (
                            <Link key={link.key} style={props.page === link.key ? activeStyle : {}} to={link.url}>{link.name}</Link>
                        )
                    })
                }
            </div>
            <div className='right'>

            </div>
        </div>
    )
}

export default Navbar