import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.svg';

import './header.css';
import Compare from '../compare';
const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <ul className="d-flex">
        <h1>
          <Link to="/">
           <img src={logo} className="header-logo" alt="logo" /> 
          </Link>
        </h1>

        <li>
          <button
            onClick={onServiceChange}
            className="btn btn-secondary my-2 my-sm-0">
            virtual Dojo
          </button>
        </li>

        <Compare numItems={1} total={2}/>
      </ul>
    </div>
  );
};

export default Header;