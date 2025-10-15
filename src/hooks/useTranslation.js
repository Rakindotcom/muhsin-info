import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export const useTranslation = () => {
  const { language, isLoading } = useLanguage();
  
  const t = (key) => {
    // If still loading, return a placeholder or the key
    if (isLoading || !language) {
      return key;
    }
    
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        // Fallback to English if translation not found in current language
        if (language !== 'en') {
          let fallbackValue = translations['en'];
          for (const fallbackKey of keys) {
            if (fallbackValue && typeof fallbackValue === 'object') {
              fallbackValue = fallbackValue[fallbackKey];
            } else {
              return key; // Return key if even English translation not found
            }
          }
          return fallbackValue || key;
        }
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  };
  
  return { t, language, isLoading };
};