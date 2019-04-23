import React, {Component} from 'react';
import logo from '../../imgs/logo.svg';

import './info.css';

export default class Info extends Component {
    render() {
        return(
            <div className="card text-white bg-info">
                <div className="card-body">
                <img src={logo} className="dojo-logo" alt="logo" />
                    <h4 className="card-title">JudoSport.gr</h4>
                    <p className="card-text">phone1: <code>694 827 8065</code> <br/> phone2: <code>694 551 7538</code></p>	
                    <address className="card-text">Greece, <br/>Thessaloniki, Ampelokipoi, <br/>Dimotiko stadio Megas Alexandros</address>
                </div>
            </div> 
        );
    }
};