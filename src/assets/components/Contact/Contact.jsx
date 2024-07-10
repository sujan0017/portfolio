import React from 'react'
import Heading from '../01-Other/Heading'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import LightButton from '../01-Other/LightButton';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l88vgeg', 'template_gh5syou', form.current, {
        publicKey: 'EgkfKrSV5p3BqLx2A',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (

    <div className=' flex justify-center items-center lg:p-20  p-7 '>
      <div className='flex flex-col items-center w-[1000px]'>
        <Heading title="Thank you for reaching out." subTitle="How can I help you today?"/>
        <form ref={form} onSubmit={sendEmail} className=' w-full flex flex-col items-center justify-center gap-3 md:gap-7 py-7'>
          <div className=' w-full grid md:grid-cols-2 gap-3 md:gap-7 sm:grid-cols-1'>
            <div className='flex flex-col md:gap-4 gap-2'>
              <label htmlFor="user_name" className='text-size-300 lg:text-size-400'>Full name:</label>
              <input name='user_name' type="text" className='py-2 bg-gray-100 border-2 border-gray-200 rounded-md'  />
            </div>
            <div className='flex flex-col md:gap-4 gap-2 '>
              <label htmlFor="user_email" className='text-size-300 lg:text-size-400'>Email:</label>
              <input name='user_email' type="text" className='py-2 px-4 w-full bg-gray-100 border-2 border-gray-200 rounded-md' />
            </div>
          </div>
          <div className='flex flex-col md:gap-4 gap-2 w-full '>
            <label name='message' className='text-size-300 lg:text-size-400' htmlFor="message">Message</label>
            <textarea className=' h-64  bg-gray-100 border-2 border-gray-200 rounded-md' />
          </div>
          <div className='w-auto h-auto'>
            <LightButton btnTitle="Submit" type='submit' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
