import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header ui menu">
      <h4>
        <Link to="/">
          judosport.gr
        </Link>
      </h4>
      <ul className="item">
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
          className="ui button">
        VR dojo
      </button>
    </div>
  );
};

export default Header;