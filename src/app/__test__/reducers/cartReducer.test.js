import * as types from '../../actions/actionTypes';
import * as cartReducer from '../../reducers/cartReducer';

describe('Given Cart Reducer: ', () => {
    describe('When reducer is called', () => {

        describe('When cart/state is empty', () => {
            it('should return "addItemToCart()" success new state', () => {
                const item = { productId: 456, name: 'HCL' };
                const actionObj = { type: types.ADD_TO_CART, item };
                expect(cartReducer.cartReducer([], actionObj)).toEqual([item]);
            });
        });

        describe('When cart/state is not empty', () => {
            it('should return "addItemToCart()" success new state', () => {
                const prevItem = { productId: 123, name: 'HCL Tech' };
                const item = { productId: 456, name: 'HCL' };
                const actionObj = { type: types.ADD_TO_CART, item };
                expect(cartReducer.cartReducer([prevItem], actionObj)).toEqual([prevItem, item]);
            });

        });

        describe('when "removeFromCart()" is performed', () => {
            it('should return removeFromCart success new state', () => {
                const actionObj = { type: types.REMOVE_FROM_CART, id: 456 };
                expect(cartReducer.cartReducer([], actionObj)).toEqual([]);
            });    
        });

        
        describe('when cart is not empty', () => {
            it('should return "clearCart()" success new state', () => {
                const actionObj = { type: types.EMPTY_CART };
                expect(cartReducer.cartReducer([{ productId: 123, name: 'HCL' }], actionObj)).toEqual([]);
            });
        });

        describe('when cart is empty', () => {
            it('should return "clearCart()" success new state', () => {
                const actionObj = { type: types.EMPTY_CART };
                expect(cartReducer.cartReducer([], actionObj)).toEqual([]);
            });
        });

        describe('when no action is matched', () => {
            it('should return default state', () => {
                const actionObj = { type: types.DEFAULT };
                expect(cartReducer.cartReducer([], actionObj)).toEqual([]);
            });
        });

    });
});