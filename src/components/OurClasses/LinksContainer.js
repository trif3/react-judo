/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useEffect } from "react";
import Button from "../GlobalComponents/Button";
import Aos from "aos";
import "aos/dist/aos.css";

const LinksContainer = ({ setTraining, training }) => {
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
        Junior (7-15 years old)
      </button>
      <button
        className={training === "SecondClass" ? "active" : ""}
        onClick={() => setTraining("SecondClass")}
      >
        Senior (16+ years old)
      </button>
      <button
        className={training === "ThirdClass" ? "active" : ""}
        onClick={() => setTraining("ThirdClass")}
      >
        Intermediate Classes
      </button>
      <button
        className={training === "FourthClass" ? "active" : ""}
        onClick={() => setTraining("FourthClass")}
      >
        Advanced Classes
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
  @media (max-width: 900px) {
    max-width: 590px;
  }
  @media (min-width: 901px) and (max-width: 1226px) {
    max-width: 280px;
  }
`;

export default LinksContainer;
