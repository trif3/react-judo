import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import GymProgram from "./components/GymProgram/GymProgram";
import Member from "./components/Member/Member";
import Classes from "./components/OurClasses/Classes";
import Schedule from "./components/Schedule/Schedule";
import Contact from "./components/Contact/Contact";
import Trainers from "./components/Trainers/Trainers";

import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  gr: { nativeName: "Greek" },
};

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="App">
      <Main />
      <GymProgram />
      <Member />
      <Classes />
      <Schedule />
      <Trainers />
      <Contact />

      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}

        
      </div>
    </div>
  );
}

export default App;
