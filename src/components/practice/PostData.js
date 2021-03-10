import React, { useEffect, useState } from 'react'
import setupMockServerforAddress from '../api/Address';
import axios from 'axios';

setupMockServerforAddress();

const PostData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState("");

    const fetchdata = async () => {
        setIsLoading(true);
        try {
            const { data: { addresses } } = await axios.get("/api/addresses");
            setData((data) => data = addresses);
        } catch (err) {
            console.error(err)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const addcity = async () => {
        try {
            const { data: { address } } = await axios.post("api/addresses",
                {
                    address: {
                        city
                    }
                }
            )
            setData([...data, address]);
        } catch (err) {
            console.error(err)
        }
    }
    // console.log(data);
    return (
        <div>
            <h1>{isLoading === true ? ('Address Loading...') : ("Address")}</h1>
            <input type="text" placeholder="city... ?" value={city} onChange={(e) => setCity((city) => city = e.target.value)} />
            <button onClick={addcity}>Add</button>
            <ul>
                {
                    data.map((d) => {
                        return <li key={d.id}>{d.city}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default PostData;