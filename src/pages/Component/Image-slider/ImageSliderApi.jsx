import React, { useEffect, useState } from 'react'
import "./style.css";


export default function ImageSliderApi() {

  let [imageList,setImageList] = useState([])
  let [currentSlide,setCurrentSlide] = useState(0)
  let [isLoading,setIsLoading] = useState(false)

  let getImages = () =>{
    try{
      setIsLoading(true)
      fetch("https://picsum.photos/v2/list?limit=10")
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data)
        setImageList(data)
        setIsLoading(false)
      })
    }
    catch(e){
      console.log('Error')
    }
    
  }

  function HandlePrevious(){
    setCurrentSlide(currentSlide === 0 ? imageList.length -1 : currentSlide - 1)
 }
 function HandleNext(){
  setCurrentSlide(currentSlide === imageList.length - 1 ? 0 : currentSlide + 1)
 }

  useEffect(()=>{
    getImages()
  },[])
  // console.log(imageList)
  
  return (
    <div>
      <h3>Image Slider using Api</h3>
      <div className='container'>
      {
                  isLoading ? <div>Data Is Laoding</div>

                  :
        
                  <>
              <div className='list' >
                  {
                    imageList.length > 0 ?
                    imageList.map((val,index)=>{
                      return(
                        <div className={index === currentSlide ? `img-active`: 'img-de-active'}>
                        <img src={val.download_url}  alt='Image' style={{maxWidth:"50%"}} /> 
                        </div>
                      )
                    })
                    : ""
                  }
                  </div>
                  <button onClick={HandlePrevious}>Prev</button>
                  <button onClick={HandleNext}>Next</button>
                  </>
            }
      
      </div>
    </div>
  )
}
