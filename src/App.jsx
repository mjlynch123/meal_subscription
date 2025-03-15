import { useState } from 'react'
import Hero from './Components/Hero'
import HowItWorks from './Components/HowItWorks'
import Pricing from './Components/Pricing'
import FAQ from './Components/FAQ'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-white'>
      <Hero />
      <HowItWorks />
      <Pricing />
      <FAQ />
    </div>
  )
}

export default App
