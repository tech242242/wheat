import React, { useEffect, useState } from 'react'
import './About.css'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      observer.observe(aboutSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className={`about-text ${isVisible ? 'fade-in-left' : ''}`}>
            <h2>About Prime Crop Straw</h2>
            <p className="about-intro">
              Prime Crop Straw is a trusted supplier of high-quality wheat straw bales for farms, 
              industries, and exporters. We specialize in providing clean, sun-dried, tightly-packed 
              bales sourced from fertile crop fields.
            </p>
            <p>
              Our focus is delivering consistency, purity, and reliable supply to our customers 
              across various industries. With years of experience in agricultural supply chain 
              management, we ensure that every bale meets our stringent quality standards.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🌾</div>
                <div className="highlight-content">
                  <h4>Premium Quality</h4>
                  <p>Carefully harvested and processed wheat straw</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">📦</div>
                <div className="highlight-content">
                  <h4>Reliable Supply</h4>
                  <p>Bulk orders and long-term contracts available</p>
                </div>
              </div>
              
              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h4>Fast Delivery</h4>
                  <p>Timely delivery with professional coordination</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`about-visual ${isVisible ? 'fade-in-right' : ''}`}>
            <div className="quality-badge">
              <div className="badge-header">
                <div className="badge-icon">🏆</div>
                <h3>Quality Promise</h3>
              </div>
              <div className="badge-features">
                <div className="badge-feature">
                  <span className="checkmark">✓</span>
                  <span>Clean & Dust-Controlled</span>
                </div>
                <div className="badge-feature">
                  <span className="checkmark">✓</span>
                  <span>Sun-Dried Naturally</span>
                </div>
                <div className="badge-feature">
                  <span className="checkmark">✓</span>
                  <span>Tightly-Packed Bales</span>
                </div>
                <div className="badge-feature">
                  <span className="checkmark">✓</span>
                  <span>Uniform Size & Weight</span>
                </div>
                <div className="badge-feature">
                  <span className="checkmark">✓</span>
                  <span>Competitive Pricing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
