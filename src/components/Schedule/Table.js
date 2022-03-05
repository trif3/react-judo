/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";

const Table = ({ day }) => {
  return (
    <table css={styles}>
      <tbody>
        <tr>
          <td>Junior Beginners</td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              17:00PM - 18:30PM
            </span>
          </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              16:00PM - 17:30PM
            </span>
          </td>
          <td>William G. Stewart</td>
        </tr>
        <tr>
          <td>Senior Beginners</td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              16:00PM - 17:30PM
            </span>
          </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              17:00PM - 18:30PM
            </span>
          </td>
          <td>Boyd C. Harris</td>
        </tr>
        <tr>
          <td>Junior Intermediate </td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              18:00PM - 19:30PM
            </span>
          </td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              19:00PM - 20:30PM
            </span>
          </td>
          <td>Boyd C. Harris</td>
        </tr>
        <tr>
          <td>Senior Intermediate </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              17:00PM - 18:30PM
            </span>
          </td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              18:00PM - 19:30PM
            </span>
          </td>
          <td>Hector T. Daigle</td>
        </tr>
        <tr>
          <td>Advanced </td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              19:00PM - 20:30PM
            </span>
          </td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              19:00PM - 20:30PM
            </span>
          </td>
          <td>Bret D. Bowers</td>
        </tr>
      </tbody>
    </table>
  );
};

const styles = css`
  border-collapse: collapse;
  color: #fff;
  margin: 30px 0 0 0;
  td,
  th {
    border: 1px solid #fff;
    border-collapse: collapse;
  }
  tr {
    td {
      padding: 40px 0;
      width: 200px;
      span {
        opacity: 1;
        transition: opacity 900ms ease-in-out;
      }
    }
  }
  .hidden {
    opacity: 0;
  }
  @media (max-width: 768px) {
    font-size: 11px;
    margin: 30px 0 0 0;
    tr {
      td {
        padding: 30px 6px;
        width: 200px;
      }
    }
  }
`;

export default Table;
