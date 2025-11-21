import React, { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="wheat-pattern"></div>
      </div>
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="logo-badge">
            <div className="shield"></div>
            <div className="wheat-stalks">🌾🌾</div>
            <div className="ribbon">Prime Crop Straw</div>
          </div>
          <h1>Premium Wheat Straw Bales Supplier</h1>
          <p className="hero-description">
            High-quality, clean, and sun-dried wheat straw bales for farms, industries, and exporters. 
            We specialize in delivering consistency, purity, and reliable supply to our customers worldwide.
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">✅</span>
              <span>Clean & Dust-Controlled</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✅</span>
              <span>Sun-Dried & Tightly-Packed</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✅</span>
              <span>Uniform Bale Size</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="#products" className="cta-button primary">View Our Products</a>
            <a href="#contact" className="cta-button secondary">Get In Touch</a>
          </div>
        </div>
        <div className={`hero-visual ${isVisible ? 'fade-in-right' : ''}`}>
          <div className="straw-bale">
            <div className="bale-top">🌾</div>
            <div className="bale-middle">Premium Wheat Straw</div>
            <div className="bale-bottom">Prime Quality</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
