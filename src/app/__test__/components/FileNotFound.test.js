import React from 'react';
import { shallow } from 'enzyme';
import FileNotFound from '../../components/FileNotFound';


describe('When FileNotFound component is given', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FileNotFound />);
  });

  
  it('should render the component', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should have paragraph displyed', () => {
    expect(wrapper.find('.content').text()).toEqual(' File Not Found !!!!!!');
  });

});

