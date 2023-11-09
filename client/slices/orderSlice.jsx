import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: 'order',
  initialState: { order_id: 1 },
  reducers: {
    createOrder: (state, action) => {
      state = Object.assign(state, action.payload)
    },
    placeOrder: (state, action) => {
      state.order_id = action.payload;
    }
  }
})
export const { placeOrder, createOrder } = orderSlice.actions;

export default orderSlice.reducer;