import React, { useState, useEffect } from 'react'

const Wishlist = () => {
    const [wishText, setWishText] = useState("");
    const [wishList, setWishList] = useState([]);

    const savetoWishList = () => {
        console.log(wishText);
    }
    return (
        <div>
            <input type="text" placeholder="I wish ..." onChange={(e) => setWishText((wishText) => setWishText(e.target.value))} />
            <button onClick={savetoWishList}>Add</button>
        </div>
    )
}

export default Wishlist;