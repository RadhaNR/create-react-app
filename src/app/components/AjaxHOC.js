import React, { Component } from 'react';
import axios from 'axios';

export default function AjaxHOC(WrappedComponent, input) {
    // return class HOC extend Component name of the component is options
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            };
        }
        componentDidMount() {
            this.getData().then(response => {
                console.log(response)
                let data = input.isUser ? response.data.data:response.data;  
                this.setState({ data  });
            });  
            
        }
    
        getData = () => {
            return new Promise((resolve, reject) => {
                axios.get(input.url).then(function (response) {
                    resolve(response)
                }).catch(function (error) {
                    reject(error)
                });
            });
        }
        render() {
            return (
                <WrappedComponent data={this.state.data} />
            );
        }
    }
}
