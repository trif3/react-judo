/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/juniortest.jpg";
import ClassTwoBg from "../Image/senior.jpg";
import ClassThreeBg from "../Image/intermediate.jpg";
import ClassFourBg from "../Image/advanced.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output 
        title="Junior "
        info="At Clitomachus Judo Club we take children on from the age of 7 years old.
         Judo gives kids a confidence in their physical health and ability, it teaches them to 
         respect themselves and others for in judo without a partner there is no practice. 
         Most of all learning judo is FUN and challenging and often can lead to a sport for life."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="Senior"
        info="The senior classes at Clitomachus judo Club are for anyone aged 16 or older. 
        Whatever your level you are welcome on our senior mat. The normal format for every 
        session is a warm-up with stretching, standing or ground work technique 
        and some free practice which is an opportunity for participants to test their skills."
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Intermediate"
        info="Our intermediate classes are tailored for those juniors who have completed beginners 
        courses and are looking to continue their judo training. This level links beginners up to 
        the age of 12 to the advanced junior class. The emphasis in these classes is fun and 
        technical development.  The classes are age specific and will develop your child’s 
        judo as they grow older."
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="Advanced"
        info="The Advanced Class is aimed at athletes of all ages who want to be challenged. 
        Some of the training group regularly attend competitions and camps around 
        the country (and Europe). "
        img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 768px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
`;

export default Results;
