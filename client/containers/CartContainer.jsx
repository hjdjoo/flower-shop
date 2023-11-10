import React from "react";
import { useSelector } from "react-redux";
import Cart from "../components/Cart";
import CartButton from "../components/CartButton";
import Checkout from "../components/CheckOut";


const CartContainer = () => {

  const ordersArr = [];
  const orders = useSelector(state => state.cart)
  for (let i = 0; i < orders.length; i++) {
    const order = orders[i]
    // console.log(order)
    ordersArr.push(<Cart src={order.src} name={order.name} price={order.price} />)
  }

  return (
    <div className="cartContainer">
      <CartButton />
      {ordersArr}
    </div>
  )
};


export default CartContainer;