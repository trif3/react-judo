/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

import { useTranslation, Trans } from "react-i18next";

function GymSubtitle()  {
  const { t, i18n } = useTranslation();

  return(
  <p css={styles} className="subtitle">
    <Trans i18nKey='gymcard.subtitle'/>
  </p>)
};

const styles = css`
  color: #7a7a7a;
  font-size: 15px;
  line-height: 1.7;
  width: 70%;
  margin: 0 auto;
  @media (max-width: 700px) {
    padding: 0 40px;
    width: 90%;
    p{
      font-size: 10px;
    }
  }
`;

export default GymSubtitle;
