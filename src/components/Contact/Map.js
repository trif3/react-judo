/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
    <iframe
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.659189477156!2d22.920045315403364!3d40.659442479337656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839ecb8e445c7%3A0x81c77d4a51a43b7b!2zzpXOuM69zrnOus-MIM6RzrjOu863z4TOuc66z4wgzprOrc69z4TPgc6_IM6RzrzPgM61zrvOv866zq7PgM-Jzr0gwqvOnM6tzrPOsc-CIM6RzrvOrc6-zrHOvc60z4HOv8-Cwrs!5e0!3m2!1sel!2sgr!4v1645528646819!5m2!1sel!2sgr"
    ></iframe>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 50%;
  min-height: 60vh;
  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    height: 60vh;
  }
`;

export default Map;
