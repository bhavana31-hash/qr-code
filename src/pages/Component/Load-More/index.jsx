import React, { useEffect, useState } from 'react'
import loader from "../../../images/loader.gif"
import "./style.css"


export default function LoadMore() {

    let [products, setProducts] = useState([])
    let [isLoading, setIsLoading] = useState(false)
    let [count,setCount] = useState(0)
    let [isDisable,setIsDisable] = useState(false)

    async function getProducts(){
        setIsLoading(true)
         let response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? '0' : count*20}`)
         let data = await response.json()
         setProducts((prevData)=>[...prevData,...data.products])
         setIsLoading(false)
    }
    useEffect(()=>{
        getProducts()
        
    },[count])

    // console.log(products.length)
   
    

  return (
    <div className='container '>
        <h3 className=' text-center text-decoration-underline'>Load More Button</h3>
        <div className='loader position-relative'>
                <img src={loader} className={ isLoading ? 'displayTrue' : 'displayFalse'} />
            </div>
            <div className='products-content'>
                {
                    products.map((value,index)=>{
                        return(
                            <div className='products m-2' key={index}>
                                <img src={value.thumbnail}  />
                                <p className='pTitle'>{value.title}</p>
                            </div>
                        )
                    })
                }
                
                
            </div>
            <button  onClick={()=>setCount(count+1)} className='btn btn-outline-secondary m-3 loadButton'>Load More</button>
            {
                isDisable ? <div>You've reached the limit of 194 products.</div> : ""
            }
        
    </div>
  )
}
