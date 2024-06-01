import React from 'react'
import { Link } from 'react-router-dom'

const HistoryCard = (props) => {
    const item = props.item
    return (
        <div key={item.id} className='history-item'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={`/history/${item.id}`}>more...</Link>
        </div>
    )
}

export default HistoryCard