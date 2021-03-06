import React, { useState, useEffect } from 'react'
import useDocumentTitle from './DTHook';

const Counter = () => {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);  //Custom Hook
    useEffect(() => {
        console.log(` From useEffect, Hello! Counter increment to ${count}`)
    })
    useEffect(() => {
        console.log(`I print only once i.e after first render ${count}`)
    }, [])

    const incrementCount = () => {
        setCount((count) => count + 1);
    }
    return (
        <div>
            <h6>Counter {count}</h6>
            <button onClick={incrementCount}>run useeffect after every click</button>
            <button onClick={incrementCount}>Counter prints once after initial render</button>
        </div>
    )
}

export default Counter;