import React, { useState } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

export default function ChangeBGColor() {
    let [bgColor, setBgColor] = useState("secondary")
    let HandleClickEvent = (color)=> {
        setBgColor(color)
    }
  return (
    <>
        <Header BackGroundColor={bgColor}/>
            <div className='container'>
                <h3 className='text-center m-3 text-decoration-underline'>Change Back-Ground Color</h3>

                <button className='btn btn-outline-success' onClick={()=>HandleClickEvent("success")}>Change To Success</button> {" "}
                <button className='btn btn-outline-danger' onClick={()=>HandleClickEvent("danger")}>Change To Danger</button>{" "}
                <button className='btn btn-outline-default' onClick={()=>HandleClickEvent("default")}>Change To Default</button>{" "}
                <button className='btn btn-outline-primary' onClick={()=>HandleClickEvent("primary")}>Change To Primary</button>{" "}
                <button className='btn btn-outline-warning' onClick={()=>HandleClickEvent("warning")}>Change To Warning</button>{" "}
                <button className='btn btn-outline-secondary' onClick={()=>HandleClickEvent("secondary")}>Change To Secondary</button>{" "}
                <button className='btn btn-outline-info' onClick={()=>HandleClickEvent("info")}>Change To Info</button>{" "}
                <button type="button" className="btn btn-outline-dark" onClick={()=>HandleClickEvent("dark")}>Dark</button>{" "}
                <button type="button" className="btn btn-outline-light " style={{color:"black"}} onClick={()=>HandleClickEvent("light")}>Light</button>{" "}
            </div>
        <Footer />
    </>
  )
}
