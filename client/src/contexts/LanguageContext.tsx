import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, LanguageCode, TranslationKey } from '../i18n/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: TranslationKey) => string;
  isInitialized: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Initialize state based on localStorage immediately to prevent flash
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('monkeytranslate-language') as LanguageCode;
      if (savedLanguage && translations[savedLanguage]) {
        return savedLanguage;
      }
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0] as LanguageCode;
      if (translations[browserLang]) {
        return browserLang;
      }
    }
    return 'en';
  });

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Mark as initialized after first render to prevent flash
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('monkeytranslate-language', lang);
  };

  const t = (key: TranslationKey): string => {
    const langTranslations = translations[language] as typeof translations.en;
    return langTranslations?.[key] || translations.en[key] || key;
  };

  // Don't render children until context is properly initialized
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isInitialized }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
