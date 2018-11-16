import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import { getData } from '../api/api';

export default class Ajax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount ...');
        getData().then(response => {
            console.log(response);
            this.setState({ userList: response.data.data });
        });
    }

    render() {
        console.log("ajax render", this.state)
        return (
            <div>
                <p>No of user is : {this.state.userList.length}</p>
                <User user={this.state.userList} />
            </div>
        )
    }
}