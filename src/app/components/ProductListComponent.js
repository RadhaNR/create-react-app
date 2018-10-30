import React, { Component } from 'react';
import AjaxHOC from './AjaxHOC';
import Product from './Product';

class ProductListComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="user-container" >
                <p>Number of Products : {this.props.data.length} !</p>
                <Product list={this.props.data} />
            </div>
        )
    }

};
ProductListComponent = AjaxHOC(ProductListComponent, {url: 'https://nodesense.github.io/api/products.json'});

export default ProductListComponent;