import React, { useEffect, useState } from 'react'
import './Products.css'

const Products = () => {
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

    const section = document.getElementById('products')
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const products = [
    {
      icon: '🌾',
      title: 'Wheat Straw Bales',
      description: 'Premium quality wheat straw bales for various agricultural and industrial applications',
      features: [
        'Clean, dust-controlled, and sun-dried',
        'Uniform bale size and weight',
        'Suitable for dairy farms, cattle feed mixing',
        'Mushroom farming and biomass use',
        'Available in small, medium, and large compressed bale options'
      ],
      color: '#4a7c1f'
    },
    {
      icon: '🌿',
      title: 'Rice Straw & Other Crop Residue',
      description: 'Custom crop residue solutions for diverse industrial needs',
      features: [
        'Custom orders available based on season',
        'Suitable for mulching and composting',
        'Industrial applications',
        'Various sizes and packaging options',
        'Sustainable and eco-friendly'
      ],
      color: '#2d5016'
    }
  ]

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Products</h2>
          <p>High-quality agricultural products tailored to meet your specific requirements</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`product-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="product-header">
                <div className="product-icon" style={{ backgroundColor: product.color }}>
                  {product.icon}
                </div>
                <h3>{product.title}</h3>
              </div>
              <p className="product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-bullet">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="product-footer">
                <button className="inquiry-btn" style={{ backgroundColor: product.color }}>
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`products-note ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="note-icon">💡</div>
          <p>
            <strong>Custom Solutions Available:</strong> We can customize bale sizes, packaging, 
            and specifications according to your specific requirements. Contact us for bulk orders 
            and seasonal availability.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Products
