import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

export const supportedLngs = [
  "en",
  "ko",
  "jp",
  "zh-CN",
  "es",
  "fr",
  "de",
  "pt",
  "ru",
  "ar",
  "hi",
];

export const languageNames: { [key: string]: string } = {
  en: "English",
  ko: "한국어",
  jp: "日本語",
  "zh-CN": "中文",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  ru: "Русский",
  ar: "العربية",
  hi: "हिंदी",
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs,
    fallbackLng: "ko",
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
