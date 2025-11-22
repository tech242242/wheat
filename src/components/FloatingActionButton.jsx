import React, { useState } from 'react'
import './FloatingActionButton.css'

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    { icon: '📞', label: 'Call Now', action: () => window.open('tel:+1234567890') },
    { icon: '💬', label: 'WhatsApp', action: () => window.open('https://wa.me/1234567890') },
    { icon: '📧', label: 'Email', action: () => window.open('mailto:info@primecropstraw.com') },
    { icon: '📍', label: 'Location', action: () => window.open('https://maps.google.com') }
  ]

  return (
    <div className="fab-container">
      <div className={`fab-actions ${isOpen ? 'open' : ''}`}>
        {actions.map((action, index) => (
          <button
            key={index}
            className="fab-action"
            onClick={action.action}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <span className="fab-icon">{action.icon}</span>
            <span className="fab-label">{action.label}</span>
          </button>
        ))}
      </div>
      
      <button 
        className={`fab-main ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="fab-main-icon">+</span>
      </button>
    </div>
  )
}

export default FloatingActionButton
