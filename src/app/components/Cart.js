import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as cartAction from '../actions/cartAction';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps.", nextProps)
        this.setState({ cartList: nextProps.cart });
    }

    componentDidMount() {
        console.log("in did mount", this.props.cart);
        this.setState({ cartList: this.props.cart });
    }

    removeFromCart = (item) => {
        this.props.actions.removeFromCart(item.id);
    }

    emptyCart = () => {
        this.props.actions.emptyCart();
    }

    render() {
        console.log("cart rednering...")
        return (
            <div>
                <p className="itemsCount">No. of item present in cart is - {this.state.cartList.length}</p><br />
                {
                    (this.state.cartList.length > 0) ?
                        <div><table className="table table-striped">
                            <thead>
                                <tr>
                                    <td>Product Id</td>
                                    <td>Product Name</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cartList.map((item, i) => {
                                        return <tr key={i}><td><div>{item.id}</div></td><td>{item.name}</td><td><button onClick={() => this.removeFromCart(item)}>Remove from Cart</button></td></tr>
                                    })
                                }
                            </tbody>
                        </table>
                            <br />
                            <button onClick={this.emptyCart}>Clear Cart</button>
                        </div>
                        : null
                }


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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);