
import React from "react";
import './Contactsection.css'
const ContactSection = () => {
    return (


        <div className="contactCon">
            <h1>Contact Us</h1>
            <form><label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name"/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="yourname@example.com"/>

                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" name="subject" placeholder="Subject of your message"/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Write your message here"></textarea>

                <button className={"contactButton"} type="submit">Send Message</button>
            </form>

        </div>


    )
        ;
}

export default ContactSection;
