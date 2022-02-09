/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"


const GymProgramCard = ({ title, desc }) => {
  useEffect(() => {
    Aos.init({ duration: 2000});
  }, []

  )
return(
  <div css={styles} className="card" data-aos="fade-up">
    
    <div className="cardInfo">
      <h4>{title}</h4>
      <p>{desc}</p>
      <a href="#/">DISCOVER MORE</a>
    </div>
  </div>);
};

const styles = css`
  width: 100%;
  max-width: 47%;
  display: flex;
  text-align: left;
  margin: 20px 0;
  border: 2px;

  
  .cardInfo {
    border: 3px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: black;
    justify-content: space-between;
    h4 {
      color: #fff;
    }
    p {
      color: #fff;
      font-size: 14px;
      line-height: 1.7;
    }
    a {
      color: #444444;
      text-decoration: none;
      transition: color 600ms ease-in-out;
      font-size: 14px;
      font-weight: 500;
      &:hover {
        color: #6699E0;
      }
    }
  }
  @media (max-width: 700px) {
    max-width: 100%;
  }
  @media (min-width: 701px) and (max-width: 1100px){
    max-width: 80%;
  }
`;

export default GymProgramCard;
