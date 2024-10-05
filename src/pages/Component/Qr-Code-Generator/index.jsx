import React, { useState,useEffect } from 'react'
import QRCode from 'react-qr-code'

export default function QrcodeGenerator() {
    let [qrcode , setQrcode] = useState("King Legend")
    let [input, setInput] = useState("")

    function handleClick(){
        setQrcode(input)
        setInput("")
    }
    useEffect(()=>{

    },[])
  return (
    <div className='container m-4'>
        <div> 
        {/* <input type='text' value={input} onChange={(event)=>setInput(event.target.value)} name='qr-code' placeholder='Type Here' />
        <button onClick={()=>handleClick()} className='btn btn-outline-info'>Generate</button> */}
        </div>
        <div style={{ background: 'white', padding: '16px' }}>
            <QRCode 
                size={50}
                style={{ height: "auto", maxWidth: "20%", width: "50%" }}
                value="+91-9111111519"
                viewBox={`0 0 256 256`} 
                level={'H'}
            />
        </div>
        <a >Download QR Code</a>
    </div>
  )
}



function QrData(){
    return(
        <>
            <h2>King Legend</h2>
            <h4>Vaishnavi Trading Company</h4>
            <table class="table table-bordered table-sm">
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}