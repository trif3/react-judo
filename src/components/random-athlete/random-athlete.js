import React, { Component } from 'react';
import DojoService from '../../services/dojo-service';
import './random-athlete.css'
export default class RandomAthlete extends Component {

    dojoService = new DojoService()
 
    state = {
        athlete: {},
        loading: true
    };

    render() {
        const {athlete} = this.state;
        return (
            <div className="rendom-athlete jumbotron rounded">
                <AthleteView athlete={athlete}/> 
            </div>
        );
    }
}

const AthleteView = ({athlete}) => {
    const { name, lastName, birth} = athlete;

    return(
        <React.Fragment>
        <img className="athlete-image"
             src="https://avatars0.githubusercontent.com/u/22911094?s=460"
             alt="athlete"/>
        <div>
            <h4>{name}</h4>
        </div>     
        </React.Fragment>
    );
};

  