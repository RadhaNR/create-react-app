import React, { Component } from 'react';
import axios from 'axios';

class Child extends Component {
    constructor(props) {
        console.log('init of child')
        super(props);
        this.state = {
            text: 0,
            show: true,
            color: '',
            productList:[]
        }

    }
    componentWillMount() {
        console.log('componentWillMount of child');
        if (this.props.data < 5) {
            this.setState({ show: false, color: 'red' })
        } else if (this.props.data > 5) {
            this.setState({ show: true, color: 'green' })
        } else {
            this.setState({ show: true })
        }
    }

    componentDidMount() {
        this.getData().then(response => {
            console.log(response.data);
            this.setState({ productList: response.data });
        });
    }

    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get('https://nodesense.github.io/api/products.json').then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    }


    render() {
        console.log(this.props.data)
        return (
            <div style={{ color: this.state.color }}>
                User: {this.state.productList.length}
                {(this.state.show) ? <div>Child  -- {this.props.data} --- {this.props.second} </div> : null}

            </div>
        )
    }
}

// const Child = (props) => {
//     console.log(props)
//     return(
//         <div>helloo {props.data}</div>
//     )
// }

export default Child;



