import { connect } from 'react-redux';
import { addItem, removeItem } from "../redux/actions";
import AddItem from '../AddItem';


const mapStateToProps = state => ({
    items: state.items,
});

const mapDispatchToProps = dispatch => ({
    add: (name, price) => dispatch(addItem(name, price)),
    remove: id => dispatch(removeItem(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddItem);