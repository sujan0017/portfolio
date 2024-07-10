import React from 'react'

function LightButton({btnTitle }) {
  return (
    
    <button className=' text-size-300 px-4 md:px-7 py-2 rounded-2xl drop-shadow-md tracking-wide border-2 border-primaryBlue text-primaryBlue hover:border-1 hover:border-inherit hover:bg-primaryBlue hover:text-white'>
    {btnTitle}</button>
  )
}

export default LightButton
