import * as actionTypes from './actionTypes';

export const addToCart = (item) => {
    console.log("in action/.....", item)
    return {
        type: actionTypes.ADD_TO_CART,
        item
    }
}

export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        id
    }
}

export const emptyCart = () => {
    return {
        type: actionTypes.EMPTY_CART
    }
}