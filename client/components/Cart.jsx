import React from "react";


const Cart = props => {

  return (
    <div className="cartContainer">
      <div className="cartOrder">
        <img className="cartImage" src={props.src} />
        <p>{`${props.name}: ${props.price}`}</p>
      </div>
    </div>
  )
}

export default Cart;