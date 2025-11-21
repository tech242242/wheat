import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="logo">
          <span className="logo-icon">🌾</span>
          <span className="logo-text">Prime Crop Straw</span>
        </div>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#products" onClick={() => scrollToSection('products')}>Products</a></li>
          <li><a href="#why-choose" onClick={() => scrollToSection('why-choose')}>Why Choose Us</a></li>
          <li><a href="#industries" onClick={() => scrollToSection('industries')}>Industries</a></li>
          <li><a href="#process" onClick={() => scrollToSection('process')}>Process</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
