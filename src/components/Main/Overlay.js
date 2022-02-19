/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Overlay = () => <div css={styles} className="overlay"></div>;

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(1, 3, 3, 0.4);
`;

export default Overlay;