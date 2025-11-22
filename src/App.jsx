import React from 'react'
import ParticleBackground from './components/ParticleBackground'
import AnimatedCursor from './components/AnimatedCursor'
import ScrollProgress from './components/ScrollProgress'
import LoadingAnimation from './components/LoadingAnimation'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import StatsCounter from './components/StatsCounter'
import ParallaxSection from './components/ParallaxSection'
import ProductShowcase from './components/ProductShowcase'
import InteractiveBale from './components/InteractiveBale'
import Products from './components/Products'
import WhyChoose from './components/WhyChoose'
import Industries from './components/Industries'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'
import './App.css'

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <AnimatedCursor />
      <ScrollProgress />
      <LoadingAnimation />
      <Header />
      <Hero />
      <About />
      <StatsCounter />
      <ParallaxSection />
      <ProductShowcase />
      <InteractiveBale />
      <Products />
      <WhyChoose />
      <Industries />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActionButton />
    </div>
  )
}

export default App
