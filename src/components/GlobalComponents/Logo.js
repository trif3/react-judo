/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import LineIcon from "../Image/Untitled_Artwork.png";

const Logo = () => <img css={styles} src={LineIcon} />;

const styles = css`
  width: 27%;
  
`;

export default Logo;