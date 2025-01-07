import React from 'react'

const Profile = ({ image, name, about }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "8px" }}>
            <img src={image} alt={`${name}'s profile`} style={{ width: "100px", borderRadius: "50%" }}  />
            <h2>{name}</h2>
            <p>{about}</p>
        </div>
    )
}

export default Profile