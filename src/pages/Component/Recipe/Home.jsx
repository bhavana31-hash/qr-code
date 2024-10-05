import { faClock, faComment, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Tags from './Tags'
import loader from "../../../images/loader.gif";



export default function Home() {
    let [isLoading,setIsloading] = useState(false)
    let [recipies, setRecipies] = useState([])
    let [tags, setTags] = useState([])
    let [tagName,setTagName] = useState("")
    

    let getRecipies= async () =>{
        setIsloading(true)
        const res = await fetch('https://dummyjson.com/recipes')
        const data = await res.json();
        // console.log(data.recipes)
        setRecipies(data.recipes)
        setIsloading(false)
    }

    let getTags= async () =>{
        const res = await fetch('https://dummyjson.com/recipes/tags')
        const data = await res.json();
        setTags(data)
    }

    useEffect(() => {
        getRecipies()
        getTags()
    },[])

    let getRecepiByTag = async (tagName) =>{
        setIsloading(true)
        const res =await fetch(`https://dummyjson.com/recipes/tag/${tagName}`)
        const data = await res.json();
        setRecipies(data.recipes)
        setIsloading(false)
    }

    useEffect( () => {
        if(tagName == "all"){
            getRecipies()
        }else
        if(tagName != ""){
            getRecepiByTag(tagName)
            
        }
    },[tagName])



  return (
    <>
    <div className='container'>
        <SearchForm setRecipies={setRecipies} />
        {
            isLoading ? 
        
            <div className='loader position-relative'>
                <img src={loader} className={ isLoading ? 'displayTrue' : 'displayFalse'} />
            </div>
            : ""
            }
        <h3 className='App' style={{margin:"10px",textDecoration: "underline"}}>Recepies</h3>
        <div className='row'>
            <div className='col-lg-3'>
            <Tags  tags={tags} setTagName={setTagName}  />
            </div>
            <div className='col-lg-9'>
                <ul className="block-list">
                    {
                        recipies && recipies.length > 0 && (
                    
                        <RecipeList recipes={recipies} />
                    )}
                    
                </ul>
            </div>

        </div>
        
        
        
    </div>
    </>
  )
}

function RecipeList({recipes}){
    let list = recipes.map((value,index) => {
        return(
            <li className="block-list__item recipe--small" key={index}>
                    <div className="recipe__like--small"><FontAwesomeIcon icon={faHeart} /><div className="recipe__likes-num--small">{value.rating}</div></div>
                    <div className="recipe__opts--small"><i className="fa fa-ellipsis-v"></i></div>
                    <a href={`recipe/deatil/${value.id}`} className="recipe__img--small">
                        <img src={value.image} />
                    </a>
                    <div className="recipe__title--small">
                        <h3>{value.name}</h3>
                        <ul className="ingredients-list--small">
                        <li className="ingredients-list__header">Tags:</li>
                        <RecipeIngredient ingredient={value.tags} />
                        </ul>
                    </div>
                    <div className="recipe__info--small">
                        <time className="recipe__info__time">
                            <FontAwesomeIcon icon={faClock} />  {value.cookTimeMinutes + value.prepTimeMinutes}min</time>
                        <div className="recipe__info__serves"><FontAwesomeIcon icon={faUsers} />  4</div>
                        <div className="recipe__info__comments"><FontAwesomeIcon icon={faComment} />  {value.reviewCount}</div>
                    </div>
                </li>
        )
    })

    return(
        <>{list}</>
    )
   
}


function RecipeIngredient({ingredient}){    
    let list = ingredient.slice(0,2).map((value,index)=>{       
        return(            
            <li className="ingredient--small" key={index}> {value}</li>  
        )
    })
    return(
        <>{list}</>
    )
}

function SearchForm({setRecipies}){
    let [input,setInput] = useState('')
  
    let HandleSubmit = (event) =>{
        event.preventDefault()
        let response = fetch(`https://dummyjson.com/recipes/search?q=${input}&limit=0`)
        .then((response)=> response.json())
        .then((data) =>{
            setRecipies(data.recipes)
        })
    }

  useEffect(()=>{
    
  },[])
      return (
        <>
            <form onSubmit={HandleSubmit}>
                <input type='text' className='inputSearch' onChange={(e)=>setInput(e.target.value)}/>
                <button type='submit' className='btnSearch'><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </>
      )
}