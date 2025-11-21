import React, { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0)

  const features = [
    "Modern Design",
    "Fast Performance",
    "Secure Platform",
    "User Friendly"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ Ultra Modern Design</span>
          </div>
          
          <h1 className="hero-title">
            Experience The
            <span className="gradient-text"> Future</span>
            <br />
            Of Web Design
          </h1>
          
          <p className="hero-description">
            Discover the next generation of web experiences with our cutting-edge 
            glass morphism design, smooth iOS animations, and blazing fast performance.
          </p>

          <div className="hero-features">
            <div className="feature-display">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className={`feature-text ${
                    index === currentFeature ? 'active' : ''
                  }`}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-actions">
            <button className="cta-button primary">
              Get Started Free
            </button>
            <button className="cta-button secondary">
              View Demo
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-card main-card">
            <div className="card-content">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-body">
                <div className="floating-element el1"></div>
                <div className="floating-element el2"></div>
                <div className="floating-element el3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
