import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
//import { MemoryRouter } from 'react-router';
import { MemoryRouter, Route, browserHistory, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import ClassComponent from './app/components/ClassComponent';
import ES5Func, { ES6Func } from './app/components/FunctionComponent';
import EventComponent from './app/components/EventComponent';
import ReactLifeCycle from './app/components/ReactLifeCycle';
import PureComponents from './app/components/PureComponent';
import ShouldUpdate from './app/components/ShouldUpdate';
import ParentComponent from './app/components/ParentComponent';
import Param from './app/components/Param';
import Ajax from './app/components/Ajax';
import ProductList from './app/components/ProductList';
import Cart from './app/components/Cart';
import ControlledComponent from './app/components/ControlledComponent';
import UnControlledComponent from './app/components/UnConrolledComponent';
import UserPage from './app/components/UserPage';
import UserComponent from './app/components/UserComponent';
import ProductListComponent from './app/components/ProductListComponent';
import UserList from './app/components/UserList';
import User from './app/components/User';
import FileNotFound from './app/components/FileNotFound';


describe('When App component is given', () => {
  let wrapper;

 
 
  describe('And when userList route is given', () => {
    let userList;
    beforeEach(()=> {
      wrapper = mount(
        <MemoryRouter initialEntries={['/userList']} initialIndex={0} >
          <App />
        </MemoryRouter>
      );
      userList = wrapper.find(UserList).first();
    });

    it('should redirect to UserList component', () => {
      expect(userList.exists()).toBe(true);
    });
  });

  describe('And when fromFun route is given', () => {
    let fromFun;
    beforeEach(()=> {
      wrapper = mount(
        <MemoryRouter initialEntries={['/fromFun']} initialIndex={0} >
          <App />
        </MemoryRouter>
      );
      fromFun = wrapper.find('.hello');
    });

    it('should redirect to inline component', () => {
      expect(fromFun.text()).toEqual("Helllo");
    });
  });

  describe('And when ajax route is given', () => {
    let ajax;
    beforeEach(()=> {
      wrapper = mount(
        <MemoryRouter initialEntries={['/ajax']} initialIndex={0} >
          <App />
        </MemoryRouter>
      );
      ajax = wrapper.find(Ajax).first();
    });

    it('should redirect to Ajax component', () => {
      expect(ajax.exists()).toBe(true);
    });
  });

  describe('And when controlled route is given', () => {
    let controlled;
    beforeEach(()=> {
      wrapper = mount(
        <MemoryRouter initialEntries={['/controlled']} initialIndex={0} >
          <App />
        </MemoryRouter>
      );
      controlled = wrapper.find(ControlledComponent).first();
    });

    it('should redirect to ControlledComponent component', () => {
      expect(controlled.exists()).toBe(true);
    });

    it('should display form', () => {
      expect(controlled.find('form').length).toBe(1);
    });
  });

  describe('And when unControlled route is given', () => {
    let unControlled;
    beforeEach(()=> {
      wrapper = mount(
        <MemoryRouter initialEntries={['/unControlled']} initialIndex={0} >
          <App />
        </MemoryRouter>
      );
      unControlled = wrapper.find(UnControlledComponent).first();
    });

    it('should redirect to UnControlledComponent component', () => {
      expect(unControlled.exists()).toBe(true);
    });

    it('should display form', () => {
      expect(unControlled.find('form').length).toBe(1);
    });
  });

  describe('And when /param/4567 route is given', () => {
    let param;
    beforeEach(()=> {
     
      wrapper = mount(
        <MemoryRouter initialEntries={['/param/4567']} initialIndex={0} >
          <App />
        </MemoryRouter>
      );
      param = wrapper.find(Param).first();
    });

    it('should redirect to UserPage component', () => {
      expect(param.exists()).toBe(true);
    });

    it('should have value displayed correct parameter', () => {
      let div = param.find('.param');
      expect(div.text()).toEqual("4567");
    });
  });

  describe('And when unknnown route is given', () => {
    let notFound;
    beforeEach(()=> {
      wrapper = mount(
        <MemoryRouter initialEntries={['/dummyRoute']} initialIndex={0} >
          <App />
        </MemoryRouter>
      );
      notFound = wrapper.find(FileNotFound).first();
      //console.log(wrapper.html());
      //console.log(notFound)
    });

    it('should redirect to 400 page', () => {
      //console.log(notFound)
      expect(notFound.exists()).toBe(true);
    });

    it('should display correct text', () => {
      expect(notFound.text()).toEqual(" File Not Found !!!!!!");
    });
  });


  describe('And when default route is given', () => {
    let pureComp;

    beforeEach(()=> {
      wrapper = mount(
        <MemoryRouter initialEntries={['/']} initialIndex={0} >
          <App />
        </MemoryRouter>
      );
      pureComp = wrapper.find(PureComponents).first();
    });

    it('should redirect to pure component', () => {
      expect(pureComp.exists()).toBe(true);
    });

    it('should display correct text', () => {
      expect(pureComp.text()).toEqual("PureComponent Text");
    });
  });

  
});


