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
          member: {
            paragraph: 'We offer regular training sessions for all judoka aged 7 years old onwards. We have a mix of international competitors to beginners all sharing the dojo at the same time, so no matter what your goal is, we will help you achieve it.'
          },
          navbar: {
            home: "HOME",
            classes: "CLASSES",
            schedule: "SCHEDULE",
            trainers: "TRAINERS",
            contact: "CONTACT",
            clitomachus: "CLITOMACHUS",
          },
          classes: {
            title: "OUR CLASSES",
            subtitle: "The Clitomachus offers a comprehensive timetable of Judo classes for kids, teens and adults. We regularly run Adult Beginners Courses, as well as classes for Junior Beginners, Intermediate Judo and Advanced Judo",
          },
          buttons: {
            junior: "Junior",
            senior: "Senior",
            intermediate: "Intermediate",
            advanced: "Advanced",
          },
          results: {
              junior: "JUNIOR",
              senior: "SENIOR",
              intermediate: "INTERMEDIATE",
              advanced: "ADVANCED",

              output_junior: "At Clitomachus Judo Club we take children on from the age of 7 years old. Judo gives kids a confidence in their physical health and ability, it teaches them to respect themselves and others for in judo without a partner there is no practice. Most of all learning judo is FUN and challenging and often can lead to a sport for life.",
              output_senior: "The senior classes at Clitomachus judo Club are for anyone aged 16 or older. Whatever your level you are welcome on our senior mat. The normal format for every session is a warm-up with stretching, standing or ground work technique and some free practice which is an opportunity for participants to test their skills.",
              output_intermediate: "Our intermediate classes are tailored for those juniors who have completed beginners courses and are looking to continue their judo training. This level links beginners up to the age of 12 to the advanced junior class. The emphasis in these classes is fun and technical development.  The classes are age specific and will develop your child’s judo as they grow older.",
              output_advanced: "The Advanced Class is aimed at athletes of all ages who want to be challenged. Some of the training group regularly attend competitions and camps around the country (and Europe).",
          },
          schedule: {
            title: "CLASSES SCHEDULE",
            subtitle: "We offer a variety of training sessions for all levels of judoka. If you are interested, please see the training times below.",
          },
          schedulelinks: {
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
          },
          table: {
             jb: "Junior Beginners",
             sb: "Senior Beginners",
             ji: "Junior Intermediate",
             si: "Senior Intermediate",
             a: "Advanced",
          },
          trainers: {
            title: "INSTRUCTORS",
            subtitle: "Οur team consists of the most renowned trainers. Their combined experiences spans all levels of competition from regional to the highest level.",
            nameAD: "Alexandros Doumas",
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
            judo: "Το τζούντο είνα η τέχνη που διδάσκει την αυτοπειθαρχία, την συγκέντρωση και την αυτοπεποίθηση σε έναν αθλητή αλλά κυρίως του μαθαίνει τον σεβασμό απέναντι στον ευτό του αλλά και απέναντι στον αντίπαλο. Το άθλημα αυτό αναπτύσει  φυσικό συντονισμό, την δύναμη και την ευελιξία του σώματος",
            jiujitsu: "Το Jiu Jitsu είναι μια πολεμική τέχνη που εστιάζει στην αρπαγή και ειδικά στην πάλη εδάφους. Διδάσκει ότι ένα μικρότερο και πιο αδύναμο άτομο μπορεί να αμυνθεί με επιτυχία απέναντι σ’ έναν μεγαλύτερο και δυνατότερο επιτιθέμενο, χρησιμοποιώντας την κατάλληλη τεχνική.",
            pancratium: "Το Παγκράτιο είναι ένα αρχαιοελληνικό άθλημα, το οποίο περιλαμβανόταν στο πρόγραμμα των αρχαίων Ολυμπιακών Αγώνων.  Ο ασκούμενος στο Παγκράτιο μαθαίνει στη βασική εκπαίδευση τις τεχνικές της αυτοάμυνας με γροθιές, ρίψεις και ακινητοποιήσεις.",
            subtitle: "Ο σύλλογος τζούντo Κλειτόμαχος προσφέρει προγράμματα για όλες τις ηλικίες από παιδιά έως ενήλικες και από αρχάριους έως προχωρημένους αθλητές που αγωνίζονται σε διεθνές επίπεδο.",
            title: "ΑΘΛΗΜΑΤΑ",
          },
          member: {
            paragraph: 'Προσφέρουμε εντατικές προπονήσεις για όλους τους τζούντοκα ηλικίας 7 ετών και άνω. Στο προπονητικό μας κέντρο θα βρείτε αρχάριους και προχωρημένους να μοιράζονται το dojo ταυτόχρονα, οπότε ανεξάρτητα από το ποιος είναι ο στόχος σας, θα σας βοηθήσουμε να τον πετύχετε.'
          },
          navbar: {
            home: "ΑΡΧΙΚΗ",
            classes: "ΤΜΗΜΑΤΑ",
            schedule: "ΠΡΟΓΡΑΜΜΑ",
            trainers: "ΠΡΟΠΟΝΗΤΕΣ",
            contact: "ΕΠΙΚΟΙΝΩΝΙΑ",
            clitomachus: "ΚΛΕΙΤΟΜΑΧΟΣ"
          },
          classes: {
            title: "ΤΜΗΜΑΤΑ",
            subtitle: "Στον Κλειτομάχο διεξάγουμε συχνές προπονήσεις για ενήλικες που έρχονται σε επαφή με το άθλημα για πρώτη φορά, καθώς και προπονήσεις για αρχάριους, μεσαίου επιπέδου και προχωρημένους αθλητές όλων των ηλικιών.",
          },
          buttons: {
            junior: "Παιδικό ",
            senior: "Εφηβικό ",
            intermediate: "Προχωρημένο",
            advanced: "Επαγγελματικό",
          },
          results: {
              junior: "ΠΑΙΔΙΚΟ ΤΜΗΜΑ",
              senior: "ΕΦΗΒΙΚΟ ΤΜΗΜΑ",
              intermediate: "ΠΡΟΧΩΡΗΜΕΝΟ ΤΜΗΜΑ",
              advanced: "ΕΠΑΓΓΕΛΑΜΤΙΚΟ ΤΜΗΜΑ",

              output_junior: "Στο τμήμα αυτό αλαμβάνουμε παιδιά από την ηλικία των 7 ετών έως των 16. Το τζούντο προσφέρει στα παιδιά αυτοπεποίθηση, τα διδάσκει να σέβονται τον εαυτό τους αλλά και τον αντίπαλο, καθώς χωρίς αυτόν δεν μπορεί να γίνει διεξαχθεί πρακτική άσκηση. Πάνω από όλα η εκμάθηση του τζούντο είναι διασκεδαστική και συχνά μπορεί να εξελιχθεί σε τρόπο ζωής.",
              output_senior: "Τα τμήματα αυτά είναι για οποιονδήποτε ηλικίας 16 ετών και άνω. Μπορούν να ενταχθούν έφηβοι με εμπειρία ή χωρις. Η ρουτίνα της προπόνησης αποτελείται απο προθέρμανση με διατάσεις, εκμάθηση και εξάσκηση τεχνικής και πρακτική άσκηση με αντίπαλο. Το τελευταίο αποτελεί ευκαιρία για τους συμμετέχοντες να δοκιμάσουν τις δεξιότητές τους.",
              output_intermediate: "Οι τάξεις των προχωρημένων είναι προσαρμοσμένες για εκείνους που έχουν ολοκληρώσει τα  μαθήματα αρχάριου επιπέδου και αναζητούν να συνεχίσουν την προπόνησή τους στο τζούντο. Δίνουμε έμφαση στην τεχνική ανάπτυξη, στην ορθή στάση του κορμού και στην φυσική ενδυνάμωση. Τα μαθήματα είναι ανάλογα με την ηλικία και επικεντρώ στην ανάπτυξη των δεξιοτήτων του παιδιού σας.",
              output_advanced: "Το τμήμα αυτό απευθύνεται σε αθλητές όλων των ηλικιών που θέλουν να αναπτύξουν τις ικανότητες τους και να ξεπεράσουν τα όρια τους. Εκλεκτά μέλη της ομάδας  έχουν την μοναδική ευκαιρία να συμμετέχουν σε διαγωνισμούς και αθλητικές εκδηλώσεις ανά την Ελλάδα και σε διάφορες χώρες της Ευρώπης.",
          },
          schedule: {
            title: "ΠΡΟΓΡΑΜΜΑ",
            subtitle: "Προσφέρουμε πολύμορφα τμήματα προπονήσεων για όλα τα επίπεδα τζούντοκα. Αν ενδιαφέρεστε, δείτε τις ώρες εκπαίδευσης παρακάτω.",
          },
          schedulelinks: {
            monday: "Δευτέρα",
            tuesday: "Τρίτη",
            wednesday: "Τετάρτη",
            thursday: "Πέμπτη",
            friday: "Παρασκευή",
          },
          table: {
            jb: "Παιδικό Αρχάριο",
            sb: "Εφηβικό Αρχάριο",
            ji: "Παιδικό Προχωρημένο",
            si: "Εφηβικό Προχωρημένο",
            a: "Επαγγελματικό",
         },
         trainers: {
          title: "ΠΡΟΠΟΝΗΤΕΣ",
          subtitle: "Η ομάδα μας αποτελείται από καταξιωμένους εκπαιδευτές με μακροχρόνια εμπειρία στον κλάδο των πολεμικών τεχνών.",
          nameAD: "Αλεξανδρος Δουμας",

        }
        },
      },
    },
  });

export default i18n;
