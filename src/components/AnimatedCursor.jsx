import React, { useEffect, useState } from 'react'
import './AnimatedCursor.css'

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Check if hovering over clickable element
      const target = e.target
      const isClickable = target.closest('button, a, [role="button"], input, select, textarea')
      setIsPointer(isClickable)
    }

    document.addEventListener('mousemove', updateCursor)
    
    return () => {
      document.removeEventListener('mousemove', updateCursor)
    }
  }, [])

  return (
    <>
      <div 
        className={`cursor-dot ${isPointer ? 'pointer' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      <div 
        className={`cursor-ring ${isPointer ? 'pointer' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
    </>
  )
}

export default AnimatedCursor
