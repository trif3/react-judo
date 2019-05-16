import React, { Component } from 'react';
import ClubDojo from '../club-dojo';
import { connect } from 'react-redux';


import './club.css';

class Club extends Component {

    componentDidMount() {

    }

    render() {
        const {dojos} = this.props;
        console.log(this.props)
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
    console.log(state)
    return { 
        dojos: state.club.dojos
     }
}

export default connect(mapStateToProps)(Club);