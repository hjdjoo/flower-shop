import React from "react";
import { Link } from "react-router-dom";
import CustomerInfo from "./CustomerInfoAdmin";

const CustomerLookup = (props) => {




  return (
    <>
      <div>
        <label htmlFor="customerLookup"></label>
        <input type="text" name="customerLookup" placeholder="Enter a name or phone number" />
        <button type='button' onClick={(e) => props.onClick(e)}>Submit</button>
        <CustomerInfo />
      </div>
    </>
  )
}


export default CustomerLookup;