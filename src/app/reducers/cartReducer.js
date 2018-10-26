import * as actionTypes from '../actions/actionTypes';

const initialState = [];
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return [...state, action.item];
        case actionTypes.REMOVE_FROM_CART:
            console.log(action, state)
            return state.filter(item => item.id !== action.id);
        case actionTypes.EMPTY_CART:
            return initialState;
        default:
            return state;
    }
}

export default cartReducer;