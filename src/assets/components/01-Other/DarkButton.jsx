import React from 'react'

function DarkButton({btnTitle }) {
  return (
    
    <button className='text-lg  px-6 py-2 rounded-2xl drop-shadow-md tracking-wide bg-primaryBlue text-white border-2 border-inherit hover:border-2 hover:border-primaryBlue hover:text-primaryBlue hover:bg-inherit'>
    {btnTitle}</button>
  )
}

export default DarkButton
