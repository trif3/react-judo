/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const TrainerCard = ({ title, name, desc, img }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return(
  <div css={styles} className="card" data-aos="fade-up">
    <img src={img} alt="trainer" />
    <h4>{title}</h4>
    <h3>{name}</h3>
    <p>{desc}</p>
  </div>)
};

const styles = css`
  width: 100%;
  max-width: 31%;
  background: #fff;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  text-align: left;
  border-radius: 4px;
  img {
    width: 100%;
  }
  h4 {
    color: #f7373a;
    margin: 26px 0 9px 0;
    font-weight: 500;
    font-size: 14px;
  }
  h3 {
    color: #232d39;
    letter-spacing: 1px;
  }
  p {
    margin: 24px 0 28px 0;
    color: #7a7a7a;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
  }
  @media (max-width: 768px) {
    max-width: 49%;
    padding: 20px;
    h4{
      margin: 10px 0 9px 0;
      font-weight: 900px
    }
    h3{
      font-size: 16px;
    }
    p{
      font-size: 13px;
      margin: 14px 0 2px 0;
      padding: 2px 4px 5px 1px;
      line-height: 1.3;
    }
  }
  
`;

export default TrainerCard;
