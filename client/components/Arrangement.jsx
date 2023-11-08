import React from 'react';
import OrderForm from './OrderForm';

// arrangement presentation component

const Arrangement = props => {


  return (
    <div className='arrangement'>
      <div className='imageBox'>
        <input type='image' src={props.src} className='imageButton'></input>
        <span className='arrangmentName'>{props.text} </span>
        <span className='arrangmentPrice'> {`$${props.price}`}</span>
        <div><button type='button' className='addToCart'>Add to Cart</button>
          <button type='button' className='checkout'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Arrangement;