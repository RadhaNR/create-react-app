import React from 'react';
import { shallow } from 'enzyme';
import ShouldUpdate from '../../components/ShouldUpdate';


describe('When ShouldUpdate based component is given', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ShouldUpdate />);
    });

    // it('should display ShouldUpdate', () => {
    //     expect(wrapper).toHaveLength(1);
    // });

    // it('should render button', () => {
    //     expect(wrapper.find('button')).toHaveLength(1);
    // });

    it('should display message', () => {
        //console.log(wrapper.state().text);
        expect(wrapper.find('div > div').text()).toEqual('Should Update component ----' + wrapper.state().text);
    });

    describe('When click to change button is clicked', () => {
        let changeTextSpy, shouldUpdateSpy;
        beforeEach(() => {
            const comp = shallow(<ShouldUpdate />);
            changeTextSpy = jest.spyOn(comp.instance(), 'changeText')
            shouldUpdateSpy = jest.spyOn(comp.instance(), 'shouldComponentUpdate');
            comp.instance().forceUpdate();
            comp.find('button').simulate('click');
        });

        it('should have called "changeText()"', () => {
            expect(changeTextSpy).toHaveBeenCalled();
        });

        it('should have called "shouldUpdateSpy()"', () => {
            expect(shouldUpdateSpy).toHaveBeenCalledTimes(1);
        });

        it('should update the state and render the updated value', () => {
            expect(wrapper.find('div > div').text()).toEqual('Should Update component ----' + wrapper.state().text);
        });
        
    });


});

