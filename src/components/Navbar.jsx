import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'products', label: 'Products' },
    { id: 'why-choose', label: 'Why Choose Us' },
    { id: 'industries', label: 'Industries' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveItem(sectionId)
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <div className="logo-icon">🌾</div>
          <div className="logo-text">
            <span className="logo-primary">Prime Crop</span>
            <span className="logo-secondary">Straw</span>
          </div>
        </div>
        
        {/* Navigation Menu */}
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <div 
              key={item.id}
              className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              <span className="nav-label">{item.label}</span>
              <div className="nav-indicator"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="nav-actions">
          <button 
            className="nav-button"
            onClick={() => scrollToSection('contact')}
          >
            <span className="button-text">Get Quote</span>
            <span className="button-icon">📞</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  )
}

export default Navbar
