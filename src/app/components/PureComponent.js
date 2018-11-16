import React, { PureComponent } from 'react';

export default class PureComponents extends PureComponent {
    constructor() {
        super();
        this.state = {
            name: 'HCL Blore',
            age: 304
        }
    }

    // componentWillUnmount() {
    //     console.log('com will unmount..... Purecomp')
    // }
    changeText = () => {
        console.log('inside changeText function !!!!')
        this.setState({age: 705});
    }
    render() {
        console.log('PureCOmponent rendering.......' + this.state.age)
        return (
            <div className="pureComp1">
                <div className="data">PureComponent Text : {this.state.age}</div>
                <button onClick={this.changeText}>Click</button>
            </div>
        )
    }
}