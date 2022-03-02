/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Link = ({ name, linkTo }) => (
  <a css={styles} href={linkTo}>
    {name}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  transition: color 600ms ease-in-out;
  &:hover {
    color: #f7373a;
    text-shadow:
    0 0 7px #f7373a,
    0 0 10px #f7373a,
    0 0 21px #f7373a,
    0 0 42px #0fa,
    0 0 82px #0fa,
    0 0 92px #0fa,
    0 0 102px #0fa,
    0 0 151px #0fa;
  }
  @media (max-width: 1000px) {
    padding: 14px 0;
    width: 30%;
    padding-left: 6px;
    font-size: 18px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid #eee;
    border-radius: 1px;
    
  }
  @media (max-width: 425px){
    font-size: 10px;
    padding: 8px 0;
    padding-left: 6px;
    background: rgba(255, 255, 255, 0.06);
  }
`;

export default Link;
