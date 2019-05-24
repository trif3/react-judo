const initialState = {
  club: {
      dojos: []
  }
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CLUB_LOADED' :
            return {
                club: action.payload
            };
        default :
            return state;
    }
}

export default reducer;