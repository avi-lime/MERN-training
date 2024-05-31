import React, { useEffect, useState } from 'react'
import './ImageGenerator.css'
import Navbar from '../Navbar/Navbar';

const ImageGenerator = () => {
    const [data, setData] = useState("");
    // const [query, setQuery] = useState("");

    /* Can also generate a random query at start */
    // const queryList = ["Dog", "Cat", "Cute", "Birds", "Scenary"]
    // const randomQuery = queryList[Math.floor(Math.random() * queryList.length)]
    // const [query, setQuery] = useState(randomQuery);

    const getData = async () => {
        const query = document.getElementById('txtQuery').value
        if (!query) return
        const res = await fetch(`https://source.unsplash.com/random/500x500/?${query}`);
        setData(res.url)
    }


    /* Using setQuery and useEffect */
    // const getData = async () => {
    //     if (!query) return
    //     const res = await fetch(`https://source.unsplash.com/random/400x400/?${query}`);
    //     setData(res.url)
    // }

    // useEffect(() => {
    //     getData()
    // }, [query])

    return (
        <>
            <Navbar />
            <div className='image-generator-main-container'>
                <h2>Image Generator</h2>
                <div>
                    <input id='txtQuery' type='text'></input>
                    <button onClick={getData}>Go</button>
                    {/* <button onClick={ setQuery(document.getElementById('txtInput').value) }>Go</button> */}
                </div>
                {/* If data, display */}
                {data && <img src={data} alt='' />}

            </div>
        </>
    )
}

export default ImageGenerator