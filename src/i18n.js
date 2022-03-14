import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "gr",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          main: {
            over20years: "OVER 20 YEARS OF EXCELLENCE",
            welcome: "WELCOME TO JUDO CLUB"
          },
        },
      },

      gr: {
        translation: {
          main: {
            over20years: "20 ΧΡΟΝΙΑ ΕΠΙΤΥΧΙΑΣ",
            welcome: "ΚΑΛΩΣΟΡΙΣΑΤΕ ΣΤΟΝ ΣΥΛΛΟΓΟ ΜΑΣ"
          },
        },
      },
    },
  });

export default i18n;
