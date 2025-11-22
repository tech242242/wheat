import React, { useState, useRef, useEffect } from 'react'
import './AIChatAssistant.css'

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Prime Crop Straw assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Our premium wheat straw bales are available in small, medium, and large sizes. Which size are you interested in?",
        "We offer competitive pricing for bulk orders. Could you let me know the quantity you need?",
        "Delivery typically takes 24-48 hours depending on your location. Where are you located?",
        "All our straw is sun-dried and dust-controlled for maximum quality. Perfect for dairy farms and mushroom cultivation!",
        "We provide custom packaging solutions. Tell me about your specific requirements!"
      ]
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      
      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const quickQuestions = [
    "Pricing?",
    "Delivery time?",
    "Bulk orders?",
    "Quality standards?"
  ]

  return (
    <div className="ai-chat-assistant">
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-title">
            <div className="bot-avatar">🌾</div>
            <div className="bot-info">
              <h4>Straw Assistant</h4>
              <span className="status">Online</span>
            </div>
          </div>
          <button 
            className="close-chat"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              <div className="message-content">
                {message.text}
              </div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot-message">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="quick-questions">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              className="quick-question"
              onClick={() => setInputMessage(question)}
            >
              {question}
            </button>
          ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about pricing, delivery, or quality..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button 
            className="send-button"
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
          >
            📤
          </button>
        </div>
      </div>

      <button 
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="chat-icon">💬</span>
        <span className="notification-dot"></span>
      </button>
    </div>
  )
}

export default AIChatAssistant
