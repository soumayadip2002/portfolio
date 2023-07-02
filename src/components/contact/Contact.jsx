import React from 'react'
import './contact.css';
import {TfiEmail} from 'react-icons/tfi';
import {FaFacebookMessenger} from 'react-icons/fa';
import {SiWhatsapp} from 'react-icons/si';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4qm4mmk', 'template_pkxvtv9', form.current, 'iPPWRrbr2ShodgSak');
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>get in touch</h5>
      <h2>contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <TfiEmail className='contact_option-icon'/>
            <h4>email</h4>
            <h5>sinuroy696@gmail.com</h5>
            <a href="mailto:sinuroy696@gmail.com" target='_blank' rel="noreferrer">send a message</a>
          </article>

          <article className="contact_option">
            <FaFacebookMessenger className='contact_option-icon'/>
            <h4>Messanger</h4>
            <h5>soumayadip saha</h5>
            <a href="https://www.facebook.com/soumyadip.saha.775" target='_blank' rel="noreferrer">send a message</a>
          </article>

          <article className="contact_option">
            <SiWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>soumayadip saha</h5>
            <a href="https://api.whatsapp.com/send/?phone=919734090374&text&type=phone_number&app_absent=0" target='_blank' rel="noreferrer">send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='your name' required/>
          <input type="email" name='email' placeholder='your email' required />
          <textarea rows="7" name='message' placeholder='your message' required></textarea>
          <button type="submit" onClick={() => alert('Thank you for your response 😀')} className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;