/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/juniortest.jpg";
import ClassTwoBg from "../Image/senior.jpg";
import ClassThreeBg from "../Image/intermediate.jpg";
import ClassFourBg from "../Image/advanced.jpg";

import { useTranslation } from 'react-i18next';

const Results = ({ training }) => {
  const { t } = useTranslation();

  return(
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output 
        title={t('results.junior')}
        info={t('results.output_junior')}
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title={t('results.senior')}
        info={t('results.output_senior')}
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title={t('results.intermediate')}
        info={t('results.output_intermediate')}
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title={t('results.advanced')}
        info={t('results.output_advanced')}
        img={ClassFourBg}
      />
    )}
  </div>)
};

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
