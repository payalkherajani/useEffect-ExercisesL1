import React, { useState, useEffect } from 'react'
import useLocalStorage from './LCHook';

const Wishlist = () => {
    const [wishText, setWishText] = useState("");
    const [wishList, setWishList] = useState([]);
    const totalWishessaved = useLocalStorage(wishList);    //Custom Hook for LocalStorage

    useEffect(() => {
        console.log('I run only once when wishlist is updated')
    }, [wishList])


    const savetoWishList = () => {
        const wishes = { id: Date.now(), wishText: wishText }
        setWishList((wishlist) => [...wishList, wishes])
        setWishText((wishText) => wishText = " ")
    }

    return (
        <div>
            <input type="text" placeholder="I wish ..." onChange={(e) => setWishText((wishText) => setWishText(e.target.value))} value={wishText} />
            <button onClick={savetoWishList}>Add</button>
            <ul>
                {
                    wishList.map(({ id, wishText }) => <li key={id}>{wishText}</li>)
                }
            </ul>
            <span>Total Wishes: {totalWishessaved}</span>

        </div>
    )
}

export default Wishlist;