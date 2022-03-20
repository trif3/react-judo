/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

import { useTranslation } from "react-i18next";

const ScheduleLinks = ({ setDay, day }) => {
  const { t } = useTranslation();

  return (
    <div className="links" css={styles}>
      <button
        className={day === "Monday" ? "active" : ""}
        onClick={() => setDay("Monday")}
      >
        {t("schedulelinks.monday")}
      </button>
      <span>/</span>
      <button
        className={day === "Tuesday" ? "active" : ""}
        onClick={() => setDay("Tuesday")}
      >
        {t("schedulelinks.tuesday")}
      </button>
      <span>/</span>
      <button
        className={day === "Wednesday" ? "active" : ""}
        onClick={() => setDay("Wednesday")}
      >
        {t("schedulelinks.wednesday")}
      </button>
      <span>/</span>
      <button
        className={day === "Thursday" ? "active" : ""}
        onClick={() => setDay("Thursday")}
      >
        {t("schedulelinks.thursday")}
      </button>
      <span>/</span>
      <button
        className={day === "Friday" ? "active" : ""}
        onClick={() => setDay("Friday")}
      >
        {t("schedulelinks.friday")}
      </button>
    </div>
  );
};

const styles = css`
  padding: 40px 0 0 0;
  button {
    color: #fff;
    text-decoration: none;
    background: none;
    border: none;
    font-size: 20px;
    outline: none;
    cursor: pointer;
    &.active {
      color: #f7373a;
    }
  }
  span {
    color: #fff;
    padding: 0 16px;
  }
  @media (max-width: 768px) {
    padding: 10px 0 0 0;
    button {
      font-size: 14px;
    }
    span {
      padding: 0 9px;
    }
  }
`;

export default ScheduleLinks;
