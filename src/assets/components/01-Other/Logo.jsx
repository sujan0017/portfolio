import React from 'react'
import logoBlueImage from '../../images/logo.png'
import { Link } from 'react-router-dom'

function Logo({img = logoBlueImage}) {
  return (
    <>
    <Link to='/'>
      <div className='w-14 h-14'>
         <img src={img} alt="Logo." />
    </div>
    </Link>
    </>
   
  )
}

export default Logo
