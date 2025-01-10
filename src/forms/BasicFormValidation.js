import React, { useState } from 'react'

const BasicFormValidation = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            setError("Invalid Email address")
        } else {
            setError("");
            alert("Form Submitted Successfully")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BasicFormValidation