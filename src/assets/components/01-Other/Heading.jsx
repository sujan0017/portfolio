import React from 'react'

const Heading = ({title, subTitle, fontSize = 'text-4xl'}) => {
  return (
    <div className='flex flex-col gap-7 items-center'>
     <h1 className={` ${fontSize} font-bold tracing-wide`}>{title}</h1>
     <p className='text-lg tracking-wider'>{subTitle}</p> 
    </div>
  )
}

export default Heading
