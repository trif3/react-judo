/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Icon from "../GlobalComponents/Icon";
import LinksContainer from "./LinksContainer";
import Results from "./Results";
import Container from "../GlobalComponents/Container";

import { useTranslation, Trans } from "react-i18next";

function Classes() {
  const [training, setTraining] = useState("FirstClass");
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { t, i18n } = useTranslation();

  return (
    <section
      css={styles}
      className="ourClasses"
      id="ourClasses"
      data-aos="fade"
    >
      <h2> <Trans i18nKey="classes.title"/></h2>
      <Icon />
      <p>
        <Trans i18nKey="classes.subtitle" />
      </p>
      <Container>
        <LinksContainer setTraining={setTraining} training={training} />
        <Results training={training} />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 100px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-size: 40px;
    font-weight: 900;
    line-height: 1;
    margin-top: -20px;
  }
  p {
    color: #7a7a7a;
    font-size: 15px;
    line-height: 1.7;
    width: 800px;
    margin: 0 auto;
  }
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
    h2 {
      font-size: 30px;
      margin-bottom: 15px;
    }
    p {
      padding: 10px 20px;
      font-size: 14px;
    }
    .subtitle {
      padding-top: 10px;
    }
    .img {
      padding-bottom: 10px;
    }
    .container {
      display: flex;
      justify-content: space-between;
      padding: 30px 0 0 0;
    }
  }
`;

export default Classes;
