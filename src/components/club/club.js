import React, { Component } from 'react';
import Dojo from '../dojo';
import Spinner from '../spinner'
import { connect } from 'react-redux';
import { withDojoClubService } from '../hoc-helpers';
import { clubLoaded, clubRequested, clubError } from '../../actions';
import { compose } from '../../utils';
import './club.css';
import ErrorIndicator from '../error-indicator';

class Club extends Component {

    componentDidMount() {
        const { dojoClubService, clubLoaded, clubRequested, clubError } = this.props;
        clubRequested();
        dojoClubService.getDojoClub()
            .then((data) => clubLoaded(data.club))
            .catch((err) => clubError(err));
    }

    render() {
        const {dojos, loading, error } = this.props;
        if(loading){
            return <Spinner />
        }
        if(error){
            return <ErrorIndicator />
        }
        return(
            <ul className="club">
                {
                    dojos.map( (dojo) => {
                        return (
                            <li key={dojo.id}>
                                <Dojo dojo={dojo}/>
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
        dojos: state.club.dojos,
        loading: state.loading,
        error: state.error
     }
}

const mapDispatchToProps = {
    clubLoaded,
    clubRequested,
    clubError
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