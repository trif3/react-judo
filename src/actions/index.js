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

export const dojoAddedToCompare = (dojoId) => {
    return {
        type: 'DOJO_ADDED_TO_COMPARE',
        payload: dojoId
    }
}

export const dojoRemovedFromCompare = (dojoId) => {
    return {
        type: 'DOJO_REMOVED_FROM_COMPARE',
        payload: dojoId
    }
}

export const allDojosRemovedFromCompare = (dojoId) => {
    return {
        type: 'ALL_DOJOS_REMOVED_FROM_COMPARE',
        payload: dojoId
    }
}

const fetchClub = (dojoClubService, dispatch) => () => {
    dispatch( clubRequested());
    dojoClubService.getDojoClub()
        .then((data) => dispatch(clubLoaded(data.club)))
        .catch((err) => dispatch(clubError(err)));
};

export {
    fetchClub
};