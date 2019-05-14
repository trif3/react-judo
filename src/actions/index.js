const clubLoaded = (newClub) => {
    return {
        type: 'CLUB_LOADED',
        payload: newClub
    }
}

export {
    clubLoaded
}