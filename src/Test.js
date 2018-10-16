import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
      <div className="App">
         <div>Welcome {this.props.name}  !!!!</div>
         <div>
           {this.props.age} 
         </div>
         
      </div>
    );
  }
}

export default Test;
