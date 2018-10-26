import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props)
    }
    addToCart = (itemAdded) => {
        console.log(itemAdded);
        this.props.cartSelected(itemAdded);
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Product Id</td>
                            <td>Product Name</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((item, i) => {
                            return <tr key={i}><td><div>{item.id}</div></td>
                                    <td>{item.name}</td>
                                    <td><button onClick={() => this.addToCart(item)}>Add to Cart</button></td></tr>
                        })}
                    </tbody>
                </table>
            </div >
        )
    }
}

export default Product;