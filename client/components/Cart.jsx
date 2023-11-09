import React from "react";


const Cart = props => {

  return (
    <div className="orderContainer">
      <img className="cartImage" src={props.src} />
      <p className="cartText">{`${props.name}: $${props.price}`}</p>
      <button type="button" className="removeCartBtn">Remove from Cart</button>
    </div>
  )
}

export default Cart;