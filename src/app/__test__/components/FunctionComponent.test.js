import React from 'react';
import { shallow } from 'enzyme';
import ES5Func, { ES6Func } from '../../components/FunctionComponent';


describe('When Function based component is given', () => {
    let wrapper;
    const name = "Radha";

    describe('And when ES5Func is imported', () => {

        beforeEach(() => {
            wrapper = shallow(<ES5Func name={name} />);
        });

        it('should display ES5Func', () => {
            expect(wrapper).toHaveLength(1);
        });

        it('should disply greeting', () => {
            expect(wrapper.find('h1').text()).toEqual('Welcome ' + name);
        });

        it('should display text', () => {
            expect(wrapper.find('h2').text()).toEqual('This is Es5 Function based component');
        });
    });

    describe('And when ES6Func is imported', () => {

        beforeEach(() => {
            wrapper = shallow(<ES6Func name={name} />);
        });

        it('should display ES5Func', () => {
            expect(wrapper).toHaveLength(1);
        });

        it('should disply greeting', () => {
            expect(wrapper.find('h1').text()).toEqual('Welcome ' + name);
        });

        it('should display text', () => {
            expect(wrapper.find('h2').text()).toEqual('This is ES6 Function based component');
        });
    });
});

