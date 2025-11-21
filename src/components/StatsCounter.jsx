import React, { useEffect, useState, useRef } from 'react'
import './StatsCounter.css'

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    { number: 5000, suffix: '+', label: 'Bales Supplied', icon: '📦' },
    { number: 250, suffix: '+', label: 'Happy Clients', icon: '😊' },
    { number: 50, suffix: '+', label: 'Industries Served', icon: '🏭' },
    { number: 98, suffix: '%', label: 'Client Satisfaction', icon: '⭐' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-number">
                  <Counter target={stat.number} isVisible={isVisible} />
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Counter = ({ target, isVisible }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [target, isVisible])

  return <span className="count">{count}</span>
}

export default StatsCounter
