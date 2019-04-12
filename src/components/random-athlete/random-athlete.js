import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import DojoService from '../../services/dojo-service';

import './random-athlete.css';

export default class RandomAthlete extends Component {

  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  dojoService = new DojoService();

  state = {
    athlete: {},
    loading: true
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updateAthlete();
    this.interval = setInterval(this.updateAthlete, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onAthletLoaded = (athlete) => {
    this.setState({
      athlete,
      loading: false,
      error: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updateAthlete = () => {
    const id = Math.floor(Math.random()*17) + 2;
    this.dojoService
      .getAthlete(id)
      .then(this.onAthletLoaded)
      .catch(this.onError);
  };

  render() {
    const { athlete, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <AthleteView athlete={athlete}/> : null;

    return (
      <div className="random-athlete jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }

}

const AthleteView = ({ athlete }) => {

  const { id, name, gender } = athlete;

  return (
    <React.Fragment>
      <img className="athlete-image"
           src={`https://placeimg.com/400/500/people`}
           alt="athlete" />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Id</span>
            <span>{id}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Name</span>
            <span>{name}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};