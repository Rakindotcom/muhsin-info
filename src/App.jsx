import React from 'react';
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from './Pages/404'
import ConsultancyPage from './Pages/ConsultancyPage';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultancy" element={<ConsultancyPage />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App