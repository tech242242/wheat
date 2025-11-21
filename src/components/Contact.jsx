import React, { useEffect, useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('contact')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Office Address',
      details: ['Add your location here', 'City, State, ZIP Code']
    },
    {
      icon: '📞',
      title: 'Phone Number',
      details: ['Add your phone number here', 'Mon-Fri: 8:00 AM - 6:00 PM']
    },
    {
      icon: '📧',
      title: 'Email Address',
      details: ['Add your email here', 'We respond within 24 hours']
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed']
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Need premium wheat straw? Contact our team and we'll assist you quickly.</p>
        </div>

        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'fade-in-left' : ''}`}>
            <h3>Contact Information</h3>
            <p className="contact-description">
              Ready to discuss your wheat straw requirements? Get in touch with us for 
              competitive pricing, bulk orders, and customized solutions.
            </p>
            
            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    {item.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-cta">
              <h4>Why Choose Us?</h4>
              <ul>
                <li>✓ Premium Quality Wheat Straw</li>
                <li>✓ Competitive Pricing</li>
                <li>✓ Reliable Supply</li>
                <li>✓ Fast Delivery</li>
              </ul>
            </div>
          </div>

          <form 
            className={`contact-form ${isVisible ? 'fade-in-right' : ''}`} 
            onSubmit={handleSubmit}
          >
            <h3>Send Us a Message</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your requirements, quantity needed, and any specific details..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <span className="btn-icon">🚚</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
