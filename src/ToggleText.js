import React, { useState } from 'react'

const ToggleText = () => {
    const [isVisible, setIsVisible] = useState(true)
    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide" : "Show"} Text
            </button>

            {isVisible && <p>This is the text</p>}
        </div>
    )
}

export default ToggleText