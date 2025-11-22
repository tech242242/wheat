import React, { useState, useEffect } from 'react'
import './VoiceSearch.css'

const VoiceSearch = () => {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    setIsSupported('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)
  }, [])

  const startListening = () => {
    if (!isSupported) return

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.continuous = false
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.onstart = () => {
      setIsListening(true)
      setTranscript('')
    }

    recognition.onresult = (event) => {
      const current = event.resultIndex
      const result = event.results[current][0].transcript
      setTranscript(result)
    }

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error)
      setIsListening(false)
    }

    recognition.onend = () => {
      setIsListening(false)
      if (transcript) {
        handleVoiceCommand(transcript)
      }
    }

    recognition.start()
  }

  const handleVoiceCommand = (command) => {
    const lowerCommand = command.toLowerCase()
    
    if (lowerCommand.includes('price') || lowerCommand.includes('cost')) {
      scrollToSection('products')
    } else if (lowerCommand.includes('contact') || lowerCommand.includes('call')) {
      scrollToSection('contact')
    } else if (lowerCommand.includes('about') || lowerCommand.includes('company')) {
      scrollToSection('about')
    } else if (lowerCommand.includes('product') || lowerCommand.includes('straw')) {
      scrollToSection('products')
    } else {
      // Default action
      scrollToSection('products')
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!isSupported) return null

  return (
    <div className="voice-search">
      <button
        className={`voice-button ${isListening ? 'listening' : ''}`}
        onClick={startListening}
        disabled={isListening}
      >
        <div className="voice-icon">
          {isListening ? '🎤' : '🎙️'}
        </div>
        <div className="voice-pulse"></div>
      </button>
      
      {transcript && (
        <div className="voice-transcript">
          <span>You said: "{transcript}"</span>
        </div>
      )}
    </div>
  )
}

export default VoiceSearch
