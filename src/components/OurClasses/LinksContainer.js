/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";

const LinksContainer = ({ setTraining, training }) => (
  <div css={styles} className="linksContainer">
    <button
      className={training === "FirstClass" ? "active" : ""}
      onClick={() => setTraining("FirstClass")}
    >
       First Training Class
    </button>
    <button
      className={training === "SecondClass" ? "active" : ""}
      onClick={() => setTraining("SecondClass")}
    >
       Second Training Class
    </button>
    <button
      className={training === "ThirdClass" ? "active" : ""}
      onClick={() => setTraining("ThirdClass")}
    >
       Third Training Class
    </button>
    <button
      className={training === "FourthClass" ? "active" : ""}
      onClick={() => setTraining("FourthClass")}
    >
       Fourth Training Class
    </button>
    <Button text="View All Schedules" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 33%;
  display: flex;
  flex-direction: column;
  
  button {
    width: 100%;
    padding: 28px 28px;
    background-color: #191919;
    color: #fff;
    font-weight: 500;
    text-align: center;
    
    display: flex;
    align-items: center;
    margin-bottom: 36px;
    border: none;
    outline: none;
    font-size: 20px;
    &.active {
      color: #FF4141;
      
    }
    &:hover{
      transition: all 0.4s ease 0s;
      background-color: #000000;
      transform:scale(1.02,1.02);
    
    }
  }
  .btn {
    padding: 24px 0;
    border-radius: 4px;
    color: #cc0000;
  }
  @media (max-width: 900px) {
    max-width: 590px;
  }
  @media (min-width: 901px) and (max-width: 1226px) {
    max-width: 280px;
  }
`;

export default LinksContainer;
