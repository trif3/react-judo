/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Logo = () => (
  <h2 css={styles}>
    judo<span>sport</span>.gr
  </h2>
);

const styles = css`
  color: #fff;
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  cursor: pointer;
  span {
    color: #ed563b;
  }
`;

export default Logo;
