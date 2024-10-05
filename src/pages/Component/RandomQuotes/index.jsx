import React, { useEffect, useState } from 'react'
import "./index.css"

export default function RandomQuotes({url,page=1,limit=5}) {
    let [quotes,setQuotes] = useState([])
    let [singleQuote, setSingleQuote] =  useState("")
    let [isActive, setIsActive] =  useState(false)

    let getQuotes =  async (getUrl) =>{
        try{
            fetch(getUrl)
            .then((res) => res.json() )
            .then((response) => {
                setQuotes(response.quotes);
                
            })
        }catch(e){
            console.log(e.message);
            
        }
    }
    useEffect(()=>{
        getQuotes(url)
    },[url])

    let HandleClickEvent = () =>{
        let randomQuote= Math.floor(Math.random() * quotes.length)
        let quote= quotes[randomQuote]
        setSingleQuote(quote)
        setIsActive(true)
    }

    let List = quotes.map((value,index)=>{
        return(
            <div className='info' key={index}>  
                {index+1}: 
                <q>{value.quote}e</q>
                <p className="author">- {value.author}</p>
            </div>
        )
    })
  return (
    <div className='container '>
        <h3 className=' text-center m-3 text-decoration-underline' >Random Quotes</h3>
        
        <div className="mySlides ">
            <button className='btn btn-outline-secondary m-3' onClick={()=>HandleClickEvent()}>Generate Random Quotes</button>
            {List}
        </div>

        <div id="myModal" className={isActive ? "modal show" : "modal hide"}>

            
            <div className="modal-content">
                <span className="close" onClick={()=>setIsActive(!isActive)}>&times;</span>
                <div></div>
                <q>{singleQuote.quote}e</q>
                <p className="author">- {singleQuote.author}</p>
            </div>

        </div>
        
    </div>



  )
}
