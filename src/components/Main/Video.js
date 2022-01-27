/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import VideoBg from "../Image/Dojo.jpg";

const Video = () => (
  <img css={styles} src={VideoBg} />
    

);

const styles = css`
  min-width: 100%;
  min-height: 100vh;
  max-width: 100%;
  max-height: 100vh;
  object-fit: cover;
  
`;

export default Video;
