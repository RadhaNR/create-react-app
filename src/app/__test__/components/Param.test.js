import React from 'react';
import { shallow } from 'enzyme';
import Param from '../../components/Param';


describe('Pure componnt should load', () => {
  let wrapper;
  let match = {
    params: {
      id: 1234
    }
  };
  beforeEach(() => {
    wrapper = shallow(<Param match={match}/>);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should have div with class', () => {
    let node = wrapper.find('div')
    expect(node.hasClass('param')).toBeTruthy();
  });

  it('should have value displayed', () => {
    let div = wrapper.find('.param');
    expect(div.contains(1234)).toBeTruthy();
  });

  it('should have value displayed correct value', () => {
    let div = wrapper.find('.param');
    expect(div.text()).toEqual("1234");
  });

});

