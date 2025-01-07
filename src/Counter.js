import React, { useState } from 'react'

const Counter = () => {

    const [count, setCounter] = useState(0);
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => setCounter(count + 1)}>Increment</button>
            <button onClick={() => setCounter(count - 1)}>decrement</button>

        </div>
    )
}

export default Counter