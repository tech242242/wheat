import React, { useEffect, useState } from 'react'
import './WhyChoose.css'

const WhyChoose = () => {
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

    const section = document.getElementById('why-choose')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: '⭐',
      title: 'Premium Quality Straw',
      description: 'Carefully harvested and processed to ensure the highest standards of purity and consistency'
    },
    {
      icon: '📦',
      title: 'Reliable Supply',
      description: 'Bulk orders and long-term contracts available with consistent delivery schedules'
    },
    {
      icon: '💰',
      title: 'Competitive Prices',
      description: 'Best value for money without compromising on quality and service'
    },
    {
      icon: '🧹',
      title: 'Clean & Well-Packed Bales',
      description: 'Easy transport and storage with proper packaging and handling'
    },
    {
      icon: '🚚',
      title: 'Customer-Focused Service',
      description: 'Fast delivery and professional coordination for all your orders'
    },
    {
      icon: '🔧',
      title: 'Expert Support',
      description: 'Technical guidance and support for optimal product usage and applications'
    }
  ]

  return (
    <section id="why-choose" className="why-choose">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Prime Crop Straw?</h2>
          <p>Experience the difference with our premium service and uncompromising quality standards</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={`why-choose-cta ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="cta-content">
            <h3>Ready to Experience Premium Quality?</h3>
            <p>Join hundreds of satisfied customers who trust Prime Crop Straw for their agricultural needs</p>
            <div className="cta-buttons">
              <a href="#contact" className="cta-btn primary">Get Started</a>
              <a href="#products" className="cta-btn secondary">View Products</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
