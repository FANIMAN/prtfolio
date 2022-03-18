import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        // emailjs.sendForm('service_d7mw8qy', 'service_d7mw8qy', form.current, 'pO6NAvAlZa8vEUbD8')
        emailjs.sendForm('service_a05eiv4', 'service_a05eiv4', form.current, 'pO6NAvAlZa8vEUbD8')

        
        
        e.target.reset()
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>fantahunfekadu1@gmail.com</h5>
                        <a href="mailto:fantahunfekadu1@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>Fantahun Fekadu</h5>
                        <a href="https://m.me/fani.man.102" target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        {/* <h5>fantahunfekadu1@gmail.com</h5> */}
                        {/* <a href="https://api.whatsapp.com/send?+251938646985" target='_blank'>Send a message</a> */}
                        <a href="https://wa.me/+251938646985" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsTelegram className='contact__option-icon'/>
                        <h4>Telegram</h4>
                        <h5>faniman1</h5>
                        <a href="tg://resolve?domain=faniman1" target='_blank'>Send a message</a>
                    </article>
                 </div>

                    {/* End of contact option */}
                    {/* <form ref={form} onSubmit={sendEmail}> 
                        <input type="text" name='name' placeholder='Your Full Name' required/>
                        <input type="email" name='email' placeholder='Your Email' required/>
                        <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form> */}
            </div>

        </section>
    )
}

export default Contact
