/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainer1.jpg";
import TrainerTwoBg from "../Image/trainer2.jpg";

import { useTranslation } from "react-i18next";

const Trainers = () => {
  const { t } = useTranslation();

  return(
  <section css={styles} className="trainers" id="trainers">
    <h2>
      {t('trainers.title')}
    </h2>
    <Icon />
    <p>
     {t('trainers.subtitle')}
    </p>
    <Container>
      <TrainerCard
        title="Sensei"
        name="Αλεξανδρος Δουμας"
        desc="Phone: +30 6948278065."
        img={TrainerOneBg}
      />
      <TrainerCard
        title="Sensei"
        name="Χαραλαμπιδης Θεοδωρος"
        desc="Phone: -"
        img={TrainerTwoBg}
      />
    </Container>
  </section>)
};

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
    margin: 0 auto;
    width: 40%;
  }
  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 768px){
    padding: 80px 0;
    h2{
      font-size: 30px;
    }
    .icon{
      padding-top: 10px;
    }
    p{
      font-size: 12px;
      width: 90%;
      text-align: justify;
      padding: 0 17px 0 17px;
    }
    .container{
      
      justify-content: space-between;
    }
  }
  
`;

export default Trainers;
