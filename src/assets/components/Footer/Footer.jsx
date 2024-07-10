import React from 'react'
import Logo from '../01-Other/Logo'
import { logoImg } from '../01-Other/Content'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='bg-secondaryBlue md:py-20 py-10 flex flex-col md:gap-16 gap-7 '>
      <div className=' flex flex-col items-center justify-center md:gap-9 gap-5 '>
      <Logo img={logoImg[1]} />
        <p className=' tracking-wider text-white sm:text-size-300 text-size-200'>+977 982-3741464</p>
        <p className=' tracking-wider text-white sm:text-size-300 text-size-200'>Kathmandu, Nepal</p>
        <p className=' tracking-wider text-white sm:text-size-300 text-size-200'>Contact me at: bk.sujan1215@gmail.com</p>
        <div className="flex gap-8 ">
          <Link to='https://www.facebook.com/bk.sujan017'>
            <div className=' hover:bg-white hover:bg-opacity-25 w-14 h-14 rounded-full p-2 flex justify-center items-center  '>
              <i className="fa-brands fa-facebook text-4xl p-1 rounded-full text-white "></i>
            </div>
          </Link>
          <Link to='https://www.instagram.com/sujan_017/'>
            <div className=' hover:bg-white hover:bg-opacity-25 w-14 h-14 rounded-full p-2 flex justify-center items-center  '>
              <i className="fa-brands fa-instagram text-4xl p-1 rounded-full text-white "></i>
            </div>
          </Link>
          <Link to='https://www.linkedin.com/in/sujan-bk-b9a288250/'>
            <div className=' hover:bg-white hover:bg-opacity-25 w-14 h-14 rounded-full p-2 flex justify-center items-center  '>
              <i className="fa-brands fa-linkedin text-4xl p-1 rounded-full text-white "></i>
            </div>
          </Link>
          <Link to='https://github.com/sujan0017'>
            <div className=' hover:bg-white hover:bg-opacity-25 w-14 h-14 rounded-full p-2 flex justify-center items-center  '>
              <i className="fa-brands fa-github text-4xl p-1 rounded-full text-white "></i>
            </div>
          </Link>     
        </div>
      </div >
      <div className='border-t-2 w-full'></div>
      <p className='text-center text-size-100 sm:text-size-200 tracking-wider text-white'>© 2024 All rights are reserved | Made with love by SujAn</p>
    </div>
  )
}

export default Footer
