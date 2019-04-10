import React from "react";
import { Link } from 'react-router-dom'

import "./header.css";

const Header = ({ onServiceChange }) => {
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

      <button onClick={onServiceChange} className="btn btn-primary btn-sm">
        Virtual Dojo
      </button>
    </div>
  );
};

export default Header;
