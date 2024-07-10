import React from 'react'

const Heading = ({title, subTitle }) => {
  return (
    <div className='flex flex-col lg:gap-7 gap-2 items-center'>
     <h1 className='text-size-400 sm:text-size-500 lg:text-size-600  font-semibold  tracing-wide text-center'>{title}</h1>
     <p className='tracking-wider text-center text-size-200 sm:text-size-300 lg:text-size-400 '>{subTitle}</p> 
    </div>
  )
}

export default Heading
