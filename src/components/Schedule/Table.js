/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState } from "react";

import { Trans, useTranslation } from "react-i18next";

const Table = ({ day }) => {

  const { t } = useTranslation();

  return (
    <table css={styles}>
      <tbody>
        <tr>
          <td>{t('table.jb')}</td>
          <td>
            <span className={day === "Monday" ? "" : "hidden"}>
              17:00PM - 18:30PM
            </span>
          </td>
          
          <td> 
            <Trans i18nKey="trainers.nameAD"/>
          </td>
        </tr>
        <tr>
          <td>{t('table.sb')}</td>
          <td>
            <span className={day === "Friday" ? "" : "hidden"}>
              16:00PM - 17:30PM
            </span>
          </td>
          
          <td>
          <Trans i18nKey="trainers.nameAD"/>
          </td>
        </tr>
        <tr>
          <td>{t('table.ji')}</td>
          <td>
            <span className={day === "Tuesday" ? "" : "hidden"}>
              18:00PM - 19:30PM
            </span>
          </td>
          
          <td>
            <Trans i18nKey="trainers.nameAD"/> 
          </td>
        </tr>
        <tr>
          <td>{t('table.si')}</td>
          <td>
            <span className={day === "Wednesday" ? "" : "hidden"}>
              17:00PM - 18:30PM
            </span>
          </td>
          
          <td>
            <Trans i18nKey="trainers.nameAD"/>
           </td>
        </tr>
        <tr>
          <td>{t('table.a')}</td>
          <td>
            <span className={day === "Thursday" ? "" : "hidden"}>
              19:00PM - 20:30PM
            </span>
          </td>
          
          <td>
            <Trans i18nKey="trainers.nameAD"/>
           </td>
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
