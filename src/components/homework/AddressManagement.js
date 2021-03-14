import React, { useState } from 'react'
import usePostAxios from './PostAxiosHook';
import savemydataAddress from '../api/SaveAddress';

savemydataAddress();
const AddressManagement = () => {

    const [formdata, setFormData] = useState({
        address: "",
        street: "",
        landmark: "",
        city: "",
        state: "",
        pincode: ""
    })

    const url = "/api/address"
    const { loading, data, error } = usePostAxios(url, formdata)
    console.log({ loading, data, error });

    const { address, street, landmark, city, state, pincode } = formdata;

    const onChangeHandler = (e) => {
        let { name, value } = e.target;
        if (name === "pincode") {
            value = Number(value)
        }
        setFormData({ ...formdata, [name]: value })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(formdata);
    }

    console.log({ formdata });
    return (
        <div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
                <input type="text" placeholder="address" name="address" onChange={onChangeHandler} value={address} required />
                <input type="text" placeholder="street" name="street" onChange={onChangeHandler} value={street} required />
                <input type="text" placeholder="landmark" name="landmark" onChange={onChangeHandler} value={landmark} required />
                <input type="text" placeholder="city" name="city" onChange={onChangeHandler} value={city} required />
                <input type="text" placeholder="state" name="state" onChange={onChangeHandler} value={state} required />
                <input type="number" placeholder="pincode" name="pincode" onChange={onChangeHandler} value={pincode} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddressManagement;