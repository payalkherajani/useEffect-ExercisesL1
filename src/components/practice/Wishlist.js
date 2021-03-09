import React, { useState, useEffect } from 'react'

const Wishlist = () => {
    const [wishText, setWishText] = useState("");
    const [wishList, setWishList] = useState([]);
    const [totalWishessaved, setTotalWishesSaved] = useState(-1);
    useEffect(() => {
        console.log('I run only once when wishlist is updated')
    }, [wishList])

    useEffect(() => {
        console.log('Gotcha,while setting state in useEffect')
        setTotalWishesSaved((totalWishessaved) => totalWishessaved + 1)
    }, [wishList])

    const savetoWishList = () => {
        const wishes = { id: Date.now(), wishText: wishText }
        setWishList((wishlist) => [...wishList, wishes])
        setWishText((wishText) => wishText = " ")
    }
    const savetolocalstorage = () => {
        if (wishList.length > 0) {
            localStorage.setItem('wishList', JSON.stringify(wishList))
        }
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
            <button onClick={savetolocalstorage}>Saving wishlist to localstorage</button>
            <button>Save to Mirage</button>

        </div>
    )
}

export default Wishlist;