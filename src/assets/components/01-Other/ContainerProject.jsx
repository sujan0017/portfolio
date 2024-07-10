import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ContainerProject({img, heading, description, gitLink}) {


  return ( 
  <div  className='flex justify-center items-center '>
    <div className='w-full h-full rounded-2xl drop-shadow-lg relative overflow-hidden '>
      <img src={img} alt="" className='w-full h-full bg-center bg-cover rounded-3xl  ' />
      <div className='w-full h-full bg-secondaryBlue bg-opacity-70 rounded-2xl drop-shadow-lg absolute top-0 right-0 transition-all ease-in-out duration-500  flex flex-col justify-center items-center gap-5 p-5 '>
        <h1 className='text-white font-bold text-center  sm:text-size-400 text-size-300 tracking-wide'>{heading}</h1>
        <p className='text-white text-center text-size-200 sm:text-size-300'>{description}</p>
        <Link to={gitLink}>
        <button className='border border-white md:p-2 md:px-6 px-2 py-1 rounded-sm flex items-center justify-center gap-4 group  hover:bg-white'>
          <p className='text-white group-hover:text-primaryBlue text-size-200 sm:text-size-300 font-semibold tracking-wide'>Visit my Code</p >
          <i className="fa-brands fa-github text-size-500  rounded-full text-white group-hover:text-primaryBlue "></i>
        </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default ContainerProject
