/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
    <iframe
      id="gmap_canvas"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.6978005406927!2d22.920879615403283!3d40.658591479337744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839934d1a5af3%3A0x50d476708a769e2d!2zzpPOtc-FzrPOtc67zq7PgiA2MSwgzpHOvM-AzrXOu8-MzrrOt8-Azr_OuSA1NjEgMjE!5e0!3m2!1sel!2sgr!4v1644517781468!5m2!1sel!2sgr"
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
