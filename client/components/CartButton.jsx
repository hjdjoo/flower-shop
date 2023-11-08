import React from "react";



const CartButton = props => {

  return (
    <>
      <div>
        <button type="button"><img id="cartButton" src={require('../docs/assets/images/shopping-cart.png')} alt="https://www.goodfreephotos.com/albums/vector-images/shopping-cart-vector-clipart.png" /></button>
      </div>
    </>
  )

}

export default CartButton;