import React from 'react';
import { shallow } from 'enzyme';
import ClassComponent from '../../components/ClassComponent';


describe('When ClassComponent component is given', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ClassComponent />);
  });

  
  it('should render the component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should have paragraph displyed', () => {
    expect(wrapper.find('h1').text()).toEqual('Class based Component');
  });

});

