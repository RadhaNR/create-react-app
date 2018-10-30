import React, { Component } from 'react';
import AjaxHOC from './AjaxHOC';
import User from './User';

class UserComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="user-container" >
                <p>No of Users : {this.props.data.length} !</p>
                <User user={this.props.data} />
            </div>
        )
    }

};
UserComponent = AjaxHOC(UserComponent, { url: 'https://reqres.in/api/users', isUser: true });

export default UserComponent;