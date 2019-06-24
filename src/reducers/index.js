const initialState = {
  club: {
      dojos: []
  }, 
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CLUB_REQUESTED' :
            return {
                club: [],
                loading: true,
                error: null
            };
        case 'CLUB_LOADED' :
            return {
                club: action.payload,
                loading: false,
                error: null
            };

        case 'CLUB_ERROR' :
            return {
                club: [],
                loading: false,
                error: action.payload
            };

        default :
            return state;
    }
}

export default reducer;