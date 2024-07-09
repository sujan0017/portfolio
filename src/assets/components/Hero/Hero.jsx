import React from 'react'
import myImg from '../../images/me.png'
import Heading from '../01-Other/Heading'

function Hero() {
  return (
    <div className='w-full flex flex-col items-center lg:p-20 py-12 lg:gap-20 gap-10 p-7 '>
      <Heading title='Front-end Developer' subTitle='Crafting seamless user experiences, one line of code at a time.' fontSize='text-6xl'  />
      <div className='w-52 h-52 bg-primaryBlue rounded-full overflow-hidden self-center mx-auto drop-shadow-2xl '>
        <img src={myImg} alt="Image." className='bg-center bg-cover' />
      </div>
    </div>

  )
}

export default Hero
