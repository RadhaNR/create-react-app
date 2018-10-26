import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            userList: [
                { first_name: 'ABC', sapId: 123434 },
                { first_name: 'XYZ', sapId: 123434 },
                { first_name: 'PQR', sapId: 234235 }
            ]
        }
    }

    selectedUser = (user) => {
        console.log(user);
    }

    render() {
        return (
            <div>
                <p>Selected User : </p>
                <User user={this.state.userList} title="List of User" 
                    noOfItems={this.state.userList.length} 
                    selectedUser={this.selectedUser}/>
            </div>
        )
    }
}

export default UserList;