import React, { useEffect, useState } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import './Faq.css'
import { questions } from '../../../Data/faq'

export default function Faq() {
    let [ToDo , setToDo]= useState(null)
    let [enableMultiSelect, setEnableMultiSelect] =  useState(false)
    let [multiple, setMultiple] =  useState([])

    let singleSelection = (currentId) =>{
        setToDo(currentId === ToDo ? null : currentId)    
    }

    let multiSelection = (currentId) => {
        let copyMulti = [...multiple]
        let findIndex = copyMulti.indexOf(currentId)
        if(findIndex === -1) 
            copyMulti.push(currentId)
        else
            copyMulti.splice(findIndex,1)

        setMultiple(copyMulti)
            
    }
    if(enableMultiSelect) {       
    }else if(multiple.length > 0){ 
        setMultiple([])
    }  
    
  return (
    <>
        <Header />
            <div className='container'>
                <h3 className='App p-3 text-decoration-underline'> To Do List</h3>

                <button onClick={()=>setEnableMultiSelect(!enableMultiSelect)} className='btn btn-primary'>Enable Multiple Selection</button>
                {
                    questions.map((value,index)=>{
                        return(
                            <div className='todo' key={index}>
                                <h4 onClick={enableMultiSelect ? ()=>multiSelection(value.id) : ()=>singleSelection(value.id)} className='question'>{value.question} 
                                <span >+</span></h4> 
                                {
                                    ToDo === value.id || multiple.indexOf(value.id) !== -1 ?
                                    ( <p className='answer' >
                                    {value.answer}
                                    </p>) : ""
                                }
                                    
                            </div>
                        )
                    })
                }
                
            </div>
        <Footer />
    </>
  )
}


