import React, { useEffect, useState } from 'react'
import './Industries.css'

const Industries = () => {
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

    const section = document.getElementById('industries')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const industries = [
    {
      icon: '🐄',
      name: 'Dairy & Livestock Farms',
      description: 'High-quality feed and bedding solutions for healthy livestock',
      applications: ['Cattle Feed', 'Animal Bedding', 'Feed Mixing']
    },
    {
      icon: '🐓',
      name: 'Poultry Bedding',
      description: 'Clean and absorbent bedding material for poultry farms',
      applications: ['Chicken Coops', 'Duck Farms', 'Turkey Housing']
    },
    {
      icon: '🍄',
      name: 'Mushroom Cultivation',
      description: 'Perfect substrate material for optimal mushroom growth',
      applications: ['Growing Medium', 'Compost Base', 'Substrate Mix']
    },
    {
      icon: '⚡',
      name: 'Biomass & Energy Plants',
      description: 'Sustainable biomass fuel source for renewable energy',
      applications: ['Biofuel', 'Power Generation', 'Renewable Energy']
    },
    {
      icon: '📦',
      name: 'Straw Boards & Packaging',
      description: 'Raw material for eco-friendly packaging and boards',
      applications: ['Eco Packaging', 'Straw Boards', 'Sustainable Materials']
    },
    {
      icon: '🌍',
      name: 'Exporters & Traders',
      description: 'Bulk supply solutions for international markets',
      applications: ['International Export', 'Bulk Trading', 'Global Supply']
    }
  ]

  return (
    <section id="industries" className="industries">
      <div className="container">
        <div className="section-header">
          <h2>Industries We Serve</h2>
          <p>Providing premium wheat straw solutions across diverse sectors and applications</p>
        </div>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className={`industry-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="industry-icon">{industry.icon}</div>
              <h3>{industry.name}</h3>
              <p className="industry-description">{industry.description}</p>
              <div className="applications">
                <h4>Applications:</h4>
                <div className="application-tags">
                  {industry.applications.map((app, idx) => (
                    <span key={idx} className="application-tag">{app}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`industries-footer ${isVisible ? 'fade-in-up' : ''}`}>
          <p>
            <strong>Looking for a specific application?</strong> We provide customized solutions 
            for various industrial needs. Contact us to discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Industries
