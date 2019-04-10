import React, { Component } from 'react';
import logo from '../../imgs/logo.svg'; 
import './app.css';

import Header from '../header';
import RandomAthlete from '../random-athlete/random-athlete';
import ErrorBoundry from '../error-boundry';
import DojoService from '../../services/dojo-service';
import MockDojoService from '../../services/mock-dojo-service';

import {} from '../pages';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />

        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />

          <RandomAthlete />

          <p>
            Welcome to <code>JudoSport.gr</code> happy Ippon!
          </p>
          <p>
            phone1: <code>694 827 8065</code> <br/> phone2: <code>694 551 7538</code>
          </p>
          <p>
            Greece, Thessaloniki, Ampelokipoi, Dimotiko stadio Megas Alexandros
          </p>
          <a
            className="App-link"
            href="https://judosport.gr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kleitomaxos
          </a>
        </header>
      </div>
    );
  }
}

export default App;
