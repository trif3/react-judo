const initialState = {
  club: {
      dojos: []
  }, 
  loading: true
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CLUB_LOADED' :
            return {
                club: action.payload,
                loading: false
            };
        default :
            return state;
    }
}

export default reducer;