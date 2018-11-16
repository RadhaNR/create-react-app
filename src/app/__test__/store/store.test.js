import { createStore } from 'redux';
import rootReducer from '../../reducers';
import configureStore from '../../store/store';
import * as cartActions from '../../actions/cartAction';

describe('When store is given', () => {
const initialState = [];
    it("should handle addItemToCart", () => {
        //const store = createStore(rootReducer, initialState);
        const store = configureStore(initialState);
        const item = {
            productId: 123,
            name: 'HCL Laptop'
        };
        const action = cartActions.addToCart(item);
        store.dispatch(action);
        const actual = store.getState();
        console.log(actual);
        expect(actual.cart).toEqual([item]);
    });

});