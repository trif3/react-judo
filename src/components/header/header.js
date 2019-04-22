import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.svg';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header ui secondary  menu">
      <ul className="item">
        <li>
          <Link to="/">
           <img src={logo} className="header-logo" alt="logo" /> 
          </Link>
        </li>
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

        <li>
          <button
            onClick={onServiceChange}
            className="ui button">
            VR
          </button>
        </li>
      </ul>


    </div>
  );
};

export default Header;