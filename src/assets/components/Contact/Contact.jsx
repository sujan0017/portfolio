import React from 'react'
import Heading from '../01-Other/Heading'
import DarkButton from '../01-Other/DarkButton'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        <form ref={form} onSubmit={sendEmail} className=' w-full flex flex-col items-center justify-center gap-7 py-7 px-7'>
          <div className=' w-full grid md:grid-cols-2 gap-8 sm:grid-cols-1'>
            <div className='flex flex-col md:gap-4 gap-2'>
              <label htmlFor="user_name" >Full name:</label>
              <input name='user_name' type="text" className='py-2 bg-gray-100 border-2 border-gray-200 rounded-md'  />
            </div>
            <div className='flex flex-col md:gap-4 gap-2 '>
              <label htmlFor="user_email">Email:</label>
              <input name='user_email' type="text" className='py-2 px-4 w-full bg-gray-100 border-2 border-gray-200 rounded-md' />
            </div>
          </div>
          <div className='flex flex-col md:gap-4 gap-2 w-full '>
            <label name='message' className='' htmlFor="message">Message</label>
            <textarea className=' h-48  bg-gray-100 border-2 border-gray-200 rounded-md' />
          </div>
          <div className='w-auto h-auto'>
            <DarkButton btnTitle="Submit" type='submit' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
