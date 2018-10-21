import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {discount: 0, subtotal: 0, total: 0, payment: 0, change: 0};

        this.discountChange = this.discountChange.bind(this);
        this.paymentChange = this.paymentChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    discountChange(event) {
        this.setState({discount: event.target.value});
    }

    paymentChange(event) {
        this.setState({payment: event.target.value});
    }

    handleChange(event) {
        if(this.state.payment > this.state.total) {
            this.setState({change: (this.state.payment - this.state.total)});
        }
        else {
            this.setState({change: 'Not enough money'})
        }
        event.preventDefault();
    }

    handleSubmit(event) {
        this.setState({total: (this.state.subtotal * (100 - this.state.discount)/100)});
        event.preventDefault();
    }

    render() {
        var items = this.props.cart;
        var totalPrice = 0;
        var listItems = items.map((item) => {
            var quantity = Number(item.quantity);
            item = this.props.getItem(item.id);
            totalPrice += (Number(item.price) * quantity);
            return (
                <tr>
                    <td>
                        {item.name}
                    </td>
                    <td>
                        {item.price}
                    </td>
                    <td>
                        {quantity}
                    </td>
                    <td>
                        {Number(item.price) * quantity}
                    </td>
                </tr>
            );
        });
        this.state.subtotal = totalPrice;
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Item Name</td>
                            <td>Price per Unit</td>
                            <td>Quantity</td>
                            <td>Total Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Sub Total: </td>
                            <td>{totalPrice}</td>
                        </tr>
                        <tr>
                            <td>Discount</td>
                            <td>
                                <form onSubmit={this.handleSubmit}>
                                    <input className="form-control" onKeyUp={this.handleSubmit} onChange={this.discountChange} value={this.state.discount}/>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>
                                {this.state.total}
                            </td>
                        </tr>
                        <tr>
                            <td>Payment</td>
                            <td>
                                <form onSubmit={this.handleChange}>
                                    <input className="form-control" onKeyUp={this.handleChange} onChange={this.paymentChange} value={this.state.payment}/>
                                </form>
                            </td>
                        </tr>
                        <tr>
                            <td>Change</td>
                            <td>
                                {this.state.change}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default Cart;