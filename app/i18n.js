import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import fr from "./locales/fr.json";
import pt from "./locales/pt.json";
import de from "./locales/de.json";
import ar from "./locales/ar.json";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  pt: { translation: pt },
  de: { translation: de },
  ar: { translation: ar },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
