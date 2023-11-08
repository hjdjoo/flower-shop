import React from 'react';
import OrderForm from './OrderForm';

// arrangement presentation component

const Arrangement = props => {

  const orderDetails = {
    name: props.text,
    price: props.price,
    src: props.src
  }
  // console.log(orderDetails)

  return (
    <div className='arrangement'>
      <div className='imageBox'>
        <input type='image' src={props.src} className='imageButton'></input>
        <span className='arrangmentName'>{props.text} </span>
        <span className='arrangmentPrice'> {`$${props.price}`}</span>
        <div><button type='button' className='addToCart' onClick={(e) => props.onClick(e, orderDetails)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Arrangement;