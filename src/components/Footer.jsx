// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Skyline Transact</h3>
          <p>Your trusted partner in global agricultural trade.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Product Catalog</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <address>
            <p>123 Business Avenue</p>
            <p>Mumbai, Maharashtra, India</p>
            <p>Email: info@skylinetransact.com</p>
            <p>Phone: +91 98765 43210</p>
          </address>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Skyline Transact. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;