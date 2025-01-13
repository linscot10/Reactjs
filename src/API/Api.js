import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Api = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok)
                    throw new Error("Network Response was not okay");
                const result = await response.json();
                setData(result)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div>


        </div>
    )
}

export default Api