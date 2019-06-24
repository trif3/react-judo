const clubLoaded = (newClub) => {
    return {
        type: 'CLUB_LOADED',
        payload: newClub
    }
};

const clubRequested = () => {
    return {
        type: 'CLUB_REQUESTED'
    }
};

const clubError = (error) => {
    return {
        type: 'CLUB_ERROR',
        payload: error,
    };
};

export {
    clubLoaded,
    clubRequested,
    clubError
};