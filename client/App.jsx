import React from 'react';
// import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ArrangementsContainer from './containers/ArrangementsContainer';
import OrderForm from './components/OrderForm.jsx';
import CartContainer from './containers/CartContainer.jsx';
import { addToCart } from './slices/cartSlice.jsx';

const App = () => {

  // I think we can create our browser router here.
  // and we can use our router to direct people as they interact with the arrangements container.
  // and we can render the credit card "processing" component in place of the order form.

  // this is our dispatcher to update cart details.
  const dispatch = useDispatch();
  const handleAddToCart = (e, orderDetails) => {
    dispatch(addToCart(orderDetails));
  }
  // I think we should also have a dispatcher (and therefore another component slice) for the order form and cc info.


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
        <OrderForm />
      </div>
    </>
  )
}
export default App;