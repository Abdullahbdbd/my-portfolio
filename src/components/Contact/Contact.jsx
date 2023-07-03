import './Contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s5rohoz', 'template_dmycttl', form.current, 'H5iHH67r3UsJPZmJ0')

        e.target.reset();
      };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className='contact_option'>
                        <TfiEmail className='contact_option-icon'></TfiEmail>
                       <h4>Email</h4>
                       <h5>abdullahmohammad262000@gmail.com</h5>
                    </article>

                    <article className='contact_option'>
                        <FaFacebookMessenger className='contact_option-icon'></FaFacebookMessenger>
                       <h4>Messenger</h4>
                       <h5>Abdullah Mohammad</h5>
                    </article>

                    <article className='contact_option'>
                        <BsWhatsapp className='contact_option-icon'></BsWhatsapp>
                       <h4>WhatsApp</h4>
                       <h5>+8801642369776</h5>
                    </article>
                </div>
                    {/* ============================= */}
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="email" name="email" placeholder='Your Email' required />
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
            </div>
        </section>
    );
};

export default Contact;