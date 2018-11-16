import React from 'react';
import { mount } from 'enzyme';
import UnConrolledComponent from '../../components/UnConrolledComponent';


describe('When UnConrolledComponent  component is given', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<UnConrolledComponent />);
  });


  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render form', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('should render email field', () => {
    expect(wrapper.find('#userName')).toHaveLength(1);
  });

  it('should render password field', () => {
    expect(wrapper.find('#password')).toHaveLength(1);
  });

  it('should render button field', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  describe('When no value is entered on userName field', () => {
    it('should have empty value', () => {
      expect(wrapper.instance().emailId.value).toEqual('');
    });
  });

  describe('When submit button is clicked', () => {
    beforeEach(() => {
      wrapper.find('#userName').instance().value = "radha.n@hcl.com";
      wrapper.find('#password').instance().value = "Test";
      // userName.simulate('focus');
      //userName.simulate('change', { target: { value: 'radha1111' } });
     
      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      let button = wrapper.find('button');
      button.simulate('click', fakeEvent);
    });

    it('should have correct email', () => {
      expect(wrapper.instance().emailId.value).toEqual('radha.n@hcl.com');
    });

    it('should have correct password', () => {
      expect(wrapper.instance().password.value).toEqual('Test');
    });
  });

});

