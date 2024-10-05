import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Tags({tags,setTagName}) {    
    let tagsDiv = tags.map((value,index)=>{
        return(
            <li style={{cursor:'pointer'}} onClick={()=>setTagName(value)} key={index}>{value}</li>
        )
    })
    
  return (
    <>
    <div className="side-nav-categories">
            <div className="title"><strong><span><FontAwesomeIcon icon={faBars} />{" "}</span>Tags</strong></div>
            <ul id="category-tabs">
                <li>
                    
                    <ul className="sub-category-tabs">
                        <li style={{cursor:'pointer'}} onClick={()=>setTagName("all")}>All</li>
                        {tagsDiv}
                    </ul>
                </li>
            </ul>
            
        </div>
    </>
  )
}
