import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🌾</span>
              <span className="logo-text">Prime Crop Straw</span>
            </div>
            <p className="footer-description">
              Your trusted supplier of high-quality wheat straw bales for farms, 
              industries, and exporters. We deliver consistency, purity, and reliable 
              supply to meet all your agricultural needs.
            </p>
            <div className="footer-tagline">
              Premium Quality • Reliable Supply • Competitive Prices
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#why-choose">Why Choose Us</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Our Products</h3>
            <ul className="footer-links">
              <li>Wheat Straw Bales</li>
              <li>Rice Straw</li>
              <li>Crop Residue</li>
              <li>Custom Orders</li>
              <li>Bulk Supply</li>
              <li>Export Quality</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Add your location here</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>Add your phone number here</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>Add your email here</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Prime Crop Straw. All rights reserved.</p>
            <p className="footer-note">
              Premium Wheat Straw Bales Supplier • Trusted Quality • Reliable Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
