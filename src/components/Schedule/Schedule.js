/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";
import Icon from "../GlobalComponents/Icon";
import scheduleBg from "../Image/scheduleBg.jpeg";
import ScheduleLinks from "./ScheduleLinks";
import Table from "./Table";
import Container from "../GlobalComponents/Container";
import { t } from "i18next";

const Schedule = () => {
  const [hidden, setHidden] = useState(false);
  const [day, setDay] = useState("Monday");

  return (
    <section css={styles} className="schedule" id="schedule">
      <h2>{t('schedule.title')}</h2>
      <Icon />
      <p>{t('schedule.subtitle')}</p>
      <Container>
        <ScheduleLinks setDay={setDay} day={day} />
        <Table day={day} />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 120px 0;
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("${scheduleBg}") no-repeat center/cover;

  h2 {
    color: #e21b1b;
    font-size: 40px;
    font-weight: 900;
    line-height: 1;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.7;
    margin: 20px auto;
    width: 40%;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding: 80px 0;
    h2 {
      font-size: 30px;
      margin-bottom: 10px;
    }
    p {
      font-size: 12px;
      width: 90%;
      text-align: justify;
      margin: 14px auto;
    }
  }
`;

export default Schedule;
