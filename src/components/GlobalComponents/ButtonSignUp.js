/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const ButtonSignUp = ({ text }) => (
  <a css={styles} href="#/" className="btn">
    {text}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  color: #bcbcbc;
  font-size: 14px;
  padding: 12px 14px;
  transition: color 500ms ease-in-out;
  &:hover {
    color: #f7373a;
  }
`;

export default ButtonSignUp;
