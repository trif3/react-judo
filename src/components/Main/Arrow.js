/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import LineIcon from "../Image/arrow.png";

const Arrow = () => <img css={styles} src={LineIcon} />;

const styles = css`
  width: 5%;
`;

export default Arrow;
