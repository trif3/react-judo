/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "./Link";
import ButtonSignUp from "../GlobalComponents/ButtonSignUp";

import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "EN" },
  gr: { nativeName: "EL" },
};


const LinksContainer = ({ hidden }) => {

  const { t, i18n } = useTranslation();

  return (
    <div css={styles} className={(hidden ? "hidden" : "") + " linksContainer"}>
      <Link name={t('navbar.home')} linkTo="#home" />
      <Link name={t('navbar.classes')} linkTo="#ourClasses" />
      <Link name={t('navbar.schedule')} linkTo="#schedule" />
      <Link name={t('navbar.trainers')} linkTo="#trainers" />
      <Link name={t('navbar.contact')} linkTo="#contact" />
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
  );
};

const styles = css`
  width: 100%;
  display: flex;
  max-width: 620px;
  align-items: center;
  justify-content: space-between;
  button{
      border: 2px;
      color: #bcbcbc;
      background-color: transparent;
      font-size: 14px;
    }

  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 0 30px 20px 30px;
    flex-direction: column;
    align-items: flex-start;
    opacity: 1;
    position: absolute;
    left: 0;
    top: 70px;   
    transition: top 1100ms ease-in-out, opacity 1100ms ease-in-out;
    
    &.hidden {
      left: 0;
      top: -500px;
      opacity: 0;
    }
    .btn {
      width: 100%;
      text-align: center;
      padding: 16px;
    }
  }
`;

export default LinksContainer;
