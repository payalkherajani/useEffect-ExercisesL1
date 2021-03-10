import axios from 'axios';
import React, { useState, useEffect } from 'react'
import setupMockServerforProducts from '../api/Products';

setupMockServerforProducts()  //Starting the server
const LoadDataAxios = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchdata = async () => {
        setIsLoading(true);
        try {
            const { data: { products } } = await axios.get('/api/products');
            setData((data) => data = products);
        } catch (err) {
            console.error(err)
        }
        setIsLoading(false);
    }
    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <div>
            <h1>{isLoading === true ? ("DATA LOADING...") : ("DATA")}</h1>
            <span>code commented now!! Lots of data</span>
            {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    data && data.map((d, index) =>
                        <div class="card" key={index}>
                            <h5>{d.name}</h5>
                            <img src={d.image} className="image" />
                            <p class="card-heading-grow">Price: {d.price}</p>
                            <button>Buy Now</button>
                        </div>
                    )
                }
            </div> */}
        </div>
    )
}

export default LoadDataAxios;