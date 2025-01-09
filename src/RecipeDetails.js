import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {

    const { id } = useParams()
    return (
        <div>
            <h1>Redipe Details:{id}</h1>
        </div>
    )
}

export default RecipeDetails