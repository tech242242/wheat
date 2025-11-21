import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">UltraModern</h3>
            <p className="footer-description">
              Creating beautiful, modern web experiences with cutting-edge technology.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#features">Features</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-links">
              <a href="#github">GitHub</a>
              <a href="#twitter">Twitter</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="#discord">Discord</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 UltraModern. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
