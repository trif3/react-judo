/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";


const TrainerCard = ({ title, name, desc, img }) => (
  <div css={styles} className="card">
    <img src={img} alt="trainer" />
    <h4>{title}</h4>
    <h3>{name}</h3>
    <p>{desc}</p>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 31%;
  background: #fff;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  text-align: left;
  border-radius: 4px;
  img {
    width: 100%;
  }
  h4 {
    color: #f7373a;
    margin: 26px 0 9px 0;
    font-weight: 500;
    font-size: 14px;
  }
  h3 {
    color: #232d39;
    letter-spacing: 1px;
  }
  p {
    margin: 24px 0 28px 0;
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
  }
  @media (max-width: 768px) {
    max-width: 500px;
    margin: 14px 0;
  }
  
`;

export default TrainerCard;
