/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
    <iframe
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48454.26033977064!2d22.911007645032146!3d40.62125236065557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a838f41428e0ed%3A0x9bae715b8d574a9!2zzpjOtc-Dz4POsc67zr_Ovc6vzrrOtw!5e0!3m2!1sel!2sgr!4v1643918548246!5m2!1sel!2sgr"
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
