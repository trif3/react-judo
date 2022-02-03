/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import LineIcon from "../Image/logo.png";

const Logo = () => <img css={styles} src={LineIcon} />;

const styles = css`
  margin: 20px 0;
`;

export default Logo;