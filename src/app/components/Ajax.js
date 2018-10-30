import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

export default class Ajax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        this.getData().then(response => {
            this.setState({ userList: response.data.data });
        });  
        
    }

    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get('https://reqres.in/api/users').then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });
        });
    }

    render() {
        return (
            <div>
                No of user is : {this.state.userList.length}
                <User user={this.state.userList}/>
            </div>
        )
    }
}