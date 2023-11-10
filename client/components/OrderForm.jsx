import React from "react";
import { useSelector } from "react-redux";

const OrderForm = props => {

  // useSelector(state => console.log(state.order))

  return (
    <>
      <div className="formContainer">
        <form className="orderForm" >
          <div className="custInfo">
            <p>Customer Information</p>
            <div className="name">
              <label htmlFor="cust_first">Sender's first name:</label>
              <input type="text" name="cust_first" onChange={props.onChange} />
              <label htmlFor="cust_last">Sender's last name:</label>
              <input type="text" name="cust_last" onChange={props.onChange} />
            </div>
            <br />
            <div className="contact">
              <label htmlFor="cust_street">Billing street address:</label>
              <input type="text" name="cust_street" onChange={props.onChange} />
              <label htmlFor="cust_city">City:</label>
              <input type="text" name="cust_city" onChange={props.onChange} />
              <label htmlFor="cust_zip">Zip:</label>
              <input type="text" name="cust_zip" onChange={props.onChange} />
              <label htmlFor="cust_phone">Sender's phone number</label>
              <input type="text" name="cust_phone" onChange={props.onChange} />
            </div>
          </div>

          <div className="recipInfo">
            <p>Recipient Information</p>
            <div className="name">
              <label htmlFor="recip_first">Recipient's first name:</label>
              <input type="text" name="recip_first" onChange={props.onChange} />
              <label htmlFor="recip_last">Recipient's last name:</label>
              <input type="text" name="recip_last" onChange={props.onChange} />
            </div>
            <br />
            <div className="contact">
              <label htmlFor="recip_street">Recipient's street address:</label>
              <input type="text" name="recip_street" onChange={props.onChange} />
              <label htmlFor="recip_city">City:</label>
              <input type="text" name="recip_city" onChange={props.onChange} />
              <label htmlFor="recip_zip">Zip:</label>
              <input type="text" name="recip_zip" onChange={props.onChange} />
              <label htmlFor="recip_phone">Recipient's phone number</label>
              <input type="text" name="recip_phone" onChange={props.onChange} />
            </div>
            <br />
            <label htmlFor="message">Enter your message here:</label>
            <input type="text" name="message" onChange={props.onChange} />
            <br />
            <input type="button" value="Submit Order" onClick={(e) => props.onClick(e)} />
          </div>
        </form>
      </div>
    </>

  )
};


export default OrderForm;