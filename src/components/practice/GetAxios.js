import React, { useState } from 'react';
import MockServer from '../api/User';
import axios from 'axios';

MockServer();  //calling server

const GetAxios = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const getDatafromserver = async () => {
        setIsLoading((isLoading) => isLoading = true);
        try {
            const { data: { users } } = await axios.get('/api/users');
            // setData(users)
            setData((data) => data = users)
        } catch (err) {
            console.error(err);
        }
        setIsLoading((isLoading) => isLoading = false)
    }
    console.log(data, "data");
    return (
        <div>
            <h1>{isLoading === true ? ("DATA LOADING") : ("DATA")}</h1>
            <button onClick={getDatafromserver}>Click to load from server</button>
            <ul>
                {
                    data.map((d) => <li key={d.id}>{d.name}</li>)     //Showing error ask in vc
                }
            </ul>

        </div>
    )
}

export default GetAxios;