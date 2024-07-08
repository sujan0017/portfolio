import React from 'react'
import Logo from '../01-Other/Logo'
import { logoImg } from '../01-Other/Content'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='bg-secondaryBlue py-20 flex flex-col gap-16'>
      <div className=' flex flex-col items-center justify-center gap-9 '>
      <Logo img={logoImg[1]} />
        <p className=' tracking-wider text-white'>+977 982-3741464</p>
        <p className=' tracking-wider text-white'>Kathmandu, Nepal</p>
        <div className="flex gap-8 ">
          <Link to='https://www.facebook.com/bk.sujan017'>
            <div className=' hover:bg-white hover:bg-opacity-25 w-14 h-14 rounded-full p-2 flex justify-center items-center  '>
              <i className="fa-brands fa-facebook text-3xl p-1 rounded-full text-white "></i>
            </div>
          </Link>
          <Link to='https://www.instagram.com/sujan_017/'>
            <div className=' hover:bg-white hover:bg-opacity-25 w-14 h-14 rounded-full p-2 flex justify-center items-center  '>
              <i className="fa-brands fa-instagram text-3xl p-1 rounded-full text-white "></i>
            </div>
          </Link>
          <Link to='https://www.linkedin.com/in/sujan-bk-b9a288250/'>
            <div className=' hover:bg-white hover:bg-opacity-25 w-14 h-14 rounded-full p-2 flex justify-center items-center  '>
              <i className="fa-brands fa-linkedin text-3xl p-1 rounded-full text-white "></i>
            </div>
          </Link>
          <Link to='https://github.com/sujan0017'>
            <div className=' hover:bg-white hover:bg-opacity-25 w-14 h-14 rounded-full p-2 flex justify-center items-center  '>
              <i className="fa-brands fa-github text-3xl p-1 rounded-full text-white "></i>
            </div>
          </Link>     
        </div>
      </div >
      <div className='border-t-2 w-full'></div>
      <p className='text-center text-sm tracking-wider text-white'>© 2024 All rights are reserved | Made with love by SujAn</p>
    </div>
  )
}

export default Footer
