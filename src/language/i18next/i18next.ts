// i18next start
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// i18next end

// json-language start
import enJson from "../json/en.json";
import ruJson from "../json/ru.json";
// json-language end

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enJson,
    },
    ru: {
      translation: ruJson,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
