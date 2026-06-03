import './App.css'
import { DarkModeProvider } from './Context/DarkModeContext'
import Header from './Header/Header'
import Hero from './Component/Hero'
import Services from './Component/Services'
import About from './Component/About'
import Contact from './Component/Contact'
import Footer from './Fotter/Footer'

function App() {
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
