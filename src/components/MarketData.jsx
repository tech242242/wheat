import React, { useState, useEffect } from 'react'
import './MarketData.css'

const MarketData = () => {
  const [marketData, setMarketData] = useState({
    temperature: '24°C',
    humidity: '65%',
    price: '₹1,200/ton',
    trend: 'up'
  })

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
      
      // Simulate market data changes
      setMarketData(prev => ({
        ...prev,
        price: `₹${Math.floor(1100 + Math.random() * 200)}/ton`,
        temperature: `${Math.floor(20 + Math.random() * 10)}°C`,
        trend: Math.random() > 0.5 ? 'up' : 'down'
      }))
    }, 30000) // Update every 30 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="market-data-widget">
      <div className="market-header">
        <h4>Live Market Data</h4>
        <span className="time">{currentTime.toLocaleTimeString()}</span>
      </div>
      
      <div className="market-stats">
        <div className="market-stat">
          <div className="stat-icon">🌡️</div>
          <div className="stat-info">
            <div className="stat-value">{marketData.temperature}</div>
            <div className="stat-label">Temperature</div>
          </div>
        </div>
        
        <div className="market-stat">
          <div className="stat-icon">💧</div>
          <div className="stat-info">
            <div className="stat-value">{marketData.humidity}</div>
            <div className="stat-label">Humidity</div>
          </div>
        </div>
        
        <div className="market-stat">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <div className="stat-value">
              {marketData.price}
              <span className={`trend ${marketData.trend}`}>
                {marketData.trend === 'up' ? '↗' : '↘'}
              </span>
            </div>
            <div className="stat-label">Straw Price</div>
          </div>
        </div>
      </div>
      
      <div className="market-footer">
        <span className="update-info">Updates every 30 seconds</span>
      </div>
    </div>
  )
}

export default MarketData
