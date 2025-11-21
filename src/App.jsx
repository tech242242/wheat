import React from 'react'
import LoadingAnimation from './components/LoadingAnimation'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import StatsCounter from './components/StatsCounter'
import Products from './components/Products'
import WhyChoose from './components/WhyChoose'
import Industries from './components/Industries'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <LoadingAnimation />
      <Header />
      <Hero />
      <About />
      <StatsCounter />
      <Products />
      <WhyChoose />
      <Industries />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
