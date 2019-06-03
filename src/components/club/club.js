import React, { Component } from 'react';
import ClubDojo from '../club-dojo';
import { connect } from 'react-redux';
import { withDojoClubService } from '../hoc-helpers';
import { clubLoaded } from '../../actions';
import { compose } from '../../utils';
import './club.css';

class Club extends Component {

    componentDidMount() {
        const { dojoClubService } = this.props;
        const data = dojoClubService.getDojoClub();

        this.props.clubLoaded(data.club);
    }

    render() {
        const {dojos} = this.props;
        return(
            <ul className="club">
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

const mapDispatchToProps = {
    clubLoaded
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         clubLoaded
//     }, dispatch)
// }


// const mapDispatchToProps = (dispatch) => {
//     return {
//         clubLoaded: (dojos) => {
//             dispatch(clubLoaded(dojos))
//         }
//     }
// }


// const mapDispatchToProps = (dispatch) => {
//     return {
//         clubLoaded: (dojos) => {
//             dispatch({
//                 type: 'CLUB_LOADED',
//                 payload: dojos
//             })
//         }
//     }
// }

export default compose(
    withDojoClubService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Club);