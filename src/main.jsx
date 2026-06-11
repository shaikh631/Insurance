import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App'
import Home from './Component/Home'
import Services from './Component/Services'
import HealthInsurance from './Component/Services/HealthInsurance'
import HomeInsurance from './Component/Services/HomeInsurance'
import LifeInsurance from './Component/Services/LifeInsurance'
import TravelInsurance from './Component/Services/TravelInsurance'
import VehicleInsurance from './Component/Services/VehicleInsurance'
import About from './Component/About'
import Contact from './Component/Contact'
import UserContact from './Component/UserContact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true,            element: <Home /> },
      { path: 'services',       element: <Services /> },
      { path: 'about',       element: <About/>},
      // { path: 'contact',       element: <Contact /> },
      { path: 'contact',    element: <UserContact /> },
      { path: 'Health-Insurance',   element: <HealthInsurance /> },
      { path: 'Home-Insurance',     element: <HomeInsurance /> },
      { path: 'Life-Insurance',     element: <LifeInsurance /> },
      { path: 'Travel-Insurance',   element: <TravelInsurance /> },
      { path: 'Vehicle-Insurance',  element: <VehicleInsurance /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)