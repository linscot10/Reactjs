import React from 'react'
import { Link } from 'react-router-dom'

const Recipes = () => {

    const recipes = [
        {
            id: 1,
            name: "mchele"
        }
        ,
        {
            id: 2,
            name: "chiken Curry"
        }
    ]
    return (
        <div>
            <h1>Recipe Page</h1>

            <ul>
                {
                    recipes.map((recipe) => (
                        <li key={recipe.id}><Link to={`/recipeDetails/${recipe.id}`}>{recipe.name}</Link></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Recipes