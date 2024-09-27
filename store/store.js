import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/products'

export default configureStore({
  reducer: {
    products: productReducer
  },
})