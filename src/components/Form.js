import "../components/Form.css";

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8157b4j', 'template_toiwt8h', form.current, 'QIMSdQPRimTZ8jvq4')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type="text" name="user_name"/>
            <label>Email</label>
            <input type="email" name="user_email"/>
            <label>Subject</label>
            <input type="text" name="user_subject"/>
            <label>Message</label>
            <textarea rows="6" placeholder="Type Your Message Here" type="submit" name="message"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}
export default Form;