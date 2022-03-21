/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import Logo from "./Logo";
import NavbarLinksContainer from "./NavbarLinksContainer";
import Container from "../GlobalComponents/Container";

const Nav = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <nav css={styles}>
      <Container>
        <Logo />
        <i
          onClick={() => setHidden(!hidden)}
          className={hidden ? "fas fa-bars fa-lg" : "fas fa-times fa-lg"}
          id="burgerMenu"
        ></i>
        <NavbarLinksContainer hidden={hidden} />
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 10px 0;
  background: rgba(255, 255, 255, 0.06);
  z-index: 20;
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    #burgerMenu {
      color: #fff;
      cursor: pointer;
      display: none;
    }
  }
  @media (max-width: 1000px) {
    background: rgba(255, 255, 255, 0.06);
    .container {
      flex-wrap: wrap;
      #burgerMenu {
        display: block;
      }
    }
  }
`;

export default Nav;
