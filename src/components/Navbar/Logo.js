/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Logo = () => (
  <h2 css={styles}>
    KLEIDARHOS
  </h2>
);

const styles = css`
  color: #fff;
  font-size: 30px;
  font-family: 'Fugaz One', cursive;
  cursor: pointer;
  span {
    color: #007BA7;
  }
`;

export default Logo;
