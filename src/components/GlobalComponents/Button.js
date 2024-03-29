/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Button = ({ text, linkTo, target }) => (
  <a css={styles} href={linkTo}  className="btn" target={target}>
    {text}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  border: 2px solid #f7373a;
  color: #fff;
  font-size: 14px;
  padding: 12px 14px;
  transition: color 500ms ease-in-out;
  &:hover {
    color: #f7373a;
    cursor: pointer;
  }
`;

export default Button;
