import React, { Component } from 'react';

export default class ReactLifeCycle extends Component {
    constructor(props) {
        console.log("Component Initial phase....constructor")
        super(props);
        this.state = {
            text: 1
        }
    }
    componentWillMount() {
        console.log('Component will mount.....')
    }
    componentDidMount() {
        console.log('component did mount')
    }


    componentWillReceiveProps(newProps) {
        console.log('Component WILL RECIEVE PROPS!.....', newProps)
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('component shouldComponentUpdate..', newProps, newState)
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!....', nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!.....', prevProps, prevState)
    }

    componentWillUnmount() {
    
        console.log('Component WILL UNMOUNT!.....')
    }

    changeText = () => {

        this.setState({text: Math.random()});

        // setInterval(function() {
        //     console.log('in setinterval')
        // }, 1000);
    }

    render() {
        console.log('component rendering....')
        return (
            <div>
                <div>{this.state.text}</div>
                <button onClick={this.changeText}>Click to Change</button>
            </div>
        )
    }
}