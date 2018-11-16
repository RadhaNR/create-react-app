import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import './App.css';
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
import FileNotFound from './app/components/FileNotFound';


import UserList from './app/components/UserList';
import User from './app/components/User';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'HCL',
      age: 42,
      showChild: false,
      flag: true
    }
  }

  clickEvent = () => {
    this.setState({ name: 'HCL Tech', age: 100 });
    //this.setState({ age: 100 });
  }

  showHide = () => {
    this.setState({ showChild: !this.state.showChild });
  }

  change = () => {
    this.setState({ flag: !this.state.flag });
  }
  render() {
    let divTest;
    // if (this.state.showChild) {
    //   divTest = <div>
    //     <ClassComponent />
    //     <ES5Func />
    //     <ES6Func />
    //     <EventComponent />
    //     <ReactLifeCycle />
    //     <PureComponents />
    //     <ShouldUpdate />
    //     <UserList />
    //   </div>

    // }
    return (
      <div className="container-fluid">
        <button onClick={this.change}>Click here</button><br />
        <BrowserRouter>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div><Link to="/pureComp" id="pureComp"> PureComponent </Link></div>
              <div><Link to="/pccp" id="pccp">p-c and c-p</Link></div>
              <div><Link to="/userList" id="userList"> User List </Link></div>
              <div><Link to="/fromFun" id="fromFun"> From Function </Link></div>
              <div><Link to="/param/345345" id="param"> Param Component </Link></div>
              <div><Link to="/events" id="events">Events</Link></div>
              <div><Link to="/ajax" id="ajax"> Ajax </Link></div>
              <div><Link to="/productList" id="productList"> Product List </Link></div>
              <div><Link to="/cart" id="cart"> Cart </Link></div>
              <div><Link to="/controlled" id="controlled"> Controlled Component </Link></div>
              <div><Link to="/unControlled" id="unControlled"> UnControlled Component </Link></div>
              <div><Link to="/hoc" id="hoc">HOC </Link></div>
              <div><Link to="/userHoc" id="userHoc">Load Users using HOC</Link></div>
              <div><Link to="/productHoc" id="productHoc">Load Products using HOC</Link></div>

            </div>
            <div className="col-lg-9 col-md-9 col-sm-9">
              <Switch >
                <Route path="/" component={PureComponents} exact/>
                <Route path="/pureComp" component={PureComponents} />
                <Route path="/userList" component={UserList} />
                <Route path="/fromFun" render={() => <div className="hello">Helllo</div>} />
                <Route path="/param/:id" component={Param} />
                <Route path="/ajax" component={Ajax} />
                <Route path="/productList" component={ProductList} />
                <Route path="/cart" component={Cart} />
                <Route path="/controlled" component={ControlledComponent} />
                <Route path="/unControlled" component={UnControlledComponent} />
                <Route path="/hoc" component={UserPage} />
                <Route path="/userHoc" component={UserComponent} />
                <Route path="/productHoc" component={ProductListComponent} />
                <Route path="/pccp" component={ParentComponent} />
                <Route path="/events" component={EventComponent} />
                
                <Route component={FileNotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
