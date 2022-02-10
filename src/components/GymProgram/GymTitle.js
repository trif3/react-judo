/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const GymTitle = () => (
  <h2 css={styles}>
    CHOOSE PROGRAM
  </h2>
);

const styles = css`
  color: #232d39;
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
`;

export default GymTitle;