import React, { useEffect, useState } from 'react'
import "./index.css" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faLock, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import UserProfile from './userProfile'


export default function LoginRegister() {

    let [isActive, setIsActive] = useState("active")
    let [input , setInput] = useState({username: "",email : "",phone: "",password:"",loggedIn:false})
    let [inputLogin , setInputLogin] = useState({username: "",password:""})
    let [text, setText] = useState('password');
    let [isLoggedIn , setIsLoggedIn] = useState(false)
    let [user ,setUser  ] = useState({})

    let loginClick = () =>{
        setIsActive("")
    }
    let RegisterClick = () =>{
        setIsActive(" active") 
    }

    let HandleChange = (event) =>{
        let inputName = event.target.name
        let inputValue = event.target.value

        setInput({...input, [inputName]:inputValue})
    }

    let HandleLoginChange = (event) =>{
        let inputName = event.target.name
        let inputValue = event.target.value
        setInputLogin({...inputLogin, [inputName]:inputValue})
    }

    let HandleSubmitRegister = (event)=>{
        event.preventDefault()
        console.log(input.email)
        if(input.email !== "" && input.username !== "" && input.password !== ""){
            localStorage.setItem("user",JSON.stringify(input))
            alert("Registered succesfully.")
            
        }
        setInput({username: "",email : "",phone: "",password:"",loggedIn:false})
    }
    
    let HandleSubmitLogin = (event) =>{
        event.preventDefault()
        let user = localStorage.getItem('user')
        let loggedInUser = JSON.parse(user)
        if(user){
            if((loggedInUser.password ===  inputLogin.password) && (loggedInUser.username ===  inputLogin.username)){
                alert("Loggedin succesfully.")
                let userData = JSON.parse(user)
                userData.loggedIn = true
                localStorage.setItem('user',JSON.stringify(userData))
                setUser(loggedInUser)
                setIsLoggedIn(true)
    
            }else{
                alert("wrong credential")
            }
        }else{
            alert("not registered")
        }
    }

    let HandlePasswordInput = () =>{
        if(text === "password"){
            setText("text")
        }else{
            setText("password")
        }
        
    }

    useEffect(()=>{
        let userDetail = localStorage.getItem('user')
        let userData = JSON.parse(userDetail)
        
        if((userData && userData !== "") && userData.loggedIn){
            // console.log("loggedinfalse");
            userData.loggedIn = true
            setUser(JSON.parse(userDetail))
            setIsLoggedIn(true)
        }else{
            console.log("user not found or not logged in");
        }
    },[])
    
  return (
    <>
    { isLoggedIn ? 
        <UserProfile userDetail={user} setIsLoggedIn={setIsLoggedIn} />
        :
    <div className={`wrapper ${isActive} `}>
        <div className='form-box register'>
            <form onSubmit={HandleSubmitRegister} >
            <h3 className=' text-center m-3'>Register</h3>
                <div className="input-box">
                    <input type="text"  name='username' value={input.username  || ""} onChange={HandleChange} placeholder='Username' /> <FontAwesomeIcon icon={faUser} className='icon' />
                </div>
                <div className="input-box">
                    <input type={text} onChange={HandleChange} value={input.password  || ""} name='password' placeholder='Password' /><FontAwesomeIcon onClick={HandlePasswordInput} icon={faLock} className='icon' style={{cursor:"pointer"}} />
                </div>
                <div className="input-box">
                    <input type="email" onChange={HandleChange} value={input.email  || ""} name='email' placeholder='Email' /> <FontAwesomeIcon icon={faEnvelope} className='icon' />
                </div>
                <div className="input-box">
                    <input type="number" onChange={HandleChange}  value={input.phone  || ""} name='phone' placeholder='Phone' /><FontAwesomeIcon icon={faPhone} className='icon' />
                </div>
                <input type="submit" value="Submit"  className='btnForm'/>
                
                <div className='register-link'>
                    <p>Already Have An Account ? <a href='#' onClick={loginClick}>Login</a></p>
                </div>
            </form>

        </div>
        <div className='form-box login'>
            <form onSubmit={HandleSubmitLogin} >
            <h3 className=' text-center m-3'>Login</h3>
                <div className="input-box">
                    <input type="text"  name='username' onChange={HandleLoginChange} placeholder='Username'/> <FontAwesomeIcon icon={faUser} className='icon' />
                </div>
                <div className="input-box">
                    <input type={text}  name='password' onChange={HandleLoginChange} placeholder='Password' /><FontAwesomeIcon icon={faLock} className='icon' style={{cursor:"pointer"}} onClick={HandlePasswordInput} />
                </div>
                <input type="submit" value="Submit"  className='btnForm'/>
                <div className='remember'>
                    <label className='label-remember'><input type="checkbox"  name="remember" /> Remember me </label>
                    <a href="#">Forget Password</a>
                </div>
                <div className='register-link'>
                    <p>Dont Have An Account ? <a href='#' onClick={RegisterClick}>Register</a></p>
                </div>
            </form>

        </div>
        
    </div>
        
    }
    </>
  )
}
