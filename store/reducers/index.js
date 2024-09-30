import { combineReducers } from "@reduxjs/toolkit";
import productReducer from './products';
import cartReducer from './cart';

export default combineReducers({
    products: productReducer,
    cart: cartReducer
})