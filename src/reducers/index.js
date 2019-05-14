const initialState = {
  club: {
      dojos: [
          {
              id:1, 
              name: 'dojo one',
              details: ' det l s'
          }
      ]
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