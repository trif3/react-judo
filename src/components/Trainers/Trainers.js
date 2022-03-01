/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/trainer1.jpg";
import TrainerTwoBg from "../Image/trainer2.jpg";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
      INSTRUCTORS
    </h2>
    <Icon />
    <p>
     Οur team consists of the most renowned trainers. <br />
     Their combined experiences spans all levels of competition from regional to the highest level.
    </p>
    <Container>
      <TrainerCard
        title="Strength Trainer"
        name="Bret D. Bowers"
        desc="Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel."
        img={TrainerOneBg}
      />
      <TrainerCard
        title="Muscle Trainer"
        name="Hector T. Daigl"
        desc="Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel."
        img={TrainerTwoBg}
      />
    </Container>
  </section>
);

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
  }
  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;
