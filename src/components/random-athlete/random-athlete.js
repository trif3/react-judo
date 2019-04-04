import React, { Component } from 'react';
import DojoService from '../../services/dojo-service';
import Spinner from '../spinner';
import './random-athlete.css'
export default class RandomAthlete extends Component {

    dojoService = new DojoService()
 
    state = { 
        athlete: {}, 
        loading: true
     };

    constructor() {
        super();
        this.updateAthlete();
    }

    onAthleteLoaded = (athlete) => {
        this.setState({
            athlete, 
            loading: false
        });
    }

    updateAthlete(){
        this.dojoService
            .getAthlete()
            .then(this.onAthleteLoaded);
    }

    render() {
        const { athlete, loading } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !loading ? <AthleteView athlete={athlete}/> : null;
        return (
            <div className="random-athlete jumbotron rounded">
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