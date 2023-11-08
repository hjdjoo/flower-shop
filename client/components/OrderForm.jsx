import React from "react";

const OrderForm = props => {
  return (
    <>
      <div className="formContainer">
        <form className="orderForm" >
          <div className="custInfo">
            <p>Customer Information</p>
            <div className="name">
              <label htmlFor="cust_first">Sender's first name:</label>
              <input type="text" name="cust_first" />
              <label htmlFor="cust_last">Sender's last name:</label>
              <input type="text" name="cust_last" />
            </div>
            <div className="contact">
              <label htmlFor="cust_street">Billing street address:</label>
              <input type="text" name="cust_street" />
              <label htmlFor="cust_city">City:</label>
              <input type="text" name="cust_city" />
              <label htmlFor="cust_zip">Zip:</label>
              <input type="text" name="cust_zip" />
              <label htmlFor="cust_phone">Sender's phone number</label>
              <input type="text" name="cust_phone" />
            </div>

          </div>
          <div className="recipInfo">
            <p>Recipient Information</p>
            <div className="name">
              <label htmlFor="recip_first">Recipient's first name:</label>
              <input type="text" name="recip_first" />
              <label htmlFor="recip_last">Recipient's last name:</label>
              <input type="text" name="recip_last" />
            </div>
            <div className="contact">
              <label htmlFor="recip_street">Recipient's street address:</label>
              <input type="text" name="recip_street" />
              <label htmlFor="recip_city">City:</label>
              <input type="text" name="recip_city" />
              <label htmlFor="recip_zip">Zip:</label>
              <input type="text" name="recip_zip" />
              <label htmlFor="recip_phone">Recipient's phone number</label>
              <input type="text" name="recip_phone" />
            </div>
            <label htmlFor="message">Enter your message here:</label>
            <input type="text" name="message" />
            <br />
            <input type="button" value="Submit Order" />
          </div>
        </form>
      </div>
    </>

  )
};


export default OrderForm;