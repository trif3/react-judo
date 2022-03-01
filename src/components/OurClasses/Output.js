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
    transition:.5s ease-in-out;
    &:hover {
      filter: grayscale(0) brightness(90%);
      
}
    }
  }

  h2 {
    margin: 34px 0 0 0;
    font-size: 22px;
    font-weight: 600;
    line-height: 1;
  }
  p {
    margin: 20px 0;
  }
  .btn {
    padding: 14px 26px;
  }
  @media (max-width: 900px) {
    img {
      height: 260px;
    }
  }
`;

export default Output;
