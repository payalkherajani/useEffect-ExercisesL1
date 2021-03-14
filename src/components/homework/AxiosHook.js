import axios from 'axios';
import { useState, useEffect } from 'react';
import MockServer from '../api/User';

MockServer();
const useAxios = (url) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState("")

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(url);
            console.log({ response })
            setData(response);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { loading, error, data }
}

export default useAxios;