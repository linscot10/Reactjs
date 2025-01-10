import React, { useContext } from 'react'
import { ThemeContext } from './ToggleTheme';


const ConsumeTheme = () => {
    const [theme, toggleTheme] = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
            <h1>Current Theme:{theme}</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default ConsumeTheme