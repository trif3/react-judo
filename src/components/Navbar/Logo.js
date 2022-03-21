/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();

  return(
  <h2 css={styles}>
    {t('navbar.clitomachus')}
  </h2>)
};

const styles = css`
  color: #fff;
  font-size: 30px;
  font-family: 'Fugaz One', cursive;
  cursor: context-menu;
  span {
    color: #007BA7;
  }
  @media (max-width: 425px){
    font-size: 20px;
  }
`;

export default Logo;
