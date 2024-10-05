import React, { useState } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
// import { BsStarFill } from 'react-icons/bs'
import { FaStar } from 'react-icons/fa'
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function StarRating({ NoOfStar = 5 }) {
    let [rating, setRating] = useState(0)
    let [hover, setHover] = useState(0)

    function HandleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }
    function HandleMouseMOve(getCurrentIndex) {
        setHover(getCurrentIndex)
    }
    function HandleMouseLeave() {
        setHover(hover)
    }
    if(rating != 0)
    console.log( "Reating is set to "+rating)

    // Bucket Tranfer Code
    let [firstBucket, setFirstBucket] = useState(10)
    let [secondBucket, setSecondBucket] = useState(0)

    let handleRight = () =>{
        if(firstBucket > 0){
            let currentFirst = firstBucket - 1
            setFirstBucket(currentFirst)
            let currentSecond = secondBucket + 1
            setSecondBucket(currentSecond)
        }
    }
    let handleLeft = () =>{
        if(secondBucket > 0){
            let currentFirst = firstBucket + 1
            setFirstBucket(currentFirst)
            let currentSecond = secondBucket - 1
            setSecondBucket(currentSecond)
        }
    }



    return (
        <>
            <div className='container'>
                <h3 className='App p-3 text-decoration-underline'> Star-Rating</h3>
                <div className='row'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-7'>
                        {
                            [...Array(NoOfStar)].map((_, index) => {
                                index += 1 ;
                                return (
                                    <FaStar
                                    className={index <= (hover || rating) ? "star-active" : "star-in-active"}
                                    key={index} 
                                    size={40} 
                                    onClick={() => HandleClick(index)} 
                                    onMouseMove={() => HandleMouseMOve(index)} 
                                    onMouseLeave={() => HandleMouseLeave()} 
                                    />
                                )
                            })
                        }


                    </div>
                    <div className='col-lg-2'></div>
                </div>

                <hr />
                <h3 className='App p-3 text-decoration-underline'> Bucket Transfer</h3>
                <div className='buckets' >
                    <div className='basket1'>
                        <h3><span>{firstBucket}</span> Apples</h3>
                        <p>Basket 1</p>
                        <button className='btnArrow' onClick={handleRight}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                    <div className='basket2'>
                    <h3><span>{secondBucket}</span> Apples</h3>
                    <p>Basket 2</p>
                    <button className='btnArrow' onClick={handleLeft}>
                            <FontAwesomeIcon icon={faArrowLeft}  />
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}
