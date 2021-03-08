import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(` From useEffect, Hello! Counter increment to ${count}`)
    })

    const incrementCount = () => {
        setCount((count) => count + 1);
    }
    return (
        <div>
            <h1>Counter {count}</h1>
            <button onClick={incrementCount}>run useeffect after every click</button>
        </div>
    )
}

export default Counter;