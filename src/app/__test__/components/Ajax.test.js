import React from 'react';
import { shallow, mount } from 'enzyme';
import Ajax from '../../components/Ajax';
import * as apis from '../../api/api';

/**
 * below testcase is used to mock the promise and check wheather componentDIdMount is called and 
 * check getData() is called
 */
const responseObj = { data: { "page": 1, "per_page": 3, "total": 12, "total_pages": 4, "data": [{ "id": 1, "first_name": "George", "last_name": "Bluth", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" }, { "id": 2, "first_name": "Janet", "last_name": "Weaver", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg" }, { "id": 3, "first_name": "Emma", "last_name": "Wong", "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg" }] } };

apis.getData = jest.fn(() => Promise.resolve(responseObj));

describe('When Ajax component is given', () => {
    let didMountSpy;
    let wrapper;
    beforeEach(() => {
        didMountSpy = jest.spyOn(Ajax.prototype, 'componentDidMount');
    });

    afterEach(() => {
        didMountSpy.mockClear();
    });

    it('should NOT render the component', () => {
        expect(wrapper).not.toBeDefined();
    });

    it('should NOT have called "ComponentDidMount()" ', () => {
        expect(didMountSpy).toHaveBeenCalledTimes(0);
    });

    describe('When render() is called', () => {
        beforeEach(() => {
            wrapper = mount(<Ajax />);
        });

        it('should render the component', () => {
            expect(wrapper).toHaveLength(1);
        });

        it('should have called "ComponentDidMount()" ', () => {
            expect(didMountSpy).toHaveBeenCalledTimes(1);
        });

        it('should have called "getData()"', () => {
            expect(apis.getData).toHaveBeenCalled();
        });
    });
});

/**
 * This test suits uses async and await to handle promises
 */
describe('When component is given: ', () => {
    let didMountSpy;
    let wrapper;
    beforeEach(() => {
        didMountSpy = jest.spyOn(Ajax.prototype, 'componentDidMount');
        wrapper = mount(<Ajax />);
    });
    it('shoud have called expected methods', async () => {
        const returnValue = await apis.getData();
        expect(returnValue).toBe(responseObj);
        expect(didMountSpy).toHaveBeenCalled();
        expect(apis.getData).toHaveBeenCalled();        
    });

    it('should call getData with resolves', () => {
        expect.assertions(1);
        return expect(apis.getData()).resolves.toEqual(responseObj);
      });
});