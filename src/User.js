import React from 'react'
import { useParams } from 'react-router-dom'
// useParams is used for dynamic routing
const User = () => {
    const { id } = useParams();
    return (
        <div>

            <h1>USERID:{id}</h1>

        </div>
    )
}

export default User