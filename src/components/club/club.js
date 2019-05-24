import React, { Component } from 'react';
import ClubDojo from '../club-dojo';
import { connect } from 'react-redux';

import { withDojoClubService } from '../hoc-helpers';

import './club.css';

class Club extends Component {

    componentDidMount() {
        const { dojoClubService } = this.props;
        const data = dojoClubService.getDojoClub();

        

        console.log(data)
        console.log(this.props)

        // this.props.clubLoaded(data);
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

const mapDispatchToProps = (dispatch) => {
    return {
        clubLoaded: (dojos) => {
            dispatch({
                type: 'CLUB_LOADED',
                payload: dojos
            })
        }
    }
}

export default withDojoClubService()
    (connect(mapStateToProps, mapDispatchToProps)(Club)
);