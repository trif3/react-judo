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
          gymcard: {
            judo: "Judo develops self-discipline and respect for oneself and others.  It provides the means for learning self-confidence, concentration,  and leadership skills, as well as physical coordination, power, and flexibility",
            jiujitsu: "Jiu Jitsu is a grappling/wrestling based discipline and it promotes the principle that a smaller, weaker person using leverage and proper technique can successfully defend themselves against a bigger, stronger assailant.",
            pancratium: "It's a combination of wrestling and boxing. The trainee in the pancratium learns basic techniques of self-defense while at the same time the culture and the moral principles of ancient Greece",
            subtitle: "Clitomachus judo club offers programmes for everyone from children through seniors to elite athletes competing at international level.",
            title: "CHOOSE PROGRAM"
          },
        },
      },

      gr: {
        translation: {
          main: {
            over20years: "20 ΧΡΟΝΙΑ ΕΠΙΤΥΧΙΑΣ",
            welcome: "ΚΑΛΩΣΟΡΙΣΑΤΕ ΣΤΟΝ ΣΥΛΛΟΓΟ ΜΑΣ"
          },
          gymcard: {
            judo: "Το τζούντο είνα η τέχνη που διδάσκει την αυτοπειθαρχία, την συγκέντρωση και την αυτοπεποίθηση σε έναν αθλητή αλλά κυρίως του μαθαίνει τον σεβασμό απέναντι στον ευτό του αλλά και απέναντι στον αντίπαλο. Με το άθλημα αυτό  φυσικό συντονισμό, την δύναμη και την ευελιξία του σώματος",
            jiujitsu: "Το Jiu Jitsu είναι μια πολεμική τέχνη που εστιάζει στην αρπαγή και ειδικά στην πάλη εδάφους. Διδάσκει ότι ένα μικρότερο και πιο αδύναμο άτομο μπορεί να αμυνθεί με επιτυχία απέναντι σ’ έναν μεγαλύτερο και δυνατότερο επιτιθέμενο, χρησιμοποιώντας την κατάλληλη τεχνική.",
            pancratium: "Το Παγκράτιο είναι ένα αρχαιοελληνικό άθλημα, το οποίο περιλαμβανόταν στο πρόγραμμα των αρχαίων Ολυμπιακών Αγώνων.  Ο ασκούμενος στο Παγκράτιο μαθαίνει στη βασική εκπαίδευση τις τεχνικές της αυτοάμυνας με γροθιές, ρίψεις και ακινητοποιήσεις.",
            subtitle: "Ο σύλλογος τζούντo Κλειτόμαχος προσφέρει προγράμματα για 'όλες τις ηλικίες από παιδιά έως ενήλικες και από αρχάριους έως προχωρημένους αθλητές που αγωνίζονται σε διεθνές επίπεδο.",
            title: "ΤΑ ΑΘΛΗΜΑΤΑ ΜΑΣ",
          },
        },
      },
    },
  });

export default i18n;
