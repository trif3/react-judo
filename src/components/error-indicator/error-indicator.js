import React from 'react';

import './error-indicator.css';
import icon from '../../imgs/logo.svg';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon"/>
      <span className="hajime">Hajime!</span>
      <span>
        something wrong!
      </span>
      <span>
        (time for Radori)
      </span>
    </div>
  );
};

export default ErrorIndicator;