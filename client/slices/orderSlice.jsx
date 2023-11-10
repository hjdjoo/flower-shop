import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: 'order',
  initialState: {},
  reducers: {
    createOrder: (state, action) => {
      state = Object.assign(state, action.payload)
    }
  }
})
export const { placeOrder, createOrder } = orderSlice.actions;

export default orderSlice.reducer;