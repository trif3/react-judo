import React, { Component } from 'react';
import DojoService from '../../services/dojo-service';
import './random-athlete.css'
export default class RandomAthlete extends Component {

    dojoService = new DojoService()
 
    state = { };

    constructor() {
        super();
        this.onAthleteLoaded();
    }

    onAthleteLoaded(){
        this.dojoService
            .getAthlete()
            .then( (athlete) => {
                this.setState(athlete);
            });
    }

    render() {
        const { id, name, pic, gender, email } = this.state;
        return (
            <div className="random-athlete jumbotron rounded">
                <img className="athlete-image" src={pic} alt={name} />
                <div>
                    <h4>{name}</h4>
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
            </div>
        );
    }
}

