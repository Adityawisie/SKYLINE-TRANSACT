import React from 'react';
import './Certificates.css';

// Import actual certificate SVGs from the images folder
// We'll use img tags to display the SVG files directly
const Certificates = () => {
  const certificates = [
    {
      id: 1,
      name: 'IEC Certificate',
      description: 'Importer-Exporter Code certificate issued by DGFT, Government of India for international trade operations.',
      imagePath: '/images/certificate of IEC/certificateOfIEC (3).svg',
      category: 'IEC'
    },
    {
      id: 2,
      name: 'GST Registration Certificate',
      description: 'Goods and Services Tax registration certificate for compliance with Indian tax regulations.',
      imagePath: '/images/gst resgistration certificate/AA240725056230J_RC31072025-1.svg',
      category: 'GST'
    },
    {
      id: 3,
      name: 'Trade Certificate',
      description: 'Trade license and business registration certificate for authorized trading operations.',
      imagePath: '/images/Trade Certificate/AA240725056230J_RC31072025-1.svg',
      category: 'Trade'
    },
    {
      id: 4,
      name: 'Udyam Registration Certificate',
      description: 'MSME registration certificate under Udyam scheme for small and medium enterprises.',
      imagePath: '/images/Udaym certificate/Print _ Udyam Registration Certificate-1.svg',
      category: 'MSME'
    },
    {
      id: 5,
      name: 'GST Certificate - Additional',
      description: 'Additional GST compliance certificate with detailed registration information.',
      imagePath: '/images/gst resgistration certificate/AA240725056230J_RC31072025-2.svg',
      category: 'GST'
    },
    {
      id: 6,
      name: 'Trade Certificate - Additional',
      description: 'Additional trade authorization certificate for expanded business operations.',
      imagePath: '/images/Trade Certificate/AA240725056230J_RC31072025-2.svg',
      category: 'Trade'
    },
    {
      id: 7,
      name: 'Udyam Certificate - Additional',
      description: 'Additional MSME certification with updated enterprise details.',
      imagePath: '/images/Udaym certificate/Print _ Udyam Registration Certificate-2.svg',
      category: 'MSME'
    },
    {
      id: 8,
      name: 'GST Certificate - Final',
      description: 'Comprehensive GST registration certificate with all compliance details.',
      imagePath: '/images/gst resgistration certificate/AA240725056230J_RC31072025-3.svg',
      category: 'GST'
    },
    {
      id: 9,
      name: 'Trade Certificate - Final',
      description: 'Complete trade authorization certificate with all permissions and licenses.',
      imagePath: '/images/Trade Certificate/AA240725056230J_RC31072025-3.svg',
      category: 'Trade'
    }
  ];

  return (
    <div className="certificates-page">
      <section className="certificates-header">
        <div className="container">
          <h1>Our Certifications</h1>
          <p>Official certifications and registrations that validate our business operations</p>
        </div>
      </section>
      
      <section className="certificates-content">
        <div className="container">
          <div className="trust-intro">
            <h2>Why Trust Skyline Transact?</h2>
            <p>At Skyline Transact, we believe in complete transparency and compliance. Our operations are backed by all necessary certifications and registrations required for international trade and domestic operations.</p>
          </div>
          
          <div className="certificates-grid">
            {certificates.map(cert => (
              <div className="certificate-card" key={cert.id}>
                <div className="certificate-image">
                  <img 
                    src={cert.imagePath} 
                    alt={cert.name}
                    className="cert-svg"
                    onError={(e) => {
                      e.target.src = '/src/assets/certificates/placeholder-certificate.svg';
                    }}
                  />
                </div>
                <div className="certificate-details">
                  <h3>{cert.name}</h3>
                  <p>{cert.description}</p>
                  <span className="certificate-category">{cert.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="quality-assurance">
        <div className="container">
          <h2>Our Compliance Standards</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Government Registrations</h3>
              <p>All necessary government registrations including IEC, GST, and MSME certifications.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Trade Licenses</h3>
              <p>Valid trade licenses and permits for import-export operations across multiple categories.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Quality Assurance</h3>
              <p>Regular audits and quality checks to maintain highest standards of operation.</p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
        <button className="cssbuttons-io-button">
          Explore Products
          <div className="icon">
            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Certificates;
