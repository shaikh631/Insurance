import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Breadcrumb from './Component/Breadcrumb' 

function App() {
  return (
    <>
      <Header />
       <Breadcrumb /> 
      <Outlet />
      <Footer />
    </>
  )
}

export default App;