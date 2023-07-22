import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: { 
    en: { 
      common: enCommon,
      home: enHome,
    },
  },
  ns: [
    "common",
    "home",
  ],
  defaultNS: "common",
});

i18n.languages = ["en"];
export default i18n;