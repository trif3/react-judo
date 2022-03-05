/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import LineIcon from "../Image/substract.png";

const Icon = () => <img css={styles} src={LineIcon} className="icon"/>;

const styles = css`
  width: 10%;
  margin-top: -40px;
  margin-bottom: -30px;
  @media (max-width: 425px){
    width: 20%;
  }
`;

export default Icon;
