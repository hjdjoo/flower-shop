import React from "react";
import { createSlice } from "@reduxjs/toolkit";
// import Arrangement from "../components/Arrangement";


const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload)
    }
  }
})


export const { addToCart } = cartSlice.actions

export default cartSlice.reducer