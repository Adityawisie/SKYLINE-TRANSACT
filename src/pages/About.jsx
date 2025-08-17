// src/pages/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Skyline Transact</h1>
          <p>Your trusted partner in global agricultural trade.</p>
        </div>
      </section>
      
      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>Skyline Transact was founded with a vision to connect quality agricultural producers with international markets. What began as a small export venture has now grown into a global trading company with presence in over 15 countries.</p>
              <p>Our journey has been defined by our commitment to quality, sustainability, and building long-term relationships with both producers and buyers.</p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">About Hero Image</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="global-presence">
        <div className="container">
          <h2>Our Global Presence</h2>
          <div className="map-container">
            <div className="placeholder-image">Global Map Image</div>
          </div>
          <div className="presence-stats">
            <div className="stat-item">
              <h3>15+</h3>
              <p>Countries</p>
            </div>
            <div className="stat-item">
              <h3>500+</h3>
              <p>Partner Farms</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Clients Worldwide</p>
            </div>
            <div className="stat-item">
              <h3>50,000+</h3>
              <p>Tons Exported Annually</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="values-section">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Quality</h3>
              <p>We maintain the highest standards for all our products, ensuring they meet international quality benchmarks.</p>
            </div>
            <div className="value-card">
              <h3>Sustainability</h3>
              <p>We are committed to environmentally responsible practices throughout our supply chain.</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We conduct business with honesty, transparency, and ethical standards.</p>
            </div>
            <div className="value-card">
              <h3>Partnership</h3>
              <p>We build long-term relationships with our producers, clients, and stakeholders.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;