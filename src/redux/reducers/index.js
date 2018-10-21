import { combineReducers } from 'redux';
import items from './items';
import cart from './cart';

/*
 *
 *  This file combine all reducers that exist into one file.
 *
 */

export default combineReducers({items, cart});