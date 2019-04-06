import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DojoService from '../../services/dojo-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './random-athlete.css'

export default class RandomAthlete extends Component {
    
    static defaultProps = {
        updateInterval: 10000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };

    dojoService = new DojoService()

    state = {
        athlete: {},
        loading: true
    };

    componentDidMount() {
        const {updateInterval} = this.props;
        this.updateAthlete();
        this.interval = setInterval(this.updateAthlete, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onAthleteLoaded = (athlete) => {
        this.setState({
            athlete, 
            loading: false,
            error: false
        });
    }

    onError = (err) => { 
        this.setState({
            error: true,
            loading: false
        })
    }

    updateAthlete = () => {
        this.dojoService
            .getAthlete()
            .then(this.onAthleteLoaded)
            .catch(this.onError);
    }

    render() {
        const { athlete, loading, error } = this.state;
        const hasAthlete = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasAthlete ? <AthleteView athlete={athlete}/> : null;
        return (
            <div className="random-athlete jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const AthleteView = ({athlete}) => {

    const { id, name, pic, gender, email }  = athlete;

    return (
        <React.Fragment>
            <div>
        <ul className="list-group list-group-flash">
            <li className="list-group-item">
                <img className="athlete-image" src={pic} alt={name} />
                <h5>{name}</h5>
            </li>
        </ul>
    </div>
    <div>
        <ul className="list-group list-group-flash">
            <li className="list-group-item">
                <span className="term">Id: </span>
                <span>{id}</span>
            </li>
            <li className="list-group-item">
                <span className="term">Gender: </span>
                <span>{gender}</span>
            </li>
            <li className="list-group-item">
                <span className="term">email: </span>
                <span>{email}</span>
            </li>
        </ul>
    </div>
        </React.Fragment>
    );
}