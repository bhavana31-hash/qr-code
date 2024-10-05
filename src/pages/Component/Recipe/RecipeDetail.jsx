import React, { useEffect, useState } from 'react'
import "./Detail.css"
import { Link, useParams } from 'react-router-dom'

export default function RecipeDetail() {

    let [Recipe , setRecipe] = useState([])
    let recipeId = useParams()
    recipeId = recipeId.id
    // console.log(recipeId.id);

    let getRecipeDetail = async (id) =>{
        let res = await fetch(`https://dummyjson.com/recipes/${id}`)
        let data = await res.json()
        setRecipe(data)
    }
    useEffect(()=>{
        if(recipeId != '' || recipeId != undefined){
            getRecipeDetail(recipeId)
        }
    },[recipeId])
    
  return (
    <>
    
    <div className='main'>
        <Link  to='/'>Back To Recipies</Link>
        <div>
            <img src={Recipe.image} alt="omelette" />
        </div>
        <section>
            <div>
            <h1>{Recipe.name}</h1>
            <p> {Recipe.description}</p>
            </div>
            <div className="preparation-time">
            <h2>Preparation time</h2>
            <ul>
                <li><span>Total: </span>Approximately {Recipe.cookTimeMinutes + Recipe.prepTimeMinutes} minutes</li>
                <li><span>Preparation: </span>{Recipe.prepTimeMinutes} minutes</li>
                <li><span>Cooking: </span>{Recipe.cookTimeMinutes} minutes</li>
            </ul>
            </div>
        </section>
        <section>
            <h2>Ingredients</h2>
            <RecipeIngredient ingredient={Recipe.ingredients} />            
        </section>

        <hr />

        <section>
            <h2>Instructions</h2>
            <RecipeInstruction instructions={Recipe.instructions}  />            
        </section>

        <hr />

        <section>
            <h2>Nutrition</h2>
            <p>The table below shows nutritional values per serving without the additional fillings.</p>
            <table>
            <tr>
                <th>Calories</th>
                <td>{Recipe.caloriesPerServing}kcal</td>
            </tr>
            </table>
        </section>
        </div>
    </>
  )
}


function RecipeIngredient({ingredient}){  
    // console.log(ingredient) 
    if(ingredient != undefined ) {
        let list = ingredient.map((value,index)=>{       
            return(
                <li key={index}>{value}</li>            
            )
        })
        return(
            <ul> {list} </ul>
        )
}

} 

function RecipeInstruction({instructions}){   

    if(instructions != undefined ) {
        let list = instructions.map((value,index)=>{       
            return(
                <li key={index}>{value}</li>        
            )
        })
        return(
            <ol> {list} </ol>
        )
    }
} 