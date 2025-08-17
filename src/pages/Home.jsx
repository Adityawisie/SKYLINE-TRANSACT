// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <h1>Global Agricultural Trade Solutions</h1>
          <p>Your trusted partner for international agricultural commodities</p>
          <button className="cssbuttons-io-button" onClick={() => navigate('/products')}>
            Explore Products
            <div className="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
              </svg>
            </div>
          </button>
        </div>
      </section>
      
      <section className="featured-products">
        <div className="container" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <h2>Our Featured Products</h2>
          <div className="product-animation-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', marginTop: '32px' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px' }}>
              <div
                data-text="Fruits & Vegetables & Oil"
                style={{ '--r': -15, color: '#111', transform: 'rotate(-10deg)', transition: 'transform 0.3s' }}
                className="glass"
                onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-10deg)'}
              >
                <span
                  style={{ textAlign: 'center', color: '#111', cursor: 'pointer', display: 'block' }}
                  onClick={() => navigate('/product-catalog')}
                >
                  <strong style={{ color: '#111' }}>Fruits & Vegetables & Oil</strong>
                </span>
              </div>
              <div
                data-text="Rice"
                style={{ '--r': -5, color: '#111', transform: 'rotate(-5deg)', transition: 'transform 0.3s' }}
                className="glass"
                onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotate(-5deg)'}
              >
                <span
                  style={{ textAlign: 'center', color: '#111', cursor: 'pointer', display: 'block' }}
                  onClick={() => navigate('/product-catalog')}
                >
                  <strong style={{ color: '#111' }}>Rice</strong>
                </span>
              </div>
              <div
                data-text="Spices Seeds"
                style={{ '--r': 0, color: '#111', transform: 'rotate(0deg)', transition: 'transform 0.3s' }}
                className="glass"
                onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0deg)'}
              >
                <span
                  style={{ textAlign: 'center', color: '#111', cursor: 'pointer', display: 'block' }}
                  onClick={() => navigate('/product-catalog')}
                >
                  <strong style={{ color: '#111' }}>Spices Seeds</strong>
                </span>
              </div>
              <div
                data-text="Pulses"
                style={{ '--r': 5, color: '#111', transform: 'rotate(5deg)', transition: 'transform 0.3s' }}
                className="glass"
                onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotate(5deg)'}
              >
                <span
                  style={{ textAlign: 'center', color: '#111', cursor: 'pointer', display: 'block' }}
                  onClick={() => navigate('/product-catalog')}
                >
                  <strong style={{ color: '#111' }}>Pulses</strong>
                </span>
              </div>
              <div
                data-text="Grains"
                style={{ '--r': 10, color: '#111', transform: 'rotate(10deg)', transition: 'transform 0.3s' }}
                className="glass"
                onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotate(10deg)'}
              >
                <span
                  style={{ textAlign: 'center', color: '#111', cursor: 'pointer', display: 'block' }}
                  onClick={() => navigate('/product-catalog')}
                >
                  <strong style={{ color: '#111' }}>Grains</strong>
                </span>
              </div>
              <div
                data-text="Sweetness Sugar Products"
                style={{ '--r': 15, color: '#111', transform: 'rotate(15deg)', transition: 'transform 0.3s' }}
                className="glass"
                onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotate(15deg)'}
              >
                <span
                  style={{ textAlign: 'center', color: '#111', cursor: 'pointer', display: 'block' }}
                  onClick={() => navigate('/product-catalog')}
                >
                  <strong style={{ color: '#111' }}>Sweetness Sugar Products</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-preview">
        <div className="container">
          <h2>About Skyline Transact</h2>
          <p>
            Skyline Transact is a newly established venture dedicated to connecting Indian farmers and producers with global markets. While we are at the beginning of our journey, our focus is clear — delivering quality agricultural products with transparency, trust, and sustainability at the core.
          </p>
          <p>
            We aim to build strong relationships with farmers, exporters, and buyers by ensuring fair trade, reliable processes, and modern solutions for global agricultural trade. Our vision is to grow into a trusted partner worldwide by consistently upholding quality and responsibility in every transaction.
          </p>
          <button className="btn btn-dark">Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
