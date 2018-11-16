import React from 'react';
import { shallow } from 'enzyme';
import ParentComponent from '../../components/ParentComponent';


describe('Pure componnt should load', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ParentComponent />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render ChildComponent', () => {
    expect(wrapper.find('ChildComponent').length).toBe(1);
  });

  // it('should render users', () => {
  //   const childComp = wrapper.find('ChildComponent');
  //   const table = childComp.find('table');
  //   const tbody = table.find('tbody');
  //   const tr = tbody.find('tr');
  //   console.log("**********", tr)
  //   expect(tr).toBe(4);
  // });
});

