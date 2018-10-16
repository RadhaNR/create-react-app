import React, { Component } from 'react';
import './App.css';
import ClassComponent from './app/components/ClassComponent';
import ES5Func, { ES6Func } from './app/components/FunctionComponent';
import EventComponent from './app/components/EventComponent';
import ReactLifeCycle from './app/components/ReactLifeCycle';
import PureComponents from './app/components/PureComponent';
import ShouldUpdate from './app/components/ShouldUpdate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'HCL',
      age: 42
    }
  }

  clickEvent = () => {
    this.setState({ name: 'HCL Tech', age: 100 });
    this.setState({ age: 100 });
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.name} ---- {this.state.age}</p>
        <button onClick={this.clickEvent}>Change Parent on click</button>
        <ClassComponent />
        <ES5Func />
        <ES6Func />
        <EventComponent />
        <ReactLifeCycle />
        <PureComponents />
        <ShouldUpdate />
      </div>
    );
  }
}

export default App;
