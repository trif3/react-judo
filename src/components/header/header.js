import React from "react";
import { Link } from 'react-router-dom'

import "./header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          JudoSport.gr
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/athletes/">Athletes</Link>
        </li>
        <li>
          <Link to="/teachers/">Teachers</Link>
        </li>
        <li>
          <Link to="/championships/">Championships</Link>
        </li>
      </ul>

      <button onClick={onServiceChange} className="btn btn-primary btn-sm">
        Virtual Dojo
      </button>
    </div>
  );
};

export default Header;
