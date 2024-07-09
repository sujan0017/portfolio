import React from 'react'

const Heading = ({title, subTitle }) => {
  return (
    <div className='flex flex-col md:gap-7 gap-4 items-center'>
     <h1 className={`text-size-600 md:text-size-800 font-bold tracing-wide text-center `}>{title}</h1>
     <p className='tracking-wider text-center text-size-300 '>{subTitle}</p> 
    </div>
  )
}

export default Heading
