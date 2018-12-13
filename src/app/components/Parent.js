import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor(props) {
        console.log("init method of parent")
        super(props);
        this.state = {
            text: 20
        }
    }
    change = () => {
        this.setState({text: this.state.text + 1});
    }
    render() {
        console.log(this.state.text)
        return (
            <div>
                 Parent Component -- {this.state.text}
                <Child data={'HCL1111'} second={this.state.text}/>
                <button onClick={this.change} >Change</button>
            </div>
        )
    }
}

export default Parent;