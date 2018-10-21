import { connect } from 'react-redux';
import Cart from '../Cart';

const itemFindById = (items, id) => items.find(item => item.id === id);

const mapStateToProps = state => ({
    cart: state.cart,
    getItem: (id) => itemFindById(state.items, id),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart);