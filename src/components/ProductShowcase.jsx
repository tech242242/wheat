import React, { useState, useRef, useEffect } from 'react'
import './ProductShowcase.css'

const ProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState(0)
  const canvasRef = useRef(null)

  const products = [
    {
      id: 1,
      name: "Premium Wheat Straw Bales",
      description: "Clean, sun-dried, and tightly packed bales perfect for dairy farms and mushroom cultivation",
      features: ["Dust Controlled", "Uniform Size", "High Density", "Natural Color"],
      color: "#8B4513",
      image: "🌾"
    },
    {
      id: 2,
      name: "Rice Straw Bundles",
      description: "High-quality rice straw suitable for mulching, composting, and industrial applications",
      features: ["Eco-Friendly", "Multi-Purpose", "Seasonal Availability", "Custom Packaging"],
      color: "#D2B48C",
      image: "🌿"
    },
    {
      id: 3,
      name: "Compressed Straw Packs",
      description: "Space-efficient compressed straw packs for easy storage and transportation",
      features: ["Easy Storage", "Reduced Volume", "Cost Effective", "Quick Deployment"],
      color: "#A0522D",
      image: "📦"
    }
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height

    const drawBale3D = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw 3D bale
      const centerX = width / 2
      const centerY = height / 2
      const baleWidth = 200
      const baleHeight = 120
      const baleDepth = 60

      // Bale base (3D perspective)
      ctx.fillStyle = products[activeProduct].color
      
      // Front face
      ctx.fillRect(centerX - baleWidth/2, centerY - baleHeight/2, baleWidth, baleHeight)
      
      // Top face (3D effect)
      ctx.fillStyle = `${products[activeProduct].color}CC`
      ctx.beginPath()
      ctx.moveTo(centerX - baleWidth/2, centerY - baleHeight/2)
      ctx.lineTo(centerX - baleWidth/2 + baleDepth, centerY - baleHeight/2 - baleDepth/2)
      ctx.lineTo(centerX + baleWidth/2 + baleDepth, centerY - baleHeight/2 - baleDepth/2)
      ctx.lineTo(centerX + baleWidth/2, centerY - baleHeight/2)
      ctx.closePath()
      ctx.fill()

      // Side face (3D effect)
      ctx.fillStyle = `${products[activeProduct].color}99`
      ctx.beginPath()
      ctx.moveTo(centerX + baleWidth/2, centerY - baleHeight/2)
      ctx.lineTo(centerX + baleWidth/2 + baleDepth, centerY - baleHeight/2 - baleDepth/2)
      ctx.lineTo(centerX + baleWidth/2 + baleDepth, centerY + baleHeight/2 - baleDepth/2)
      ctx.lineTo(centerX + baleWidth/2, centerY + baleHeight/2)
      ctx.closePath()
      ctx.fill()

      // Draw straw texture
      ctx.strokeStyle = '#5D4037'
      ctx.lineWidth = 1
      for (let i = 0; i < 20; i++) {
        const x = centerX - baleWidth/2 + Math.random() * baleWidth
        const y = centerY - baleHeight/2 + Math.random() * baleHeight
        const length = 10 + Math.random() * 20
        
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + length, y + length * 0.3)
        ctx.stroke()
      }

      // Draw product icon
      ctx.font = '40px Arial'
      ctx.fillStyle = '#FFFFFF'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(products[activeProduct].image, centerX, centerY)
    }

    drawBale3D()
  }, [activeProduct])

  return (
    <section id="product-showcase" className="product-showcase">
      <div className="container">
        <div className="section-header">
          <h2>Premium Product Range</h2>
          <p>Explore our high-quality agricultural products with interactive 3D visualization</p>
        </div>

        <div className="showcase-content">
          <div className="product-controls">
            <div className="product-list">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`product-item ${activeProduct === index ? 'active' : ''}`}
                  onClick={() => setActiveProduct(index)}
                >
                  <div className="product-icon">{product.image}</div>
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="product-features">
              <h4>Key Features:</h4>
              <ul>
                {products[activeProduct].features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="product-visualization">
            <div className="canvas-container">
              <canvas
                ref={canvasRef}
                width={400}
                height={300}
                className="product-canvas"
              />
              <div className="visualization-controls">
                <button className="control-btn" title="Rotate Left">↶</button>
                <button className="control-btn" title="Zoom In">+</button>
                <button className="control-btn" title="Reset">⟲</button>
                <button className="control-btn" title="Zoom Out">-</button>
                <button className="control-btn" title="Rotate Right">↷</button>
              </div>
            </div>
            
            <div className="product-stats">
              <div className="stat">
                <div className="stat-value">98%</div>
                <div className="stat-label">Purity</div>
              </div>
              <div className="stat">
                <div className="stat-value">24-48h</div>
                <div className="stat-label">Delivery</div>
              </div>
              <div className="stat">
                <div className="stat-value">100%</div>
                <div className="stat-label">Natural</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
