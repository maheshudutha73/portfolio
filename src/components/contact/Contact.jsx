import React from 'react'
import './contact.css'
import{MdOutlineMarkEmailUnread} from 'react-icons/md'
import{SiMessenger} from 'react-icons/si'
import{RiWhatsappFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMarkEmailUnread className='conatct__option-icon'/>
            <h4>Email</h4>
            <h5>mahesh.udutha73@gmail.com</h5>
            <a href="mailto:mahesh.udutha73@gmail.com" target='_blank'> Send a Email</a>
          </article>
          <article className='contact__option'>
            <SiMessenger className='conatct__option-icon'/>
            <h4>Messenger</h4>
            <h5>Mahesh Udutha</h5>
            <a href="https://www.facebook.com/messenger/" target='_blank'> Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiWhatsappFill className='conatct__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 8885803494</h5>
            <a href="https://web.whatsapp.com/" target='_blank'> Send a Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='text' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Enter Your Email' required/>
          <textarea name="Message" cols="30" rows="10" required placeholder='Your Message'></textarea>
          <button type='submit'  className='btn btn-primary'> Send a Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact