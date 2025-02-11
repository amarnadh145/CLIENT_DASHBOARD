import React from 'react'
import LandingPage from './Client/pages/LandingPage'
import { Route, Routes } from 'react-router-dom'
import ProductMenu from './Client/components/ProductMenu'
import './App.css'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:firmId/:firmName" element={< ProductMenu />} />
      </Routes>
    </div>
  )
}

export default App
