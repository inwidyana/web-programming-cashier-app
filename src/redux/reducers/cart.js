/*
 *
 *  This file serves as reducers definition for the app.
 *  Please do not clutter reducers with action definition.
 *
 */

// This arrow function describe what each action done to item will do.
const cart = (state = [], action) => {
    switch (action.type) {
        // When BUY_ITEM is performed, we add a new item to the store.
        case 'BUY_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    quantity: action.quantity,
                }
            ];
        default:
            return state;
    }
};

export default cart;