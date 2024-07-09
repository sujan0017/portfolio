import React from 'react'
import ContainerProject from '../01-Other/ContainerProject'
import Heading from '../01-Other/Heading'
import { projectContent } from '../../components/01-Other/Content'

function Projects() {
  return (
    <div className='flex flex-col justify-center items-center md:py-24 py-7 px-12'>
      <Heading title="My Recent Works" subTitle="Here are a few past projects I've worked on." />
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-7 md:gap-12 py-7'>
     {
      projectContent.map((value)=>{
        return (<ContainerProject />)
      })
     }

        
      </div>
    </div>
  )
}

export default Projects
