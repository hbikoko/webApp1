import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Already existing translations
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// Add these if you have them
import translationSW from './locales/sw/translation.json';
import translationZU from './locales/zulu/translation.json';

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  sw: { translation: translationSW },
  zu: { translation: translationZU },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

