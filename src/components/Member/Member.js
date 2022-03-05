/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Button from "../GlobalComponents/Button";
import GymOverlayBg from "../Image/membersbg.jpg";

const Member = ({ text }) => (
  <section css={styles} className="member">
    <h2>
      DON’T THINK, BEGIN TODAY
    </h2>
    <p>
    We offer regular training sessions for all judoka aged 7 years old onwards. <br />
    We have a mix of international competitors to beginners all sharing the dojo at the same time,<br />
    so no matter what your goal is, we will help you achieve it.
    </p>
    < br/>
    
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  background: url('${GymOverlayBg}') no-repeat center/cover;
  background-attachment: fixed;
  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 40px;
    letter-spacing: 1.3px;
    line-height: 1;
    text-decoration: underline ;
    
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    margin: 20px 0;
    font-weight: 600;
    
  }
  
  @media(max-width: 768px) {
    h2{
      font-size: 26px;
    }
    p{
      padding: 0 20px;
      font-size: 15px;
      br{
        display: none;
      }
    }
  }
`;

export default Member;
