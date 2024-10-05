import React, { useState } from 'react'
import "./index.css"


export default function ArrayMethods() {
    let [input ,setInput] = useState('')
    let [array,setarray] = useState('')

    let arr = ["Banana", "Orange", "Apple", "Mango"]
    let handleLength = () =>{
        let length = arr.length
        setInput(length)
    }
    let handleToString = () =>{
        let string = arr.toString()
        setInput(string)
    }
    let handleAt = () =>{
        let string = arr.at(2)
        setInput(string)
    }
    let handleJoin = () =>{
        let string = arr.join(" * ")
        setInput(string)
    }
    let handlePop = () =>{
        let string = arr.pop()
        setInput(string)
        setarray(arr)
    }
    let handlePush = () =>{
        let string = arr.push("Kiwi")
        setInput(string)
        setarray(arr)
    }
    let handleShift = () =>{
        let string = arr.shift()
        setInput(string)
        setarray(arr)
    }
    let handleUnshift = () =>{
        let string = arr.unshift("Lemon")
        setInput(string)
        setarray(arr)
    }

    let handleDelete = () =>{
        delete arr[0]
        let string = arr[0]
        setInput(string)
        setarray(arr)
    }

    let handleConcat= () =>{
        const myBoys = ["Emil", "Tobias", "Linus"];
        // let string = arr.concat(myBoys)
        let string = arr.concat("myBoys") // Can also add string
        setInput(string)
        setarray(arr)
    }
    let handleFlat = () =>{
        let arr = [[0,1,2],[3,4,5],[6,7,8]]
        let data = arr.flat()
        setInput(data)
        setarray(arr)
    }
    let handleFlatMap = () =>{
        let arr = [0,1,2,3,4,5]
        let data = arr.flatMap((value) => value * 2)
        setInput(data)
        setarray(arr)
    }
    let handleSplice = () =>{
        let data = arr.splice(2,0,"Lemon", "Kiwi")
        setInput(data)
        setarray(arr)
    }
    let handleToSplice = () =>{
        let spliced = arr.toSpliced(0, 1);
        setInput(spliced)
        setarray(arr)
    }
    let handleSlice = () =>{
        let arr = [0,1,2,3,4,5]
        let data = arr.flatMap((value) => value * 2)
        setInput(data)
        setarray(arr)
    }




  return (
    <div className='container'>
        <h3 className=' text-center text-decoration-underline'>ArrayMethods</h3>
        
        <div className='row gap-lg-3'>
            <div className='Answer'>
                <p>Input is : {input}</p> 
                <p>Array is : {`${array}`}</p>
            </div>
            <div>
                <p>Array is {'["Banana", "Orange", "Apple", "Mango"]'} </p>
                
                <ul >
                    <a  onClick={handleLength} style={{cursor:"pointer"}}><li>Array length</li></a>
                    <a onClick={handleToString} style={{cursor:"pointer"}}><li>Array toString()</li></a>
                    <a onClick={handleAt} style={{cursor:"pointer"}}><li>Array at(2)</li></a>
                    <a onClick={handleJoin} style={{cursor:"pointer"}}><li>Array join("*")</li></a>
                    <a onClick={handlePop} style={{cursor:"pointer"}}><li>Array pop()</li></a>
                    <a onClick={handlePush} style={{cursor:"pointer"}}><li>Array push("Kiwi")</li></a>
                    <a onClick={handleShift} style={{cursor:"pointer"}}><li>Array shift()</li></a>
                    <a onClick={handleUnshift} style={{cursor:"pointer"}}><li>Array unshift("Lemon")</li></a>
                    <a onClick={handleDelete} style={{cursor:"pointer"}}><li>Array delete(0)</li></a>
                    <a onClick={handleConcat} style={{cursor:"pointer"}}><li>Array concat(myBoys)</li></a>
                    <a onClick={handleFlat} style={{cursor:"pointer"}}><li>Array flat()</li></a>
                    <a onClick={handleFlatMap} style={{cursor:"pointer"}}><li>Array FlatMap(x*2)</li></a>
                    <a onClick={handleSplice} style={{cursor:"pointer"}}><li>Array splice(2,0,"Lemon","Kiwi")</li></a>
                    <a onClick={handleToSplice} style={{cursor:"pointer"}}><li>Array toSpliced(0,1)</li></a>
                    <a onClick={handleSlice} style={{cursor:"pointer"}}><li>Array slice()</li></a>
                    
                </ul>
            </div>
            
        </div>
    </div>
  )
}
