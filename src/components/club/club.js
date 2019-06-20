import React, { Component } from 'react';
import Dojo from '../dojo';
import Spinner from '../spinner'
import { connect } from 'react-redux';
import { withDojoClubService } from '../hoc-helpers';
import { clubLoaded } from '../../actions';
import { compose } from '../../utils';
import './club.css';

class Club extends Component {

    componentDidMount() {
        const { dojoClubService, clubLoaded } = this.props;
        dojoClubService.getDojoClub()
            .then((data) => clubLoaded(data.club));
    }

    render() {
        const {dojos, loading } = this.props;
        if(loading){
            return <Spinner />
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
        loading: state.loading
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