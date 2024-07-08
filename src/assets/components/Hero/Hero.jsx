import React from 'react'
import myImg from '../../images/me.png'
import Heading from '../01-Other/Heading'

function Hero() {
  return (
    <div className='flex flex-col items-center py-28 gap-20 '>
      <Heading title='Front-end Developer' subTitle='Crafting seamless user experiences, one line of code at a time.' fontSize='text-6xl'  />
      <div className='w-52 h-52 bg-primaryBlue rounded-full overflow-hidden self-center mx-auto drop-shadow-2xl '>
        <img src={myImg} alt="Image." className='bg-center bg-cover' />
      </div>
    </div>

  )
}

export default Hero
