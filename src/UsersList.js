import React, { useEffect, useState } from 'react'

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false)
            }, [])
    })


    if (loading) {
        <p>Loading...</p>
    }
    return (
        <div>
            <ul>
            { users.map((user)=>(

                <li key={user.id} >{user.name}</li>
            ))
                
            }
            </ul>
        </div>
    )
}

export default UsersList