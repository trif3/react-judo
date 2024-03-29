/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import Logo from "../GlobalComponents/Logo"

import { useTranslation, Trans } from "react-i18next";

function Info(){ 

  const { t, i18n } = useTranslation();

  return(
  <div css={styles} className="info">
    <Logo />
    <p><Trans i18nKey="main.over20years"/></p>
    <h1>
    <Trans i18nKey="main.welcome"/>
    </h1>
    <Button text="JOIN US" linkTo="https://www.facebook.com/groups/klitomaxos" target="_blank" />
    
    
  </div>)
};

const styles = css`
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #fff;
  p {
    font-size: 17px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 1.2px;
    cursor: context-menu;
  }
  h1 {
    font-size: 50px;
    letter-spacing: 2px;
    font-family: 'Fira Sans Condensed', sans-serif;;
    line-height: 1;
    font-weight: 900;
    margin: 36px auto;
    cursor: context-menu;
    span {
      color: #007BA7;
    }
  }
  .btn {
    padding: 14px 16px;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export default Info;
