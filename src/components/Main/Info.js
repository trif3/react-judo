/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import Logo from "../GlobalComponents/Logo"

const Info = () => (
  <div css={styles} className="info">
    <Logo />
    <p>OVER 20 YEARS OF EXCELLENCE</p>
    <h1>
      WELCOME TO JUDO CLUB
    </h1>
    <Button text="JOIN US" linkTo="https://www.facebook.com/groups/klitomaxos" target="_blank" />
    
    
  </div>
);

const styles = css`
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  text-align: center;
  color: #fff;
  p {
    font-size: 17px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 1.2px;
    cursor: context-menu;
  }
  h1 {
    font-size: 100px;
    letter-spacing: 5px;
    font-family: 'Teko', sans-serif;
    line-height: 1;
    font-weight: 900;
    margin: 36px 0;
    cursor: context-menu;
    span {
      color: #007BA7;
    }
  }
  .btn {
    padding: 14px 16px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 42px;
    }
  }
`;

export default Info;
