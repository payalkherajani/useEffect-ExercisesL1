import { useState, useEffect } from 'react';

const useLocalStorage = (wishList) => {

    const [totalWishessaved, setTotalWishesSaved] = useState(-1);

    useEffect(() => {
        console.log('Gotcha,while setting state in useEffect')
        localStorage.setItem("wishes", JSON.stringify(wishList));
        setTotalWishesSaved((totalWishessaved) => totalWishessaved + 1)
    }, [wishList])

    return totalWishessaved;

}

export default useLocalStorage;