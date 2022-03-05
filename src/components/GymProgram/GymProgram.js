/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";
import Image from "../Image/kleidarhosbw.jpg";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <div className="float-child">
      <GymTitle />
      <Icon />
      <GymSubtitle />
      <img src={Image} alt="Image" className="img" />
    </div>
    <Container>
      <GymProgramCard
        title="JUDO"
        desc="Judo develops self-discipline and respect for oneself and others. 
        It provides the means for learning self-confidence, concentration, 
        and leadership skills, as well as physical coordination, power, and flexibility"
      />
      <GymProgramCard
        title="JIU JITSU"
        desc="Jiu Jitsu is a grappling/wrestling based discipline and 
        it promotes the principle that a smaller, weaker person using 
        leverage and proper technique can successfully defend themselves 
        against a bigger, stronger assailant."
      />
      <GymProgramCard
        title="PANCRATIUM"
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
    
  }
  .float-child{
    width: 50%;
    float: left;
    padding-top: 70px;
  }
  .icon{
    padding-top: 30px;
  }
  .subtitle{
    padding-top: 30px;
  }
  .img{
    width: 72%;
    padding-top: 30px;
  }
  
  @media (max-width: 768px){
    padding: 30px 0;
    .container{
      width: 100%;
      float: center;
    }
    .float-child{
      width: 100%;
      float: center;
    }
    .icon{
      padding-top: 10px;
    }
    .subtitle{
      padding-top: 10px;
    }
    .img{
      padding-bottom: 10px;
    }
    

  }

`;

export default GymProgram;
