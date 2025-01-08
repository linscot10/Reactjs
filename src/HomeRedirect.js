import React from 'react'
import { Navigate } from 'react-router-dom'



const HomeRedirect = () => {
    return (
        <div>
            <Navigate to="/" />
        </div>
    )
}

export default HomeRedirect