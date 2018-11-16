import * as types from '../../actions/actionTypes';
import * as cartActions from '../../actions/cartAction';

describe('Gievn Cart Action: ', () => {
    describe('When addToCart() called and success', () => {
        it('should create action object', () => {
            let item = {
                productId: 123,
                name: 'HCL'
            };
            let actionObj = {
                type: types.ADD_TO_CART,
                item
            };
            let response = cartActions.addToCart(item);
            expect(response).toEqual(actionObj);
        });
    });

    describe('When removeFromCart() called and success', () => {
        it('should create action object', () => {
            var actionObj = {
                type: types.REMOVE_FROM_CART,
                id: 123
            }
            let response = cartActions.removeFromCart(123);
            expect(response).toEqual(actionObj);
        });
    });

    describe('When emptyCart() called and success', () => {
        it('should create action object', () => {
            var actionObj = {
                type: types.EMPTY_CART
            }
            let response = cartActions.emptyCart();
            expect(response).toEqual(actionObj);
        });
    });
});