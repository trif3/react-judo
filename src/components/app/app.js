import React, { Component } from 'react';
import logo from '../../imgs/logo.svg'; 
import './app.css';

import Header from '../header';
import RandomAthlete from '../random-athlete/random-athlete';
import ErrorCollector from '../error-collector';
import DojoService from '../../services/dojo-service';
import MockDojoService from '../../services/mock-dojo-service';

import {
  AthletesPage,
  TeachersPage,
  ChampionshipsPage
} from '../pages';

import { DojoServiceProvider } from '../dojo-service-context';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ChampionshipDetails } from '../dojo-components/championship-details';
import teacherDetails from '../dojo-components/teacher-details';

export default class App extends Component {
  
  state = {
    dojoService: new DojoService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  onServiceChange = () => {
    this.setState( ({dojoService}) => {
      const Service = dojoService instanceof DojoService ? MockDojoService : DojoService;
      return { dojoService: new Service()};
    });
  };

  render() {
    return (
      <ErrorCollector>
        <DojoServiceProvider value={this.state.dojoService} >
          <Router>


            <div className="App">
              <Header onServiceChange={this.onServiceChange}/>

              <header className="App-header">

              <img src={logo} className="App-logo" alt="logo" />

              <RandomAthlete />
              

              <Switch>
                <Route path="/" render={() => <p>Welcome to <code>JudoSport.gr</code></p>} exact />
                <Route path="/athletes/:id?" component={AthletesPage} />
              </Switch>

              
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


          </Router>
        </DojoServiceProvider>
      </ErrorCollector>
    );
  }
}