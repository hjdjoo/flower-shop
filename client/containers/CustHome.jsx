import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import ArrangementsContainer from './ArrangementsContainer';
import OrderForm from '../components/OrderForm.jsx';
import CartContainer from './CartContainer.jsx';
import { addToCart } from '../slices/cartSlice.jsx';
import { createOrder } from '../slices/orderSlice.jsx';
import { Link } from "react-router-dom";

const Home = () => {
  // this is our dispatcher to update cart details.
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const order = useSelector(state => state.order)

  const handleAddToCart = (e, arrangementDetails) => {
    dispatch(addToCart(arrangementDetails));
  }
  // checkout button should load the order form.
  const orderDispatch = Object.assign({}, order)
  // console.log(cart)
  const handlePlaceOrder = async () => {
    // console.log(order.order_id)
    let total = 0;
    for (let item of cart) {
      total += Number(item.price);
    }
    orderDispatch.total = total;
    console.log('App.jsx - orderDispatch: ', orderDispatch)
    // place "POST" request to the back end.
    try {
      const request = await fetch('/place_order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDispatch)
      })
    }
    catch {
      alert('Couldn\'t place order - please make sure no inputs are empty')
    }
  }
  // add a handleChange function to automatically update the value stored in each field
  // which we will assign to props in an "order" object.
  const handleValChange = (e) => {
    const cacheObj = {}
    cacheObj[e.target.name] = e.target.value;
    dispatch(createOrder(cacheObj))
  }

  // const handleSubmitOrder = () => {

  // }
  return (
    <>
      <header>
        <h2>This is the Flower Shop.</h2>
        <Link to="/admin" style={{ padding: 5 }} id="adminLink">Admin</Link>
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

export default Home;