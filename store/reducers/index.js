import { combineReducers } from "@reduxjs/toolkit";
import productReducer from './products';
import cartReducer from './cart';
import ordersReducer from './orders'

export default combineReducers({
    products: productReducer,
    cart: cartReducer,
    orders: ordersReducer
})