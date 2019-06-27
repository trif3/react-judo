import React, { Component } from 'react';
import Dojo from '../dojo';
import Spinner from '../spinner'
import { connect } from 'react-redux';
import { withDojoClubService } from '../hoc-helpers';
import { fetchClub, dojoAddedToCompare } from '../../actions';
import { compose } from '../../utils';
import './club.css';
import ErrorIndicator from '../error-indicator';


const Club = ({dojos, onAddedToCompare}) => {
    return(
        <ul className="club">
            {
                dojos.map( (dojo) => {
                    return (
                        <li key={dojo.id}>
                            <Dojo 
                                dojo={dojo}
                                onAddedToCompare={() => onAddedToCompare(dojo.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    );
};

class ClubContainer extends Component {

    componentDidMount() {
        this.props.fetchClub();
    }

    render() {
        const {dojos, loading, error, onAddedToCompare } = this.props;
        if(loading){
            return <Spinner />
        }
        if(error){
            return <ErrorIndicator />
        }

        return <Club dojos={dojos} onAddedToCompare={onAddedToCompare}/>
    }
}

const mapStateToProps = (state) => {
    return { 
        dojos: state.club.dojos,
        loading: state.loading,
        error: state.error
     }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { dojoClubService } = ownProps;
    return {
        fetchClub: fetchClub(dojoClubService, dispatch),
        onAddedToCompare: (id) => dispatch(dojoAddedToCompare(id))
    };
};

// const mapDispatchToProps = {
//     clubLoaded,
//     clubRequested,
//     clubError
// }

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
)(ClubContainer);