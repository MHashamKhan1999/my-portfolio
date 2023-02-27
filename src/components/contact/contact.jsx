import React from 'react'
import './contact.css'
import {AiOutlineMail, AiOutlineMessage, AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zowhe7b', 'template_t0jdiec', form.current, 'wlnv8F0Wuqz27v4Mt')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          e.target.reset();
      });
      
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Us</h2>
      
      <div className='container contact__container'>
        <div className='contact__options'>
          {/* Email Card */}
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Massenger</h4>
            <h5>khasham476@gmail.com</h5>
            <a href="mailto:khasham476@gmail.com" target="_blank" rel="noreferrer">Send a Mail</a>
          </article> 

          {/* Massenger Card */}
          <article className='contact__option'>
            <AiOutlineMessage className='contact__option-icon'/>
            <h4>Massenger</h4>
            <h5>mhashamkhan</h5>
            <a href="" target="_blank" rel="noreferrer">Send a Message</a>
          </article> 

          {/* Contact Card */}
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+92 315 6980 452</h5>
            <a href="https://api.whatsapp.com/send?phone+923156980452" target="_blank" rel="noreferrer">Call Me</a>
          </article>          
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7"  placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact