const initialState = {
  club: {
      dojos: []
  }, 
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_CLUB_REQUEST' :
            return {
                club: [],
                loading: true,
                error: null
            };
        case 'FETCH_CLUB_SUCCESS' :
            return {
                club: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_CLUB_FAILURE' :
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