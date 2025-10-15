import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguagePopup = () => {
  const { showLanguagePopup, selectLanguage } = useLanguage();

  if (!showLanguagePopup) return null;

  const handleLanguageSelect = (lang) => {
    selectLanguage(lang);
  };

  return (
    <div className="language-popup-overlay">
      <div className="language-popup">
        <div className="mb-6">
          <Globe className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Choose Your Language</h2>
          <p className="text-gray-600">আপনার ভাষা নির্বাচন করুন</p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => handleLanguageSelect('en')}
            className="w-full py-4 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            English
          </button>
          
          <button
            onClick={() => handleLanguageSelect('bn')}
            className="w-full py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            style={{ fontFamily: 'Tiro Bangla, serif' }}
          >
            বাংলা
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          You can change this later from the language button
        </p>
      </div>
    </div>
  );
};

export default LanguagePopup;