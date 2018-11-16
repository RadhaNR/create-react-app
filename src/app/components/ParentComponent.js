import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    courseName: 'ReactJs',
                    cost: 770
                },
                {
                    courseName: 'AngularJS',
                    cost: 770
                },
                {
                    courseName: 'VueJS',
                    cost: 880
                },
                {
                    courseName: 'PolymerJS',
                    cost: 700
                }
            ],
            selectedItem: {}
        }
        console.log("in constructor")
    }
    itemSelected = (item) => {
        console.log(item);
        this.setState({ selectedItem: item });
    }

    componentWillUnmount() {
        console.log('com will unmount..... Parent comp')
    }

    render() {
        return (
            <div>
                <p>This is parent Component. it has {this.state.list.length} items</p>
                {this.state.selectedItem.courseName ? <p><b>Item selected is : {this.state.selectedItem.courseName}</b></p>: null } 
                <ChildComponent list={this.state.list} itemSelected={this.itemSelected} />
            </div>

        )
    }
}