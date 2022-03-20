/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import GymOverlayBg from "../Image/membersbg.jpg";

import { useTranslation, Trans } from "react-i18next";

function Member()  {

  const { t, i18n } = useTranslation();

  return(
  <section css={styles} className="member">
    <h2>
      DON’T THINK, BEGIN TODAY
    </h2>
    <p><Trans i18nKey="member.paragraph" /></p>
    < br/>
    
  </section>)
};

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  background: url('${GymOverlayBg}') no-repeat center/cover;
  background-attachment: fixed;
  h2 {
    color: #fff;
    font-weight: 900;
    font-size: 40px;
    letter-spacing: 1.3px;
    line-height: 1;
    text-decoration: underline ;
    
  }
  p {
    color: #fff;
    font-size: 16px;
    line-height: 1.7;
    width: 50%;
    margin: 20px auto;
    font-weight: 600;
  }
  
  @media(max-width: 768px) {
    h2{
      font-size: 26px;
    }
    p{
      width: 100%;
      padding: 0 20px;
      font-size: 15px;
      br{
        display: none;
      }
    }
  }
`;

export default Member;
