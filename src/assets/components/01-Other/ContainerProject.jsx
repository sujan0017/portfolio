import React, { useState } from 'react'
import projectImage from '../../images/img2.jpg'

function ContainerProject() {
  const [expand, setExpand] = useState(false);

  const setMouseEnter = () => {
    console.log('hello eorld')

    // hover:scale-105 cursor-pointer 
  }


  return ( 
  <div onMouseEnter={setMouseEnter} className='flex justify-center items-center '>
    <div className='w-full h-full rounded-2xl drop-shadow-lg relative   '>
      <img src={projectImage} alt="" className='w-full h-full bg-center bg-cover rounded-3xl transition duration-500  ' />
      <div className='w-full h-full bg-black rounded-2xl drop-shadow-lg absolute top-0 right-0 hidden   '>
        <h1 className='text-white'>Project Heading</h1>
        <p className='text-white'>Project ingfo or a paragraph</p>
      </div>
    </div>
  </div>
  )
}

export default ContainerProject
