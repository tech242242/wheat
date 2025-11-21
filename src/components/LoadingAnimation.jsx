import React, { useEffect, useState } from 'react'
import './LoadingAnimation.css'

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="wheat-loader">
          <div className="wheat-stalk"></div>
          <div className="wheat-stalk"></div>
          <div className="wheat-stalk"></div>
          <div className="wheat-grain"></div>
        </div>
        <div className="loading-text">
          <span className="loading-title">Prime Crop Straw</span>
          <span className="loading-subtitle">Loading Premium Quality...</span>
        </div>
      </div>
    </div>
  )
}

export default LoadingAnimation
