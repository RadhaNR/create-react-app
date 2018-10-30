import React, { Component } from 'react';
import classHOC from './classHOC';
//import functionHOC from './functionHOC';

class UserPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="user-container" >
                <p>My name is {this.props.user}!</p>
            </div>
        )
    }

};
UserPage = classHOC(UserPage) // You can use Higher order component;
//UserPage = functionHOC(UserPage) // You can use Higher order function;

export default UserPage;