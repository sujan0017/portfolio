import React from 'react'
import { Link } from 'react-router-dom'
import LightButton from '../01-Other/LightButton'
import Logo from '../01-Other/Logo'



function Header() {
  return (
    <div className='flex justify-between items-cente p-7 mx-auto lg:py-10 lg:px-20 '>
      <Logo />
      <nav className='flex gap-5 items-center'>
        <Link to="/" className=' tracking-wide text-size-300 '>Home</Link>
        <Link to="/contact-me"><LightButton btnTitle="Say Hello"/></Link>
      </nav>

    </div>
  )
}

export default Header
