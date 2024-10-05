import { faMinusSquare, faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useReducer, useState } from 'react'

export default function ColorPicker() {
    let [color,setColor] = useState("#000")
    let HandleChange = (e) =>{
        setColor(e.target.value)
    }

    function reducer(state,action){
        switch(action.type){
            case "INCREMENT" : 
                return {count : state.count++  }
            case "DECREMENT" : 
                return {count : state.count--  }
            case "RESET" : 
                return {count :0 }
            default:
                return state;
        }
    }
    let [state, dispatch] = useReducer(reducer,{count:0})    

  return (
    <div className='container'>
        <h3>Color-Picker</h3>
        <label>Change color: </label>
        <input type='color' onChange={HandleChange} />

        <div className='row' style={{width:"100px",height:"100px", backgroundColor:color}}>

        </div>


        <hr />
        <h3>Counter App Using Reducer</h3>
        <div>
            <p>Count:  {state.count}</p>

            <button onClick={()=>dispatch({type:"INCREMENT"})} style={{width:"30px"}}>+</button> {"  "}
            <button onClick={()=>dispatch({type:"DECREMENT"})} style={{width:"30px"}} >-</button> {"  "}
            <button onClick={()=>dispatch({type:"RESET"})}>Reset</button> {"  "}

        </div>
    </div>
  )
}
