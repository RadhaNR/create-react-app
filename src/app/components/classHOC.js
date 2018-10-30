import React, { Component } from 'react';

export default function classHOC(WrappedComponent) {
    //const classHOC = (WrappedComponent) => {
    // return class HOC extend Component name of the component is options
    return class extends Component {  
        constructor(props) {
            super(props);
            this.state = {
                user: localStorage.getItem("test")
            };
        }

        render() {
            return (
                <WrappedComponent user={this.state.user} />
            );
        }
    }
}
//export default classHOC;