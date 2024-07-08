import React from 'react'
import DevTools from '../01-Other/DevTools'
import AboutMe from './AboutMe'
import  { skillsContent }  from '../01-Other/Content'

function Skills() {
 
  return (
    <div className='bg-primaryBlue h-auto overflow-hidden'>
      <AboutMe />
      <div className='bg-white w-11/12 mx-auto rounded-t-3xl flex flex-col items-center justify-center gap-10 py-16 '>
      <h1 className='text-black font-semibold text-3xl tracking-wide'>Dev-tools & Languages</h1>
      <div className="w-full grid grid-cols-7 p-3  ">
      {
        skillsContent.map((value)=>{
          return <DevTools key={value.id} imgicon={value.imgicon} title={value.des}  />
        })
      }


        
      </div>
      </div>
    </div>
  )
}

export default Skills
