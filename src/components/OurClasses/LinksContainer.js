/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useEffect } from "react";
import Button from "../GlobalComponents/Button";
import Aos from "aos";
import "aos/dist/aos.css";

import { useTranslation } from 'react-i18next';

const LinksContainer = ({ setTraining, training, }) => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      css={styles}
      className="linksContainer"
      data-aos="fade-up"
      data-aos-once="false"
      data-aos-mirror="true"
    >
      <button
        className={training === "FirstClass" ? "active" : ""}
        onClick={() => setTraining("FirstClass")}
      >
        {t('buttons.junior')}
      </button>
      <button
        className={training === "SecondClass" ? "active" : ""}
        onClick={() => setTraining("SecondClass")}
      >
        {t('buttons.senior')}
      </button>
      <button
        className={training === "ThirdClass" ? "active" : ""}
        onClick={() => setTraining("ThirdClass")}
      >
        {t('buttons.intermediate')}
      </button>
      <button
        className={training === "FourthClass" ? "active" : ""}
        onClick={() => setTraining("FourthClass")}
      >
        {t('buttons.advanced')}
      </button>
      <Button text="View All Schedules" linkTo="#schedule" />
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 33%;
  display: flex;
  flex-direction: column;

  button {
    width: 100%;
    padding: 28px 28px;
    background-color: #202020;
    color: #fff;
    font-weight: 500;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    display: flex;
    align-items: center;
    margin-bottom: 36px;
    border: none;
    outline: none;
    font-size: 20px;
    &.active {
      color: #ff4141;
    }
    &:hover {
      transition: transform 200ms ease-in-out;
      background-color: #000000;
      transform: scale(1.02, 1.02);
    }
  }
  .btn {
    padding: 24px 0;
    border-radius: 4px;
    color: #cc0000;
    font-size: 17px;

    &:hover {
      transition: 700ms ease-in-out;
      color: #fff;
      background-color: #f7373a;
    }
  }
  @media (max-width: 768px) {
    max-width: 30%;
    padding-right: 5px;

    button {
      width: 100%;
      padding: 10px 10px;
      font-weight: 400;
      margin-bottom: 10px;
      font-size: 13px;
    }
    .btn{
      padding: 3px;
      font-size: 12px;
    }
  }
`;

export default LinksContainer;
