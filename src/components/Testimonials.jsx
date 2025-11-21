import React, { useState, useEffect } from 'react'
import './Testimonials.css'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Green Fields Dairy",
      text: "Prime Crop Straw has been our trusted supplier for over 2 years. The quality of wheat straw is consistently excellent, and their delivery is always on time.",
      rating: 5,
      image: "👨‍🌾"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Mushroom Farms Ltd.",
      text: "The clean, dust-free straw is perfect for our mushroom cultivation. We've seen a 30% improvement in yield since switching to Prime Crop Straw.",
      rating: 5,
      image: "👩‍🔬"
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Eco Packaging Solutions",
      text: "As an exporter, we need reliable quality and consistent supply. Prime Crop Straw has never disappointed us in both aspects.",
      rating: 4,
      image: "👨‍💼"
    }
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

    const section = document.getElementById('testimonials')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Our Clients Say</h2>
          <p>Don't just take our word for it - hear from our satisfied customers</p>
        </div>

        <div className={`testimonial-container ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">
                {testimonials[currentTestimonial].text}
              </p>
              <div className="rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
            </div>
            
            <div className="testimonial-author">
              <div className="author-image">
                {testimonials[currentTestimonial].image}
              </div>
              <div className="author-info">
                <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                <p className="author-company">{testimonials[currentTestimonial].company}</p>
              </div>
            </div>
          </div>

          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
