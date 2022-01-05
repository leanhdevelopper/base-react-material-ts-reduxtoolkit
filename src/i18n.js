import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';

import translationEN from 'utils/locales/en/translation.json';
import translationDE from 'utils/locales/de/translation.json';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
};

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
