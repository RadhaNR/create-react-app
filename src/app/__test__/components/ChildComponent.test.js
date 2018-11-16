import React from 'react';
import { shallow } from 'enzyme';
import ChildComponent from '../../components/ChildComponent';


describe('When Child component is given', () => {
    let wrapper;

    describe('And when userList is not empty', () => {        
        const list = [
            {
                courseName: 'ReactJs',
                cost: 770
            },
            {
                courseName: 'AngularJS',
                cost: 770
            },
        ]

        beforeEach(() => {
            wrapper = shallow(<ChildComponent list={list} />);
        });

        it('should have paragraph displyed', () => {
            expect(wrapper.find('p').text()).toEqual("Child Component recieved " + list.length + " items from its parent component");
        });

        it('should render list of users rows', () => {
            const table = wrapper.find('table');
            const tbody = table.find('tbody');
            const tr = tbody.find('tr');
            expect(tr.length).toBe(2);
        });
    });

    describe('And when userList is empty', () => {
        const emptyArry = [];

        beforeEach(() => {
            wrapper = shallow(<ChildComponent list={emptyArry} />);
        });

        it('should have paragraph displyed', () => {
            expect(wrapper.find('p').text()).toEqual("Child Component recieved " + emptyArry.length + " items from its parent component");
        });

        it('should not display user row', () => {
            const table = wrapper.find('table');
            const tbody = table.find('tbody');
            const tr = tbody.find('tr');
            expect(tr.length).toBe(0);
        });
    });
});

