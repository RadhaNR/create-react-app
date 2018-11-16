import React, { Component } from 'react';

export default class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'HCL',
            search: ''
        }
        this.es5FunClick = this.es5FunClick.bind(this);
    }

    es5FunClick() {
        console.log("es5 function click", this.state.name)
    }

    delete = () => {
        console.log('deleting all', this.state.name);
        this.props.history.push('/productList');
    }
    deleteRow = (id, evt) => {
        console.log(id, evt)
    }

    handleSearch = (event) => {
        console.log(event.target.value);

        // bad way of updating state
        // this.state.search = event.target.value;
        // this.forceUpdate();

        // good way of updating state
        this.setState({ search: event.target.value });
    }

    render() {
        console.log('Calling render method...........')
        return (
            <div>

                <button onClick={this.delete} id="btn1">Click</button><br /><br />

                <button onMouseEnter={(event) => this.deleteRow(123, event)} id="btn2">Mouse Enter Event</button><br /><br />

                <button onClick={this.es5FunClick} id="btn3">ES5 function</button><br /><br />

                <input type="text" value={this.state.search} name="search" placeholder="Enter text" onChange={this.handleSearch} id="search"/>
            </div>
        );
    }
}