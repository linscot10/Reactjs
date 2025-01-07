import React, { useEffect, useState } from 'react'

const Logger = () => {

    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log("Component Rendered")
    }, []);

    return (
        <div>
            <input
                type='text'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <p>You typed:{message}</p>
        </div>
    )
}

export default Logger