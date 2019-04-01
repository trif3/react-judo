import React, { Component } from 'react';
import logo from './logo.svg'; 
import './app.css';

import Header from '../header';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />

        <header className="App-header">


          <img src={logo} className="App-logo" alt="logo" />
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
