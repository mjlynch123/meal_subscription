import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './Components/Hero'
import HowItWorks from './Components/HowItWorks'
import Pricing from './Components/Pricing'
import Features from './Components/Features'
import Testimonials from './Components/Testimonials'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white'>
      <Hero />
      <HowItWorks />
      <Pricing />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />

    </div>
  )
}

export default App
