const clubRequested = () => {
    return {
        type: 'FETCH_CLUB_REQUEST'
    }
};


const clubLoaded = (newClub) => {
    return {
        type: 'FETCH_CLUB_SUCCESS',
        payload: newClub
    }
};



const clubError = (error) => {
    return {
        type: 'FETCH_CLUB_FAILURE',
        payload: error,
    };
};

const fetchClub = (dojoClubService, dispatch) => () => {
    dispatch( clubRequested());
    dojoClubService.getDojoClub()
        .then((data) => dispatch(clubLoaded(data.club)))
        .catch((err) => dispatch(clubError(err)));
};

export {
    fetchClub
};