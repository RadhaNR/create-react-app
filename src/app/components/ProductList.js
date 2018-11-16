import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as cartAction from '../actions/cartAction';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.getData().then(response => {
            console.log(response.data)
            this.setState({ list: response.data });
        });

    }

    cartSelected = (productSelected) => {
        console.log(productSelected);
        this.props.actions.addToCart(productSelected);
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
        return (
            <div>
                <Product list={this.state.list} cartSelected={this.cartSelected} />
            </div>
        )
    }
}

export const mapStateToProps = (state, nextProps) => {
    console.log(state)
    return {
        cart: state.cart
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(cartAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);