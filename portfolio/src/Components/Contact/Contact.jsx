import React from 'react'
import theme_pattern from '../../assets/main assets/theme_pattern.svg'
import mail_icon from '../../assets/main assets/mail_icon.svg'
import call_icon from '../../assets/main assets/call_icon.svg'
import location_icon from '../../assets/main assets/location_icon.svg'
import './Contact.css'

const Contact = () => {

  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt=''/>
        </div>

        <div className="contact-section">

            <div className="contact-left">

               <h1 className="contact-title-left">Contact</h1>
               
               <p className='contact-info'>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <br />
              <div className='contact-items'> <img src={mail_icon} alt="" /><p>sanjay525522@gmail.com</p></div>
                <br />
              <div className='contact-items'><img src={call_icon} alt="" /><p>9025979021</p></div>
                <br />
              <div className='contact-items'><img src={location_icon} alt="" /><p>Salem,TamilNadu</p></div>
                <br />

            </div>  

            <div className="contact-right">

              <form  className="contact-form">
                <label htmlFor="name">Name</label>
            
                <input id='name' type="text "  autoComplete='off'  placeholder='Enter your name' />
            

                <label htmlFor="email">Email</label>
          
                <input type="email" id="email" autoComplete='off'  placeholder='Enter your '/>

                <label htmlFor="number">Contact</label>
                <input type="number" id='text' autoComplete='off' placeholder='Enter your '/>

               <br />
                <label htmlFor="message">Write you message</label> 
                <textarea name="message" id="message" autoComplete='off' rows={8} cols={37} placeholder='Write you message...'></textarea>

                <button type='submit'>Submit</button>

              </form>

            </div>
        </div>
    </div>
  )
}

export default Contact