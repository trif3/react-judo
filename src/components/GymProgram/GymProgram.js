/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";
import Image from "../Image/kleidarhosbw.jpg";
import { useTranslation, Trans } from "react-i18next";

function GymProgram() {
const { t, i18n } = useTranslation();
  


  return (
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
          desc={<Trans i18nKey='gymcard.judo'/>}
        />
        <GymProgramCard
          title="JIU JITSU"
          desc={<Trans i18nKey='gymcard.jiujitsu'/>}
        />
        <GymProgramCard
          title="PANCRATIUM"
          desc={<Trans i18nKey='gymcard.pancratium'/>}
        />
      </Container>
    </div>
  );
}

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
  .float-child {
    width: 50%;
    float: left;
    padding-top: 70px;
  }
  .icon {
    padding-top: 30px;
  }
  .subtitle {
    padding-top: 30px;
  }
  .img {
    width: 72%;
    padding-top: 30px;
  }

  @media (max-width: 768px) {
    padding: 30px 0;
    .container {
      width: 100%;
      float: center;
    }
    .float-child {
      width: 100%;
      float: center;
    }
    .icon {
      padding-top: 10px;
    }
    .subtitle {
      padding-top: 10px;
    }
    .img {
      padding-bottom: 10px;
    }
  }
`;

export default GymProgram;
