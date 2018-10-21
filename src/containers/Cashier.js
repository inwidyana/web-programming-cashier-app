import { connect } from 'react-redux';
import { buyItem } from "../redux/actions";
import Cashier from '../Cashier';

const getItemsMatch = (items, name) => items.filter(item => item.name.indexOf(name) !== -1);
const getItemById = (items, name) => items.find(item => item.name === name);

const mapStateToProps = state => ({
    cart: state.cart,
    itemsMatch: (name) => getItemsMatch(state.items, name),
});

const mapDispatchToProps = dispatch => ({
    buy: (id, quantity) => dispatch(buyItem(id, quantity)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cashier);