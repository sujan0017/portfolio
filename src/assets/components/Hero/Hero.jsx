import React from 'react'
import myImg from '../../images/me.png'
import Heading from '../01-Other/Heading'

function Hero() {
  return (
    <div className='w-full flex flex-col items-center lg:p-20 py-12 lg:gap-20 gap-10 p-7 '>
      <div className='flex flex-col md:gap-7 gap-4 items-center'>
        <h1 className='md:text-size-600 text-size-500 lg:text-size-800 font-bold tracing-wide text-center'>Front-end Developer</h1>
        <p className='tracking-wider text-center text-size-300 lg:text-size-400 '>Crafting seamless user experiences, one line of code at a time.</p> 
     </div>
      <div className='w-52 h-52 bg-primaryBlue rounded-full overflow-hidden self-center mx-auto drop-shadow-2xl '>
        <img src={myImg} alt="Image." className='bg-center bg-cover' />
      </div>
    </div>

  )
}

export default Hero
