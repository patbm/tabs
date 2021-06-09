import TYPE from './action-types';

export const initialState = {
    drinks: [],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TYPE.GET_DRINKS_SUCCESS:
            return {...state, drinks: action.payload};
        default:
            return state;
    }
}

export default reducer;