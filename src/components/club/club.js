import React, { Component } from 'react';
import ClubDojo from '../club-dojo';
import { connect } from 'react-redux';

import { withDojoClubService } from '../hoc-helpers';

import './club.css';

class Club extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const {dojos} = this.props;
        return(
            <ul>
                {
                    dojos.map( (dojo) => {
                        return (
                            <li key={dojo.id}>
                                <ClubDojo dojo={dojo}/>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        dojos: state.club.dojos
     }
}

export default connect(mapStateToProps)(Club);