import React from 'react'

export default function UserProfile({userDetail,setIsLoggedIn}) {

    let HandleLogout = () =>{
        let user = localStorage.getItem('user')
        let loggedInUser = JSON.parse(user)
        loggedInUser.loggedIn = false
        localStorage.setItem('user',JSON.stringify(loggedInUser))
        setIsLoggedIn(false)
    }
    
  return (
    <div className='container'>
        <h4>Welcome {userDetail.username} </h4>
        <p>Your email address is {userDetail.email} and Phone number is {userDetail.phone}</p>
        <button className='btn btn-primary' onClick={HandleLogout}>Logout</button>
    </div>
  )
}
