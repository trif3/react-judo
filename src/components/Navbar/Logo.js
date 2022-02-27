/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Logo = () => (
  <h2 css={styles}>
    CLITOMACHUS
  </h2>
);

const styles = css`
  color: #fff;
  font-size: 30px;
  font-family: 'Fugaz One', cursive;
  cursor: context-menu;
  span {
    color: #007BA7;
  }
`;

export default Logo;
