export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = (prodcut) => {
    return {type: ADD_TO_CART, product: prodcut}
};

export const removeFromCart = (productId) => {
    return {type: REMOVE_FROM_CART, pid: productId}
};