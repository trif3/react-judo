import React from 'react';
import './error-indicator.css';
import logo from '../../imgs/logo.svg'; 

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={logo} alt="error icon"/>
            <span className="hajime">Hajime!</span>
            <span>
                something wrong!
            </span>
            <span>
                (we already fighting to fix it)
            </span>
        </div>
    )
}

export default ErrorIndicator;