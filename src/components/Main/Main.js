/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Nav from "../Navbar/Nav";
import Image from "./ImageBg";
import Overlay from "./Overlay";
import Info from "./Info";
import ImageBg from "../Image/blackbeltBg.jpg";

const Main = () => (
  <section css={styles} className="main" id="home">
    <Overlay />
    <Nav />
    <Info />
    
  </section>
);

const styles = css`
  width: 100%;
  height: 100vh;
  background: url('${ImageBg}') no-repeat center/cover;
  background-attachment: fixed;
`;

export default Main;
