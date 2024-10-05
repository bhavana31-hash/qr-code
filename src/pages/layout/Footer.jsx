import React from 'react'

export default function Footer() {
  return (
    
    <div bgcolor='light' className='text-center text-lg-left footerDiv' >
      <div className='text-center p-3' style={{ backgroundColor: 'rgb(108 117 125)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </div>
  )
}
