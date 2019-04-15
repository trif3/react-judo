import React, {Component} from 'react';
import logo from '../../imgs/logo.svg';

import './info.css';

export default class Info extends Component {
    render() {
        return(
            <div className="card text-white bg-info mb-3">
                <div className="card-body">
                <img src={logo} className="dojo-logo" alt="logo" />
                    <h4 className="card-title">JudoSport.gr</h4>
                    <p className="card-text">phone1: <code>694 827 8065</code> <br/> phone2: <code>694 551 7538</code></p>	
                    <p className="card-text">Greece, Thessaloniki, Ampelokipoi, Dimotiko stadio Megas Alexandros</p>
                </div>
            </div> 
        );
    }
};