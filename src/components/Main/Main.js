/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Nav from "../Navbar/Nav";
import Image from "./ImageBg";
import Overlay from "./Overlay";
import Info from "./Info";

const Main = () => (
  <section css={styles} className="main" id="home">
    <Overlay />
    <Nav />
    <Info />
    <Image />
  </section>
);

const styles = css`
  width: 100%;
  height: 100vh;
  
`;

export default Main;
