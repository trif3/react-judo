import React, { Component } from 'react';
import Header from '../header';
import ErrorBoundry from '../error-boundry';
import DojoService from '../../services/dojo-service';
import VirtualDojoService from '../../services/virtual-dojo-service';

import {
  AthletePage,
  TeachersPage,
  ChampionshipPage,
  LoginPage,
  SecretPage } from '../pages';

import { DojoServiceProvider } from '../dojo-service-context';

import './app.css';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ChampionshipDetails from '../dojo-components/championship-details';
import Info from '../info';

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
    this.setState(({ dojoService }) => {
      const Service = dojoService instanceof DojoService ?
                        VirtualDojoService : DojoService;
      return {
        dojoService: new Service()
      };
    });
  };

  render() {

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <DojoServiceProvider value={this.state.dojoService} >
          <Router>
            <div className="dojo-app">
              <Header onServiceChange={this.onServiceChange} />
              {/* <RandomAthlete /> */}

              <Switch>
                <Route path="/" render={() => (<Info />)} exact />
                <Route path="/athletes/:id?" component={AthletePage} />
                <Route path="/teachers" component={TeachersPage} />
                <Route path="/championships" exact component={ChampionshipPage} />
                <Route path="/championships/:id"
                       render={({ match }) => {
                         const { id } = match.params;
                         return <ChampionshipDetails itemId={id} />
                       }}/>

                <Route
                  path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin}/>
                  )}/>

                <Route
                  path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn} />
                  )}/>

                <Route path="*" render={() => <h2>Wrong way!</h2>} />
              </Switch>

            </div>
          </Router>
        </DojoServiceProvider>
      </ErrorBoundry>
    );
  }
}
