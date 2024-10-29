import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart'
import CartItem from '../../models/cart-item';

const initialState = {
    items: {},
    totalAmount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            let updatedOrNewCartItem;

            if (state.items[addedProduct.id]) {
                //already have the item
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );
            } else {
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice
            };
        case REMOVE_FROM_CART:
            const selectCartItem = state.items[action.pid];
            const currentQty = selectCartItem.quantity;
            let updatedCartItems;
            if (currentQty > 1) {
                //need to reduce it, not erase it
                const updatedCartItem = new CartItem(
                    selectCartItem.quantity - 1,
                    selectCartItem.productPrice,
                    selectCartItem.productTitle,
                    selectCartItem.sum - selectCartItem.productPrice
                )
                updatedCartItems = {...state.items, [action.pid]: updatedCartItem}
            } else {
                updatedCartItems = { ...state.items };
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectCartItem.productPrice
            }
    }
    return state;
}