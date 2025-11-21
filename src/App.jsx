import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import  Products from './components/Products'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
     <Poducts />
      <About />
      <Footer />
    </div>
  )
}

export default App
