import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enStudies from "./locales/en/studies.json";
import enPortfolio from "./locales/en/portfolio.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: { 
    en: { 
      common: enCommon,
      home: enHome,
      studies: enStudies,
      portfolio: enPortfolio,
    },
  },
  ns: [
    "common",
    "home",
    "studies",
    "portfolio",
  ],
  defaultNS: "common",
});

i18n.languages = ["en"];
export default i18n;