import React from 'react'
import DevTools from '../01-Other/DevTools'
import AboutMe from './AboutMe'
import  { skillsContent }  from '../01-Other/Content'

function Skills() {
 
  return (
    <div className='bg-primaryBlue h-auto overflow-hidden lg:px-20 '>
      <AboutMe />
      <div className='bg-white w-full rounded-t-3xl flex flex-col items-center justify-center gap-10 py-16 px-2 '>
      <h1 className='text-black font-semibold text-3xl tracking-wide'>Dev-tools & Languages</h1>
      <div className="w-full grid xl:grid-cols-7 gap-5 grid-cols-3n sm:grid-cols-4  ">
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
