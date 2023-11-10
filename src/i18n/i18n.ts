import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { translations } from "./translations"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: ["pl", "en"],
    resources: translations,
  })

export default i18n
