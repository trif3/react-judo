/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Judo"
        desc="Judo develops self-discipline and respect for oneself and others. 
        It provides the means for learning self-confidence, concentration, 
        and leadership skills, as well as physical coordination, power, and flexibility"
      />
      <GymProgramCard
        title="Jiu Jitsu"
        desc="Jiu Jitsu is a grappling/wrestling based discipline and 
        it promotes the principle that a smaller, weaker person using 
        leverage and proper technique can successfully defend themselves 
        against a bigger, stronger assailant."
      />
      <GymProgramCard
        title="Pancratium"
        desc="It's a combination of wrestling and boxing.
        The trainee in the pancratium learns basic techniques of 
        self-defense while at the same time the culture 
        and the moral principles of ancient Greece"
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 100px 0;
  .container {
    display: block;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
    align-items: center;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
