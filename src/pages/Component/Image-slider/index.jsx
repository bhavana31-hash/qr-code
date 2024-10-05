import React, { useEffect, useState } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import "./style.css"
import loader from "../../../images/loader.gif"
export default function ImageSlider({page=1, limit=10,url}) {
    let [images, setImages] = useState([])
    let [isLoading, setIsLoading] = useState(false)
    let [currentSlide, setCrrentSlide] = useState(0)


    async function getImages(getUrl){
        setIsLoading(true)
        let response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
        let data = await response.json()
        setImages(data)
        setIsLoading(false)
    }

     function HandlePrevious(){
        setCrrentSlide(currentSlide === 0 ? images.length -1 : currentSlide - 1)
     }
     function HandleNext(){
        setCrrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
     }

    useEffect(() =>{
        if(url != "")
            getImages(url)
    },[url])
    // console.log(images)
   
  return (
    <>
    
        <Header />
            <div className='loader position-relative'>
                <img src={loader} className={ isLoading ? 'displayTrue' : 'displayFalse'} />
            </div>
            <h3 className='App p-3 text-decoration-underline'> Image-Slider</h3>
            <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={()=> HandlePrevious()} />
            <FaArrowAltCircleRight className='right-arrow' onClick={()=>HandleNext()} /> 
            {   
                images && images.length > 0 ?
                images.map((value,index)=>{
                    return(
                        <div  className={index === currentSlide ? 'slide active' : 'slide'}> 
                        <img className='image' src={value.download_url} alt={value.author}  key={index} />
                        </div>
                    ) 
                })

                : ""
            }
            {/* <FaArrowAltCircleRight onClick={()=>HandleNext()} className='arrow arrow-right' size={30} /> */}
            </section>
            
        <Footer />

    </ >
  )
}
