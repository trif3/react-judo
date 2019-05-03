import React, {Component} from 'react';
import logo from '../../imgs/logo.svg';
import Split from '../split';
import { FaPhoneSquare } from 'react-icons/fa';
import './info.css';

export default class Info extends Component {
    render() {
        return(
            <div className="card jumbotron">
                <Split 
                    left={<LeftInfo />}
                    right={<RightInfo />}
                />
            </div> 
        );
    }
};

const LeftInfo = () => {
    return(
        <React.Fragment>
            <div className="card-body">
                <img src={logo} className="dojo-logo" alt="logo" />
                <h1 className="display-4">
                    Klitomahos
                </h1>
            </div>
        </React.Fragment>
    );
}

const RightInfo = () => {
    return(
        <React.Fragment>
            <div className="card-body">
                <h4 className="card-title">JudoSport.gr</h4>
                <p className="card-text"><FaPhoneSquare /> <code>694 827 8065</code> <br/> <FaPhoneSquare /> <code>694 551 7538</code></p>	
                <address className="card-text">Greece, <br/>Thessaloniki, Ampelokipoi, <br/>Dimotiko stadio Megas Alexandros</address>
            </div>
        </React.Fragment>
    );
}