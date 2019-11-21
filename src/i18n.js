import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { translationEN } from 'locales/en/translations'
import { translationRO } from 'locales/ro/translations'
import { translationDE } from 'locales/de/translations'

const resources = {
  en: {
    translation: translationEN
  },
  ro: {
    translation: translationRO
  },
  de: {
    translation: translationDE
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    interpolation: { escapeValue: false }
  })

export default i18n