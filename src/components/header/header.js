import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          judosport.gr
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
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>

      <button
          onClick={onServiceChange}
          className="btn btn-primary btn-sm">
        VR dojo
      </button>
    </div>
  );
};

export default Header;