import * as actionTypes from '../actions/actionTypes';

const initialState = [];
export const cartReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            console.log(action, state)
            return [...state, action.item];
        case actionTypes.REMOVE_FROM_CART:
            console.log(action, state)
            return state.filter(item => item.id !== action.id);
        case actionTypes.EMPTY_CART:
            console.log(action, state);
            return initialState;
        default:
            return state;
    }
}
