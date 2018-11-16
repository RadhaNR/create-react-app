import React, { Component } from 'react';

export default class ShouldUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 1
        }
    }

    shouldComponentUpdate(newProps, newState) {
        //console.log('ShouldUpdate shouldComponentUpdate..', newProps, newState, this.state.text);
        if (newState.text !== this.state.text) {
            return true;
        } else {
            return false;
        }
    }

    changeText = () => {
        this.setState({ text: this.state.text + Math.random() })
    }

    render() {
        console.log('ShouldUpdate rendering....')
        return (
            <div>
                <div>Should Update component ----{this.state.text}</div>

                <button onClick={this.changeText}>Click to change</button>
            </div>
        )
    }
}