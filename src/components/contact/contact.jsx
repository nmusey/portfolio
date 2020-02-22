import React from 'react';
import emailjs from 'emailjs-com';
import Mail from 'mail';


/**
 * Creates a list of ways to get in touch
 * 
 */
class Contact extends React.Component {

    constructor() {
        this.state = {
            senderEmail: '',
            senderName: '',
            subject: '',
            message: ''
        }
    }

    render() {
        return (
            <form className="contact-container">

                <span>
                <label htmlFor="contact-email">Your email:</label>
                    <input name="contact-email" type="email"/>

                    <label htmlFor="contact-name">Your name: </label>
                    <input name="contact-name" type="text"/>

                    <label htmlFor="contact-subject">Subject: </label>
                    <input name="contact-subject" type="text"/>
                </span>

                <span>
                <label htmlFor="contact-message"></label>
                <textarea 
                    name="contact-message" 
                    id="contact-message" 
                    type="text"
                />
                </span>

                <button>Send Message</button>

            </form>
        );
    }

}

export default Contact;