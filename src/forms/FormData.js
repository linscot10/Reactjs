import React, { useState } from 'react'

const FormData = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Name:${name} , Email:${email}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label >Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default FormData