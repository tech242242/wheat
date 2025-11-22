import React, { useRef, useEffect, useState } from 'react'
import './ParallaxSection.css'

const ParallaxSection = () => {
  const sectionRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollPercent = Math.max(0, Math.min(1, 1 - (rect.top / window.innerHeight)))
        setScrollY(scrollPercent)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="parallax-section">
      <div 
        className="parallax-bg"
        style={{ transform: `translateY(${scrollY * 50}px)` }}
      ></div>
      
      <div className="parallax-content">
        <div className="container">
          <div className="parallax-text">
            <h2>From Farm to Your Doorstep</h2>
            <p>
              Experience the journey of premium wheat straw - carefully harvested from fertile fields, 
              naturally sun-dried, and delivered with the quality you deserve.
            </p>
            
            <div className="parallax-stats">
              <div className="parallax-stat">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Happy Farms</div>
              </div>
              <div className="parallax-stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Quality Score</div>
              </div>
              <div className="parallax-stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection
