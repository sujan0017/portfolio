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

    <div className=' flex justify-center items-center py-20'>
      <div className='flex flex-col items-center w-1/3'>
        <Heading title="Thank you for reaching out." subTitle="How can I help you today?"/>
        <form ref={form} onSubmit={sendEmail}>
          <div className=' w-full grid grid-cols-2 gap-8 pt-10'>
            <div className='flex flex-col gap-4'>
              <label htmlFor="user_name" >Full name:</label>
              <input name='user_name' type="text" className='py-2 bg-gray-100 border-2 border-gray-200 rounded-md'  />
            </div>
            <div className='flex flex-col gap-4 '>
              <label htmlFor="user_email">Email:</label>
              <input name='user_email' type="text" className='py-2 px-4 w-full bg-gray-100 border-2 border-gray-200 rounded-md' />
            </div>
          </div>
          <div className='flex flex-col gap-4 w-full pt-6 pb-10'>
            <label name='message' className='' htmlFor="message">Message</label>
            <textarea className=' h-48  bg-gray-100 border-2 border-gray-200 rounded-md' />
          </div>
        <DarkButton btnTitle="Submit" type='submit' />
        </form>
      </div>
    </div>



  // <form ref={form} onSubmit={sendEmail}>
  //   <label>Name</label>
  //   <input type="text" name="user_name" />

  //   <label>Email</label>
  //   <input type="email" name="user_email" />

  //   <label>Message</label>
  //   <textarea name="message" />

  //   <input type="submit" value="Send" />
  // </form>

  )
}

export default Contact
