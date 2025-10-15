import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(null); // Start with null, then set default
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has already selected a language
    const savedLanguage = localStorage.getItem('preferred-language');

    if (savedLanguage) {
      setLanguage(savedLanguage);
      // Apply the language settings immediately
      document.documentElement.lang = savedLanguage === 'bn' ? 'bn' : 'en';
      document.body.className = savedLanguage === 'bn' ? 'lang-bn' : 'lang-en';
      document.title = savedLanguage === 'bn' ? 'মুহসিন মাশকুর তথ্য' : 'Muhsin Mashkur Info';
    } else {
      // Show popup for first-time visitors and set default to English
      setShowLanguagePopup(true);
      setLanguage('en');
      document.documentElement.lang = 'en';
      document.body.className = 'lang-en';
      document.title = 'Muhsin Mashkur Info';
    }
    setIsLoading(false);
  }, []);

  // Apply language settings whenever language changes
  useEffect(() => {
    if (language) {
      document.documentElement.lang = language === 'bn' ? 'bn' : 'en';
      document.body.className = language === 'bn' ? 'lang-bn' : 'lang-en';
      document.title = language === 'bn' ? 'মুহসিন মাশকুর তথ্য' : 'Muhsin Mashkur Info';
    }
  }, [language]);

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    localStorage.setItem('preferred-language', selectedLanguage);
    setShowLanguagePopup(false);

    // Update document language attribute
    document.documentElement.lang = selectedLanguage === 'bn' ? 'bn' : 'en';

    // Update body class for font styling
    document.body.className = selectedLanguage === 'bn' ? 'lang-bn' : 'lang-en';

    // Update document title
    document.title = selectedLanguage === 'bn' ? 'মুহসিন মাশকুর তথ্য' : 'Muhsin Mashkur Info';
  };

  const switchLanguage = (newLanguage) => {
    selectLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{
      language,
      showLanguagePopup,
      selectLanguage,
      switchLanguage,
      isEnglish: language === 'en',
      isBangla: language === 'bn',
      isLoading
    }}>
      {children}
    </LanguageContext.Provider>
  );
};