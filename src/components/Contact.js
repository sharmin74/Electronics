import React from 'react'
import './Contact.css'
import contact from './photos/contact1.jpeg'
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import contactSide from './photos/contactSide.jpg';
import emailjs from 'emailjs-com';





function Form() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_e6j9eho', 'template_m7cz7x6', e.target, 'user_hnoVKOBKOpwcVV4rYrQUB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
  
    return (
        <form className='form contact-form' onSubmit={sendEmail}>
            <Input className='inp' placeholder='Name' variant="outlined" type="text" name="name"/>
            <br/> <br/><br/>
            <Input className='inp' placeholder='Email' type="text" name="email"/>
            <br/><br/><br/> 
            <Input className='inp' placeholder='Phone' type="text" name="phone"/>
            <br/><br/><br/>
            <Input className='inp' placeholder='Message' type="text" name="message"/>
            <br/><br/><br/>
            <Button variant="contained" color="default" type='submit'>Submit</Button>
        </form>
    //   <form className="contact-form" onSubmit={sendEmail}>
    //     <input type="text" name="phone" />
    //     <label>Name</label>
    //     <input type="text" name="name" />
    //     <label>Email</label>
    //     <input type="email" name="email" />
    //     <label>Message</label>
    //     <textarea name="message" />
    //     <input type="submit" value="Send" />
    //   </form>
    );
  }




function Contact() {
    return (
        <div className='contact'>
            <div className='contactUs'>
                <div className='contactUs__left'>
                    <h1>Contact Us About Our Products</h1>
                    <p>Leave us a message and we will get back to you as soon as possible, or get on a call with us.</p>
                </div>
                <div className='contactUs__right'>
                    <img className='contactUs__img' src={contact} alt=""/>
                </div>
            </div>
            <div className='contactData'>
                <div className="contactData__box contactData__box1">
                    <span><CallIcon style={{ fontSize: 60 }} /></span>
                    <h3>Call us diretly</h3>
                    <p>+91 8657326350</p>
                </div>
                <div className="contactData__box contactData__box2">
                   <span><MailIcon style={{ fontSize: 50 }} /></span>
                   <h3>Send us a mail</h3>
                   <p>voltamplogiccontrols@gmail.com</p>
                </div>
                <div className="contactData__box contactData__box3">
                    <span><LocationOnIcon style={{ fontSize: 50 }} /></span> 
                    <h3>Where can you find Us</h3>
                    <p>
                        Volt-Amp Logic Controls
                        221, Shree Krishna Ind Estate
                        Near Dahisar Toll Plaza, Dahisar (E)
                        Mumbai-68
                    </p>
                </div>
            </div>
            <div className='contact__form'>
                <div>
                    <img className='contact__formImg' src={contactSide} alt=""/>
                </div>
                <div>
                    <h1>Send Us a Message</h1>
                    <p>We will reach to you as soon as possible</p>
                    <br/><br/> <br/>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact;













