/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ImageBg from "../Image/blackbeltBg.jpg";

const Image = () => (
  <img css={styles} src={ImageBg} />
    

);

const styles = css`
  min-width: 100%;
  min-height: 100vh;
  max-width: 100%;
  max-height: 100vh;
  object-fit: cover;
  
`;

export default Image;
