/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

import { useTranslation, Trans } from "react-i18next";

function GymTitle() {

  const { t, i18n } = useTranslation();

  return(
  <h2 css={styles} className="gymtitle">
    <Trans i18nKey='gymcard.title'/>
  </h2>)
};

const styles = css`
  color: #232d39;
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  margin-top: -30px;
  @media (max-width: 768px){
    font-size: 30px;
  }
`;

export default GymTitle;