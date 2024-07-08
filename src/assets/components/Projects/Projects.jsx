import React from 'react'
import ContainerProject from '../01-Other/ContainerProject'
import Heading from '../01-Other/Heading'
// import cardData from '../../components/01-Other/Content'

function Projects() {
  return (
    <div className='flex flex-col justify-center items-center py-24'>
      <Heading title="My Recent Works" subTitle="Here are a few past projects I've worked on." />
      <div className=' px-24 grid grid-cols-3 gap-12 mt-20'>
        <ContainerProject />
        {/* <ContainerProject />
        <ContainerProject />
        <ContainerProject />
        <ContainerProject />
        <ContainerProject /> */}
    {/* 
      <div className='flex justify-center items-center '>
        {
          cardData.map((id, img, heading, description) => {
            return (
              <div key={id} className='w-full h-full rounded-2xl drop-shadow-lg border-2'>
                <img src={img} alt="" className='w-full h-full bg-center bg-cover rounded-3xl' />
              </div>
            );
          })
        }
      </div> 
      */}

        
      </div>
    </div>
  )
}

export default Projects
