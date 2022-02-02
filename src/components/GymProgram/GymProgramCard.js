/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";


const GymProgramCard = ({ title, desc }) => (
  <div css={styles} className="card">
    
    <div className="cardInfo">
      <h4>{title}</h4>
      <p>{desc}</p>
      <a href="#/">DISCOVER MORE</a>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 47%;
  display: flex;
  text-align: left;
  margin: 30px 0;
  border: 2px;
  
  .cardInfo {
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      color: #232d39;
    }
    p {
      color: #7a7a7a;
      font-size: 14px;
      line-height: 1.7;
    }
    a {
      color: #444444;
      text-decoration: none;
      transition: color 600ms ease-in-out;
      font-size: 14px;
      font-weight: 500;
      &:hover {
        color: #6699E0;
      }
    }
  }
  @media (max-width: 700px) {
    max-width: 100%;
  }
  @media (min-width: 701px) and (max-width: 1100px){
    max-width: 80%;
  }
`;

export default GymProgramCard;
