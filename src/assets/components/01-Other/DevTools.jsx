import React from 'react'

import imgcss from '..//../images/icon-css.png'

function DevTools({imgicon = imgcss, des }) {
   
  return (
  <div className='flex justify-center items-center drop-shadow-xl hover:transation hover:duration-500 hover:scale-110  '>
    <div className='w-36 h-36 bg-gray-200 rounded-full flex justify-center items-center hover:border-4 hover:border-blue-200'>
      <img src={imgicon} alt={des} className='w-28 h-28' />
    </div>
  </div>
  )
}

export default DevTools
