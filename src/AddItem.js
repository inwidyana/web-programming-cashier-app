import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', price: ''};

        this.nameChange = this.nameChange.bind(this);
        this.priceChange = this.priceChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.props.add('Indomie', 2500);
        this.props.add('Sarimie', 3000);
        this.props.add('Indomie Jumbo', 3500);
        this.props.add('Extra Joss', 3000);
    }

    nameChange(event) {
        this.setState({name: event.target.value});
    }

    priceChange(event) {
        this.setState({price: event.target.value});
    }

    handleSubmit(event) {
        this.props.add(this.state.name, this.state.price);
        event.preventDefault();
    }

    render() {
        var items = this.props.items;
        var listItems = items.map((item) =>
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>
        );

        return (
            <div>
                <button className="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                    Menu List
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Menu List</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listItems}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        <input className="form-control" type="text" value={this.state.name} onChange={this.nameChange} placeholder="Please enter item name..."/>
                                    </label>
                                    <label>
                                        <input className="form-control" type="text" value={this.state.price} onChange={this.priceChange} placeholder="Please enter item price..."/>
                                    </label>
                                    <input className="btn btn-success" type="submit" value="Add to menu" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddItem;