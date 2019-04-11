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

import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

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
              <header className="App-header">
              <Header onServiceChange={this.onServiceChange}/>

              <img src={logo} className="App-logo" alt="logo" />

              <RandomAthlete />

              <Switch>
                <Route path="/" render={() => <h2>Welcome to Judosport.gr</h2>} exact />
                <Route path="/athletes/:id?" component={AthletesPage} />
              </Switch>

              </header>
            </div>    

          </Router>
        </DojoServiceProvider>
      </ErrorCollector>
    );
  }
}