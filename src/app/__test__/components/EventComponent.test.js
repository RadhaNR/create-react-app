import React from 'react';
import { mount, shallow } from 'enzyme';
import EventComponent from '../../components/EventComponent';


describe('When EventComponent  component is given', () => {
  let wrapper;
  it('should render', () => {
    wrapper = shallow(<EventComponent />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render buttons', () => {
    wrapper = shallow(<EventComponent />);
    expect(wrapper.find('#btn1')).toHaveLength(1);
    expect(wrapper.find('#btn2')).toHaveLength(1);
    expect(wrapper.find('#btn3')).toHaveLength(1);
    expect(wrapper.find('#btn4')).toHaveLength(0);
  });

  describe('When first button is cliked', () => {
    it('should have called delete function', () => {
      const comp = shallow(<EventComponent />);
      const spy = jest.spyOn(comp.instance(), 'delete');
      comp.instance().forceUpdate();
      comp.find('#btn1').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('When second button is cliked', () => {
    it('should have called deleteRow function', () => {
      const comp = shallow(<EventComponent />);
      const spy = jest.spyOn(comp.instance(), 'deleteRow');
      comp.instance().forceUpdate();
      comp.find('#btn2').simulate('mouseenter');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('When third button is cliked', () => {
    it('should have called es5FunClick function', () => {
      const comp = shallow(<EventComponent />);
      const spy = jest.spyOn(comp.instance(), 'es5FunClick');
      comp.instance().forceUpdate();
      comp.find('#btn3').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('When input is entered on search', () => {
    it('should have called handleSearch function', () => {
      const comp = shallow(<EventComponent />);
      const spy = jest.spyOn(comp.instance(), 'handleSearch');
      comp.instance().forceUpdate();
      comp.find('#search').simulate('change', { target: { value: 'radha.n@hcl.com' } });
      expect(spy).toHaveBeenCalled();
    });
  });
  
});

