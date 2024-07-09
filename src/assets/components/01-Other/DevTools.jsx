import React from 'react'

import imgcss from '..//../images/icon-css.png'

function DevTools({imgicon = imgcss, des }) {
   
  return (
  <div className='flex justify-center items-center drop-shadow-md hover:drop-shadow-xl hover:transation hover:duration-500 hover:scale-110  '>
    <div className='md:w-36 md:h-36 w-28 h-28 bg-primaryBlue bg-opacity-10 rounded-full flex justify-center items-center '>
      <img src={imgicon} alt={des} className='md:w-28 md:h-28 w-20 h-20' />
    </div>
  </div>
  )
}

export default DevTools
