/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import LineIcon from "../Image/substract.png";

const Icon = () => <img css={styles} src={LineIcon} />;

const styles = css`
  width: 5%;
`;

export default Icon;
