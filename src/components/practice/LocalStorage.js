import React from 'react'

const LocalStorage = () => {
    const savetoLocalStorage = () => {
        localStorage.setItem('click', 'I have clicked')
        console.log("reading from localstorage", localStorage.getItem('click'))
    }
    const savearrtoLocalStorage = () => {
        const arr = [1, 2, 3]
        localStorage.setItem('arr', arr);
        console.log("without json.stringify storage of array", localStorage.getItem('arr'));
        localStorage.setItem('myarr', JSON.stringify(arr));
        console.log("with json.stringify storage of array", JSON.parse(localStorage.getItem('myarr')));

    }
    return (
        <div>
            <button onClick={savetoLocalStorage}>Save to localstorage</button>
            <button onClick={savearrtoLocalStorage}>Storing array to localstorage</button>
        </div>
    )
}

export default LocalStorage;