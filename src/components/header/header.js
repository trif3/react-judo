import React from "react";

import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">JudoSport.gr</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">Athletes</a>
        </li>
        <li>
          <a href="#">Mental</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
