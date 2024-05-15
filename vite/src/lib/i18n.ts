import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tHeaderEn from "./locales/en/components/Header.json";
import tHeaderKo from "./locales/ko/components/Header.json";
import tSlimeCardEn from "./locales/en/components/SlimeCard.json";
import tSlimeCardKo from "./locales/ko/components/SlimeCard.json";
import tHomeEn from "./locales/en/pages/home.json";
import tHomeKo from "./locales/ko/pages/home.json";

const resources = {
  en: {
    translation: { ...tHeaderEn, ...tSlimeCardEn, ...tHomeEn },
  },
  ko: {
    translation: { ...tHeaderKo, ...tSlimeCardKo, ...tHomeKo },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
