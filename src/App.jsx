import React from 'react';
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from './Pages/404'
import ConsultancyPage from './Pages/ConsultancyPage';
import Media from './Pages/Media';
import { LanguageProvider } from './contexts/LanguageContext';
import LanguagePopup from './Components/LanguagePopup';

const App = () => {
  return (
    <LanguageProvider>
      <LanguagePopup />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultancy" element={<ConsultancyPage />} />
        <Route path="/media" element={<Media />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  )
}

export default App