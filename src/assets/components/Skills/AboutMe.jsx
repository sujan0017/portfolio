import React from 'react'
import resume from '../../images/Resume.pdf'

function AboutMe() {
  return (
    <div className='flex flex-col items-center py-12 px-7 gap-5 lg:gap-10 lg:p-20'>
      <h1 className='text-white font-semibold text-size-400 md:text-size-600 tracking-wide text-center'>Hi, I'm Sujan. Nice to meet you.</h1>
      <p className='text-white text-center md:text-size-300 text-size-300 font-light tracking-wider'>I am an aspiring web developer with a strong interest in creating dynamic and user-friendly websites. Although I am a fresher in the field, I am eager to learn and grow. My journey in web development is driven by curiosity and a passion for innovation. I am committed to continuously improving my skills and knowledge to build impactful digital experiences.</p>
      <button className='text-lg  px-6 py-2 rounded-2xl drop-shadow-md tracking-wide border-2 border-white text-white  hover:text-ascentYellow hover:border-ascentYellow'><a href={resume} download='resume'>Download CV</a></button>
    </div>
  )
}

export default AboutMe
