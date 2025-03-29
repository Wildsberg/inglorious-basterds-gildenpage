import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  de: {
    translation: {
      tagline: "Path of Exile 2 Gilde",
      intro: "Willkommen bei den Inglorious Basterds – einer Gilde erfahrener ARPG-Spieler mit einem Altersdurchschnitt von ca. 35 Jahren.",
      invite: "Wenn du 25+ bist und Lust auf eine entspannte, aber motivierte Community hast, dann schau bei uns im Discord vorbei!",
      joinDiscord: "Zum Discord",
      changeLanguage: "Sprache wechseln auf Englisch"
    }
  },
  en: {
    translation: {
      tagline: "Path of Exile 2 Guild",
      intro: "Welcome to Inglorious Basterds – a guild of seasoned ARPG players with an average age of around 35.",
      invite: "If you're 25+ and looking for a chill but driven community, feel free to join our Discord!",
      joinDiscord: "Join our Discord",
      changeLanguage: "Switch language to German"
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'de',
  fallbackLng: 'de',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
