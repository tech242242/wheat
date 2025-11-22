import React, { useRef, useEffect, useState } from 'react'
import './InteractiveBale.css'

const InteractiveBale = () => {
  const canvasRef = useRef(null)
  const [rotation, setRotation] = useState(0)
  const [scale, setScale] = useState(1)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    const drawBale = () => {
      const width = canvas.width
      const height = canvas.height
      
      ctx.clearRect(0, 0, width, height)
      
      // Save context
      ctx.save()
      ctx.translate(width / 2, height / 2)
      ctx.rotate(rotation * Math.PI / 180)
      ctx.scale(scale, scale)

      // Draw 3D cylindrical bale
      const baleRadius = 80
      const baleHeight = 120
      
      // Bale sides
      ctx.fillStyle = '#8B4513'
      ctx.beginPath()
      ctx.ellipse(0, -baleHeight/2, baleRadius, baleRadius/3, 0, 0, 2 * Math.PI)
      ctx.fill()
      
      ctx.beginPath()
      ctx.ellipse(0, baleHeight/2, baleRadius, baleRadius/3, 0, 0, 2 * Math.PI)
      ctx.fill()

      // Bale body
      ctx.fillStyle = '#A0522D'
      ctx.beginPath()
      ctx.moveTo(-baleRadius, -baleHeight/2)
      ctx.lineTo(-baleRadius, baleHeight/2)
      ctx.lineTo(baleRadius, baleHeight/2)
      ctx.lineTo(baleRadius, -baleHeight/2)
      ctx.closePath()
      ctx.fill()

      // Straw texture
      ctx.strokeStyle = '#5D4037'
      ctx.lineWidth = 1
      for (let i = 0; i < 30; i++) {
        const angle = (i / 30) * 2 * Math.PI
        const x1 = baleRadius * Math.cos(angle)
        const y1 = -baleHeight/2
        const x2 = baleRadius * Math.cos(angle)
        const y2 = baleHeight/2
        
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }

      // Restore context
      ctx.restore()

      animationId = requestAnimationFrame(drawBale)
    }

    drawBale()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [rotation, scale])

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    
    const sensitivity = 0.5
    setRotation(prev => prev + e.movementX * sensitivity)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e) => {
    e.preventDefault()
    const zoomSensitivity = 0.001
    const newScale = scale + e.deltaY * zoomSensitivity
    setScale(Math.max(0.5, Math.min(2, newScale)))
  }

  return (
    <div className="interactive-bale-section">
      <div className="container">
        <div className="section-header">
          <h2>Interactive Product Viewer</h2>
          <p>Drag to rotate • Scroll to zoom • Explore our premium wheat straw bales in 3D</p>
        </div>

        <div className="bale-viewer">
          <div 
            className="canvas-wrapper"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
          >
            <canvas
              ref={canvasRef}
              width={400}
              height={400}
              className="bale-canvas"
            />
            <div className="viewer-overlay">
              <div className="instruction">Drag to Rotate • Scroll to Zoom</div>
            </div>
          </div>

          <div className="bale-info">
            <h3>Premium Wheat Straw Bale</h3>
            <div className="specs">
              <div className="spec">
                <span className="spec-label">Weight:</span>
                <span className="spec-value">20-25 kg</span>
              </div>
              <div className="spec">
                <span className="spec-label">Dimensions:</span>
                <span className="spec-value">90×45×35 cm</span>
              </div>
              <div className="spec">
                <span className="spec-label">Density:</span>
                <span className="spec-value">High</span>
              </div>
              <div className="spec">
                <span className="spec-label">Moisture:</span>
                <span className="spec-value">{"<12%"}</span>
              </div>
            </div>

            <div className="quality-badges">
              <div className="badge">
                <span className="badge-icon">✅</span>
                <span>Dust Controlled</span>
              </div>
              <div className="badge">
                <span className="badge-icon">☀️</span>
                <span>Sun Dried</span>
              </div>
              <div className="badge">
                <span className="badge-icon">📏</span>
                <span>Uniform Size</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InteractiveBale
