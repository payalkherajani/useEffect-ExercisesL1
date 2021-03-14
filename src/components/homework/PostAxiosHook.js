import axios from 'axios';
import { useState, useEffect } from 'react';

const usePostAxios = (url, formdata) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.post(url, {
                address: {
                    formdata
                }
            });
            setData(response);
        } catch (err) {
            setError(err);
            console.error(err, "1");
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [data])

    return { loading, error, data }
}

export default usePostAxios;