import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import  ProductList, { mapStateToProps, mapDispatchToProps } from '../../components/ProductList';
import * as actionType from '../../actions/actionTypes';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Given ProductList component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ProductList store={store} />);
    });

    it('should have rendered Cart component', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('when mapStateToProps() called with state', () => {
        let stateObj = {
            cart: [{
                productId: 123,
                name: 'HP'
            }, {
                productId: 456,
                name: 'HP1234'
            }]
        }
        
        expect(mapStateToProps(stateObj)).toEqual({ cart: stateObj.cart });
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

