import React from 'react';
import { shallow, render } from 'enzyme';
import PureComponents from '../../components/PureComponent';

import renderer from 'react-test-renderer';

describe('When PureComponent is given', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = renderer.create(
      <PureComponents />
    );
  });
  it('should render the component', () => {
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('When changeText() is called', () => {
    beforeEach(() => {
      wrapper.getInstance().changeText();
    });

    it('should display updated value', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });

  describe('When button is clicked', () => {
    beforeEach(() => {
      wrapper.toJSON().children[1].props.onClick();
    });

    it('should display updated value', () => {
      expect(wrapper.toJSON()).toMatchSnapshot();
    });
  });  
});

// describe('When PureComponent is given', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<PureComponents />);
//   });

//   it('render snapshot', () => {
//     expect(wrapper).toMatchSnapshot();
//   });

//   // it('renders without crashing', () => {
//   //   expect(wrapper).toHaveLength(1);
//   // });

//   // it('should have div with class', () => {
//   //   expect(wrapper.find('.pureComp')).toHaveLength(1);
//   // });

//   it('should have text displayed', () => {
//     //expect(wrapper.find('.data').text()).toEqual('PureComponent Text : ' + wrapper.state().age)
//     expect(wrapper.find('.data').text()).toMatchSnapshot();
//   });

//   it('should have updated text displayed', () => {
//     wrapper.find('button').simulate('click');
//     expect(wrapper.find('.data').text()).toEqual('PureComponent Text : ' + wrapper.state().age)
//     //expect(wrapper.find('.data').text()).toMatchSnapshot();
//   });

// });

