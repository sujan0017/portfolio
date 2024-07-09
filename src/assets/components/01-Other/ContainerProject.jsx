import React, { useState } from 'react'
import projectImage from '../../images/img2.jpg'
import { Link } from 'react-router-dom'

function ContainerProject() {


  return ( 
  <div  className='flex justify-center items-center '>
    <div className='w-full h-full rounded-2xl drop-shadow-lg relative group  overflow-hidden '>
      <img src={projectImage} alt="" className='w-full h-full bg-center bg-cover rounded-3xl  ' />
      <div className='w-full h-full bg-secondaryBlue bg-opacity-50 rounded-2xl drop-shadow-lg absolute top-[-100%] right-0 group-hover:top-0 transition-all ease-in-out duration-500  flex flex-col justify-center items-center gap-5 p-5 '>
        <h1 className='text-white font-bold text-3xl text-center'>Project Heading</h1>
        <p className='text-white text-center'>Project ingfo or a paragraph Project ingfo or a paragraph</p>
        <Link to='https://github.com/sujan0017'>
            <div className=' hover:bg-white hover:bg-opacity-25 w-14 h-14 rounded-full p-2 flex justify-center items-center  '>
              <i className="fa-brands fa-github text-4xl p-1 rounded-full text-white "></i>
            </div>
          </Link>
      </div>
    </div>
  </div>
  )
}

export default ContainerProject
