import { jsx, css } from "@emotion/core";
import React from "react";
import LineIcon from "../Image/image1.png";

const Icon = () => <img css={styles} src={LineIcon} />;

const styles = css`
  margin: 20px 0;
`;

export default Icon;
