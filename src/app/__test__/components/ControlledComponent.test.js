import React from 'react';
import { shallow } from 'enzyme';
import ControlledComponent from '../../components/ControlledComponent';


describe('When Controlled  component is given', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ControlledComponent />);
  });


  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render form', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('should render email field', () => {
    expect(wrapper.find('.userName')).toHaveLength(1);
  });

  it('should render password field', () => {
    expect(wrapper.find('.password')).toHaveLength(1);
  });

  it('should render button field', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
  describe('When onChange event is not triggered on userName field', () => {
    it('should have empty state', () => {
      expect(wrapper.state().userName).toEqual('');
    });
  });

  describe('When onChange event is not triggered on password field', () => {
    it('should have empty state', () => {
      expect(wrapper.state().password).toEqual('');
    });
  });

  describe('When onChange event triggered on userName field', () => {
    beforeEach(() => {
      const userName = wrapper.find('.userName');
      userName.simulate('change', { target: { value: 'radha.n@hcl.com' } });
    })
    it('should have update the state', () => {
      expect(wrapper.state().userName).toEqual('radha.n@hcl.com');
    })
  });

  describe('When onChange event triggered on password field', () => {
    beforeEach(() => {
      const password = wrapper.find('.password');
      password.simulate('change', { target: { value: 'Test@123' } });
    })
    it('should have update the state', () => {
      expect(wrapper.state().password).toEqual('Test@123');
    })
  });

  describe('When submit button is clicked', () => {
    beforeEach(() => {
      wrapper.find('.userName').simulate('change', { target: { value: 'radha.n@hcl.com' } });
      wrapper.find('.password').simulate('change', { target: { value: 'Test@123' } });

      const fakeEvent = { preventDefault: () => console.log('preventDefault') };
      const submit = wrapper.find('button');
      submit.simulate('click', fakeEvent);
    });

    it('should have excepted userName', () => {
      expect(wrapper.state().userName).toEqual('radha.n@hcl.com');
    });

    it('should have excepted Password', () => {
      expect(wrapper.state().password).toEqual('Test@123');
    });
  });

});

