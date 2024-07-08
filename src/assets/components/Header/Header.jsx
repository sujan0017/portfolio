import React from 'react'
import { Link } from 'react-router-dom'
import LightButton from '../01-Other/LightButton'
import Logo from '../01-Other/Logo'



function Header() {
  return (
    <div className='flex justify-between items-center mx-auto py-8 px-24 '>
      <Logo />
      <nav className='flex gap-5 items-center'>
        <Link to="/" className='text-lg tracking-wide '>Home</Link>
        <Link to="/contact-me"><LightButton btnTitle="Say Hello"/></Link>

      </nav>

    </div>
  )
}

export default Header
