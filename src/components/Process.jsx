import React, { useEffect, useState } from 'react'
import './Process.css'

const Process = () => {
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

    const section = document.getElementById('process')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      step: '01',
      title: 'Harvesting',
      description: 'Carefully harvested from selected crop fields at optimal maturity',
      icon: '🌾',
      details: 'Selected farmlands with fertile soil and optimal growing conditions'
    },
    {
      step: '02',
      title: 'Cleaning & Drying',
      description: 'Thorough cleaning and natural sunlight drying process',
      icon: '☀️',
      details: 'Natural sun drying to preserve quality and nutritional value'
    },
    {
      step: '03',
      title: 'Baling',
      description: 'High-pressure baling for tight, uniform bales',
      icon: '📦',
      details: 'Modern baling equipment for consistent size and density'
    },
    {
      step: '04',
      title: 'Quality Inspection',
      description: 'Rigorous quality checks to ensure premium standards',
      icon: '🔍',
      details: 'Multiple quality control checkpoints and standards'
    },
    {
      step: '05',
      title: 'Timely Delivery',
      description: 'Efficient logistics and professional coordination',
      icon: '🚚',
      details: 'On-time delivery with proper handling and storage'
    }
  ]

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <h2>Our Quality Process</h2>
          <p>Ensuring premium quality through every step of our production and delivery</p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`step-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <p className="step-details">{step.details}</p>
            </div>
          ))}
        </div>

        <div className={`process-guarantee ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="guarantee-icon">✅</div>
          <div className="guarantee-content">
            <h3>Quality Guarantee</h3>
            <p>
              Every bale undergoes strict quality control measures to ensure you receive 
              only the best wheat straw. We stand behind the quality of our products and 
              are committed to your satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
