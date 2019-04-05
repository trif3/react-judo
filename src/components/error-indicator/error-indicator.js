import React from 'react';
import './error-indicator.css';
import logo from '../../imgs/logo.svg'; 

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <span className="hajime">Hajime!</span>

            <img src={logo} alt="error icon"/>
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