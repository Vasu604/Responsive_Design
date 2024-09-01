import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>
                    Have some big idea or brand to develop and need
                    <br />help? Then reach out we'd love to hear about your
                    <br />project and provide help.
                </p>
            </div>
            <div className="contact-right">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="service">What service are you interested in</label>
                        <select id="service">
                            <option value="">Select project type</option>
                            <option value="web-development">Web Development</option>
                            <option value="branding">Branding</option>
                            <option value="marketing">Marketing</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
