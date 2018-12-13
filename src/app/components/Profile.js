import React, { Component } from 'react';
import Axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 1230
            
        }

    }

    componentDidMount() {
        console.log('in profle componentDidMount');
        this.clearInterval = setInterval(() => {
            this.textChange();
        }, 1000)
    }
    textChange = () => {
        console.log('in textChange')
        this.setState({ text: Math.random() });
    }

    shouldComponentUpdate(newProps, newState) {
        // console.log(newState.text, this.state.text)
        if (newState.text !== this.state.text) {
            return true;
        } else {
            return false;
        }
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!....', nextProps, nextState, this.state.text);
        // nextState --- new value, this.state.text --- current value(rendered on the screen);
        // object - {newDate: nextState, prevDate: this.state.text}
        // call server - to update the databased - mail

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!.....', prevState, this.state.text);
        // show some kind of notifaction to user: task date changed from 1234 to 0.45
    }

    componentWillUnmount() {    
        console.log('Component WILL UNMOUNT!.....');
        clearInterval(this.clearInterval);
    }

    render() {
        console.log("Profile rendering", this.state.text)
        return (
            <div>
                Profile Component -- {this.state.text}
                <button onClick={this.textChange}>Click</button>
            </div>
        )
    }
}

export default Profile;