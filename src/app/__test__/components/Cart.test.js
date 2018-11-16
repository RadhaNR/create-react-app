import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import Cart, { mapStateToProps, mapDispatchToProps } from '../../components/Cart';
import * as actionType from '../../actions/actionTypes';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Given ProductList component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Cart store={store} />);
    });

    it('should have rendered Cart component', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should have rendered number of item present', () => {
        wrapper.setState({ cartList: [] });
        expect(wrapper.state().cartList.length).toBe(0);
    });

    describe('When product is set to cart', () => {
        beforeEach(() => {
            wrapper.setState({ cartList: [{ productId: 123, name: 'HP LAPTOP' }] });
        });

        it('should have updated number of item count', () => {
            expect(wrapper.state().cartList.length).toBe(1);
        });
    });

    describe('when mapStateToProps() called with state', () => {
        let stateObj = {
            cart: [{
                productId: 123,
                name: 'HP'
            }, {
                productId: 456,
                name: 'HP1234'
            }]
        }

        beforeEach('', () => {
            mapStateToProps(stateObj);
        })
        it('should return correct object', () => {
            expect(mapStateToProps(stateObj)).toEqual({ cart: stateObj.cart });
        });
    });

    describe('when mapDispatchToProps() called with state', () => {
        it('should return correct object', () => {
            const item = { productId: 1234, name: 'LAPTOP' };
            const dispatch = jest.fn();
            const actions = mapDispatchToProps(dispatch).actions;
            actions.addToCart(item);
            expect(dispatch.mock.calls[0]).toEqual([{ item, type: actionType.ADD_TO_CART }]);
        });
    });

});

