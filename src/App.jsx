import { useState } from 'react'
import './App.css'
import { DarkModeProvider } from './Context/DarkModeContext'
import Header from './Header/Header'
import Hero from './Component/Hero'
import Services from './Component/Services'
import About from './Component/About'
import Testimonials from './Component/Testimonials'
import Pricing from './Component/Pricing'
import Contact from './Component/Contact'
import Footer from './Fotter/Footer'
import AdminDashboard from './Component/AdminDashboard'

function App() {
  const [showAdmin, setShowAdmin] = useState(false)

  return (
    <DarkModeProvider>
      <>
        <Header />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </>
    </DarkModeProvider>
  )
}

export default App
