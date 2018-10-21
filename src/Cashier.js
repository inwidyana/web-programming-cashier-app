import React, { Component } from 'react';

class Cashier extends Component {
    constructor(props) {
        super(props);
        this.state = {id: '', name: '', quantity: ''};

        this.nameChange = this.nameChange.bind(this);
        this.quantityChange = this.quantityChange.bind(this);

        this.handleSuggestion = this.handleSuggestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    nameChange(event) {
        var id = this.props.itemsMatch(event.target.value)[0].id;
        this.setState({id: id, name: event.target.value});
    }

    quantityChange(event) {
        this.setState({quantity: event.target.value});
    }

    handleSuggestion(event) {
        var id = this.props.itemsMatch(event.target.innerHTML)[0].id;
        this.setState({id: id, name: event.target.innerHTML});
    }

    handleSubmit(event) {
        this.props.buy(this.state.id, this.state.quantity);
        event.preventDefault();
    }

    render() {
        var items = this.props.itemsMatch(this.state.name);
        var listItems = items.map((item) =>
            <a className="dropdown-item" href="#" onClick={this.handleSuggestion}>{item.name}</a>
        );

        return (
            <div className="w-100">
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control dropdown-toggle w-100" data-toggle="dropdown"
                           aria-haspopup="true" aria-expanded="false" onChange={this.nameChange} value={this.state.name} placeholder="Enter item name..."/>
                    <div className="dropdown-menu w-100">
                        {listItems}
                    </div>
                    <input className="form-control w-100 mt-2" onChange={this.quantityChange} value={this.state.quantity} placeholder="Enter item quantity..."/>
                    <button type="submit" className="btn btn-success mt-2">Add to Cart</button>
                </form>
            </div>
        );
    }
}

export default Cashier;