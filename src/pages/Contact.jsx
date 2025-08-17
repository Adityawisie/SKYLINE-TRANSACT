// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" name="company" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-dark">Send Message</button>
              </form>
            </div>
            
            <div className="contact-info">
              <h2>Contact Information</h2>
              
              <div className="info-item">
                <h3>Address</h3>
                <p>E-904 Nakshatra aspire,</p>
                <p>NR Pooja Farm, Narol</p>
                <p>Ahmedabad, Gujarat 382405</p>
              </div>
              
              <div className="info-item">
                <h3>Email</h3>
                <p>info@skylinetransact.com</p>
                <p>sales@skylinetransact.com</p>
              </div>
              
              <div className="info-item">
                <h3>Phone</h3>
                <p>+91 910 979 7227</p>
              </div>
              
              <div className="info-item">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
              </div>
              
              <div className="location-map">
                <div className="placeholder-image">Location Map</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;