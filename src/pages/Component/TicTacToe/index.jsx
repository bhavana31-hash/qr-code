import React, { useEffect, useState } from 'react'
import './index.css'


export default function TicTacToe() {

    let [squares, setSquares] = useState(Array(9).fill(''))
    let [isXTurn ,setIsXTurn] = useState(true)
    let [status,setStatus] =  useState('')

    let HandleClick = (currentSQuare) =>{
        let copySQuare = [...squares]
        if(getWinner(copySQuare) || copySQuare[currentSQuare]) return ;

        copySQuare[currentSQuare] = isXTurn ? 'X' : 'O'
        setIsXTurn(!isXTurn)
        setSquares(copySQuare)
    }

    let getWinner = (squares) =>{
        let patterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]

        ];

        for(let i=0; i < patterns.length ; i++){
            let [x,y,z] =  patterns[i];

            if(squares[x] && squares[x] === squares[y] && squares[x] === squares[z]){
                return squares[x]
            }
        }
        return null
    }


    useEffect(()=>{
        if(!getWinner(squares) && squares.every((item) => item != '')){
            setStatus('This is draw. Please restart the game.')
        } else if(getWinner(squares)){
            setStatus(`Winner is ${getWinner(squares)}. `)
        }else{
            setStatus(`Next player is ${isXTurn ? 'X' : 'O'}.`)
        }
    },[squares,isXTurn])

    let handleReset = () =>{
        setIsXTurn(true)
        setSquares(Array(9).fill(''))
    }
  return (
    <div className='tic-tac-container'>
        <h3 className=' text-center'>Tic-Tac-Toe Game</h3>
        <div className='row'>
            <button className='square' onClick={()=>HandleClick(0)}>{squares[0]}</button>
            <button className='square' onClick={()=>HandleClick(1)}>{squares[1]}</button>
            <button className='square' onClick={()=>HandleClick(2)}>{squares[2]}</button>
        </div>
        <div className='row'>
            <button className='square' onClick={()=>HandleClick(3)}>{squares[3]}</button>
            <button className='square' onClick={()=>HandleClick(4)}>{squares[4]}</button>
            <button className='square' onClick={()=>HandleClick(5)}>{squares[5]}</button>
        </div>
        <div className='row'>
            <button className='square' onClick={()=>HandleClick(6)}>{squares[6]}</button>
            <button className='square' onClick={()=>HandleClick(7)}>{squares[7]}</button>
            <button className='square' onClick={()=>HandleClick(8)}>{squares[8]}</button>
        </div>

        <p>{status}</p>
        <button className='btn btn-secondary' onClick={handleReset}>Restart</button>
    </div>
  )
}
