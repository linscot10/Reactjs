import React, { useRef } from 'react'

const UncontrolledFormData = () => {

    const nameRef = useRef();
    const emailRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`name:${nameRef.current.value} , email:${emailRef.current.value}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Name:
                    <input type="text" ref={nameRef} />
                </label>
                <br />
                <label >Email:
                    <input type="email" ref={emailRef} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledFormData