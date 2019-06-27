const initialState = {
    club: {
        dojos: []
    },
    loading: true,
    error: null,
    compareItems: [],
    countAthletes: 90
};

const updateCompareItems = (compareItems, item, idx) => {
    if(idx === -1){
        return [
            ...compareItems, 
            item
        ];
    }

    return [
        ...compareItems.slice(0, idx), 
        item, 
        ...compareItems.slice(idx + 1)
    ];
}


const updateCompareItemOne = (dojo, item = {}) => {
    const { id = dojo.id, name = dojo.name, athletes = 0, rate = 0} = item;

    return {
        id, 
        name, 
        athletes: athletes + dojo.athletes.length,
        rate : rate + dojo.rate
    }

    // if (item) {
    //     return {
    //         ...item, 
    //         athletes: item.athletes + dojo.athletes.length,
    //         rate: item.rate + dojo.rate
    //     }
    // } else {
    //     return {
    //         id: dojo.id,
    //         name: dojo.name,
    //         athletes: dojo.athletes.length,
    //         rate: dojo.rate
    //     }
    // }
}

const reducer = (state = initialState, action) => {

    // console.log(action.type);

    switch (action.type) {
        case 'FETCH_CLUB_REQUEST':
            return {
                ...state,
                club: [],
                    loading: true,
                    error: null
            };
        case 'FETCH_CLUB_SUCCESS':
            return {
                ...state,
                club: action.payload,
                    loading: false,
                    error: null
            };

        case 'FETCH_CLUB_FAILURE':
            return {
                ...state,
                club: [],
                    loading: false,
                    error: action.payload
            };

        case 'DOJO_ADDED_TO_COMPARE':
            const dojoId = action.payload;
            const dojo = state.club.dojos.find((dojo) => dojo.id === dojoId);
            const itemIndex = state.compareItems.findIndex(({id}) => id === dojoId);
            const item = state.compareItems[itemIndex];

            const newItem = updateCompareItemOne(dojo, item);
            return {
                ...state,
                compareItems: updateCompareItems(state.compareItems, newItem, itemIndex)
            }

            default:
                return state;
    }
}

export default reducer;