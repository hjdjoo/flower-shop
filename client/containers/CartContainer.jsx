import React from "react";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";
import CartButton from "../components/CartButton";
import Checkout from "../components/CheckOut";


const CartContainer = props => {

  const ordersArr = [];
  const orders = useSelector(state => state.cart)
  for (let order of orders) {
    console.log(order)
    ordersArr.push(<Cart src={order.src} name={order.name} price={order.price} />)
  }

  return (
    <div>
      <CartButton />
      {ordersArr}
      <Checkout />
    </div>
  )

};


export default CartContainer;