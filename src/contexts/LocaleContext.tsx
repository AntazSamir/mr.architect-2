import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, useTranslations, TranslationKeys } from '@/lib/i18n';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('mr-architect-locale');
    if (saved && ['en', 'es', 'fr'].includes(saved)) {
      return saved as Locale;
    }
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (['en', 'es', 'fr'].includes(browserLang)) {
      return browserLang as Locale;
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('mr-architect-locale', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useTranslations(locale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
