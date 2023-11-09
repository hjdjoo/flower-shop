import React from 'react';
// import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ArrangementsContainer from './containers/ArrangementsContainer';
import OrderForm from './components/OrderForm.jsx';
import CartContainer from './containers/CartContainer.jsx';
import { addToCart } from './slices/cartSlice.jsx';
import { placeOrder, createOrder } from './slices/orderSlice.jsx';


const App = () => {

  // I think we can create our browser router here.
  // and we can use our router to direct people as they interact with the arrangements container.
  // and we can render the credit card "processing" component in place of the order form.

  // this is our dispatcher to update cart details.
  const dispatch = useDispatch();
  const handleAddToCart = (e, arrangementDetails) => {
    dispatch(addToCart(arrangementDetails));
  }
  // const handleRemoveFromCart = (e) => {
  // }
  // checkout button should load the order form.
  const cart = useSelector(state => state.cart);
  const order = useSelector(state => state.order)
  const orderDispatch = Object.assign({}, order)
  // console.log(cart)
  const handlePlaceOrder = async () => {
    // console.log(order.order_id)
    let total = 0;
    dispatch(placeOrder(order.order_id + 1))
    for (let item of cart) {
      total += Number(item.price);
    }
    orderDispatch.total = total;
    console.log(orderDispatch)
    const request = await fetch('/place_order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDispatch)
    })

    // const response = await request;
    // console.log(response);
  }
  // const handleSubmitOrder = () => {

  // }
  // add a handleChange function to automatically update the value stored in each field
  // which we will assign to props in an "order" object.
  const handleValChange = (e) => {
    const cacheObj = {}
    cacheObj[e.target.name] = e.target.value;
    dispatch(createOrder(cacheObj))
  }

  return (
    <>
      <header>
        <h2>This is the Flower Shop.</h2>
      </header>
      <div>
        <CartContainer />
        <br />
        <ArrangementsContainer onClick={handleAddToCart} />
        <br />
        <OrderForm onClick={handlePlaceOrder} onChange={handleValChange} />
      </div>
    </>
  )
}
export default App;