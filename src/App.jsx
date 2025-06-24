import React from 'react';
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        
      </Routes>
      <Footer />
    </>
  )
}

export default App