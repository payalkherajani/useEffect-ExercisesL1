import React from 'react';
import useAxios from '../homework/AxiosHook';

const GetAxios = () => {
    const url = '/api/users'
    const { loading, data, error } = useAxios(url);

    return (
        <div>
            <h1>{loading === true ? ("DATA LOADING") : ("DATA")}</h1>
            {/* <ul>
                {
                    data.data.users.map((d) => <li key={d.id}>{d.name}</li>)     //Showing error ask in vc
                }
            </ul> */}

        </div>
    )
}

export default GetAxios;