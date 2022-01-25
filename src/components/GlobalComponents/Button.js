/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Button = ({ text }) => (
  <a css={styles} href="#/" className="btn">
    {text}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  background: #007BA7;
  color: #fff;
  font-size: 14px;
  padding: 12px 14px;
  transition: background 500ms ease-in-out;
  &:hover {
    background: #66AFCA;
  }
`;

export default Button;
