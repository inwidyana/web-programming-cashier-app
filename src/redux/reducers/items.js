/*
 *
 *  This file serves as reducers definition for the app.
 *  Please do not clutter reducers with action definition.
 *
 */

// This arrow function describe what each action done to item will do.
const items = (state = [], action) => {
    switch (action.type) {
        // When ADD_ITEM is performed, we add a new item to the store.
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    price: action.price,
                }
            ];
        //  When REMOVE_ITEM is performed, we remove an item from the store.
        case 'REMOVE_ITEM':
            return state.map(item =>
                // For an item which id match, we replace the item with an empty array(remove).
                (item.id === action.id) ? {} : item
            );
        default:
            return state;
    }
};

export default items;