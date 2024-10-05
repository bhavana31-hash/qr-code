import React, { useState } from 'react'
import  "./todo.css" 
export default function ToDo() {
    let [input , setInput] = useState("")
    let [ToDoList,setToDoList] = useState([])

    let  handleClickEvent = (event)=> {
        event.preventDefault()
        
        if(input !== ""){
            if(!ToDoList.includes(input)){
                
                let newList = [...ToDoList, input]
                setToDoList(newList)
                setInput("")
            }
            else{
                console.log("Already");
            }
        }
    }

    let List = ToDoList.map((value,index)=>{
        let handleDeleteEvent = (DeleteIndex) =>{
            let newData = ToDoList.filter((v,i) => i != DeleteIndex)
            setToDoList(newData)
        }
        return(
            <>
            <li className='todo' key={index}> {value} <span key={index} className='crossBtn' onClick={()=>handleDeleteEvent(index)} >X</span></li>
            </>
        )
    })
    
  return (
    <div className='container '>
        <h3 className=' text-center m-3 text-decoration-underline'>To-Do List</h3>
        <form onSubmit={handleClickEvent}>
        <div className=' form-group'>
            <label className=' form-label'>To-Do:</label>
            <input type='text' name='input' placeholder='Type Something Here...' value={input} className=' form-control' onChange={(event)=>setInput(event.target.value)} />
            <button className='btn btn-outline-info m-2' >Create</button>
        </div>
        </form>
        <div className='list'>
            <ul>
                    {List}
            </ul>
        
        </div>
        
    </div>
  )
}
