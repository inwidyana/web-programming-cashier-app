/*
 *
 *  This file serves as the action creators for the app.
 *  Please do not clutter action creator with state mutation.
 *
 */

// This id will uniquely identify each item in the store.
let nextItemId = 1;

// This arrow function will define action to add item to the store.
export const addItem = (name, price) => ({
    type: 'ADD_ITEM',
    id: nextItemId++,
    name,
    price,
});

// This arrow function will define action to remove item from the store.
export const removeItem = id => ({
   type: 'REMOVE_ITEM',
   id,
});

export const buyItem = (id, quantity) => ({
    type: 'BUY_ITEM',
    id,
    quantity,
});