/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";



const Output = ({ title, info, img }) => (
  <div css={styles} className="output">
    <img src={img} alt="class" />
    <h2>{title}</h2>
    <p>{info}</p>
  </div>
);

const styles = css`
  text-align: left;
  img {
    width: 100%;
    height: auto;
    display: block;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    filter: grayscale(1) brightness(70%);
    transition: 0.5s ease-in-out;
    &:hover {
      filter: grayscale(0) brightness(100%);
    }
  }

  h2 {
    margin: 34px 0 0 0;
    font-size: 22px;
    font-weight: 600;
    line-height: 1;
  }
  p {
    width: 100%;
    text-align: justify;
    margin: 20px 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: -30px;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
    h2 {
      margin: 10px 0 0 0;
      font-size: 20px;
      font-weight: 600;
      line-height: 1;
    }
    p {
      padding: 4px 0 0 ;
      margin: 2px;
      font-size: 12px;
    }
  }
`;

export default Output;
