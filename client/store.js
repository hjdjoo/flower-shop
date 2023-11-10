import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slices/cartSlice'
import orderSlice from "./slices/orderSlice";
// import customerAdminSlice from "./slices/customerAdminSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
    order: orderSlice
  }
})