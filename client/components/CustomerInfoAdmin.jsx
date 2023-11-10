import React from "react";


const CustomerInfo = () => {

  const handleUpdate = async () => {
    const customerInputs = document.querySelectorAll('.custInfo input')
    const newDetails = []
    customerInputs.forEach(el => newDetails.push(el.value))
    const response = await fetch('/find_customer', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDetails)
    })
    console.log(response);
  }

  return (
    <div >
      <p>Customer Information</p>
      <div className="custInfo">
        <label htmlFor="cust_first">Customer first name:</label>
        <input type="text" name="cust_first" />
        <label htmlFor="cust_last">Customer last name:</label>
        <input type="text" name="cust_last" />
        <br />
        <label htmlFor="cust_street">Billing street address:</label>
        <input type="text" name="cust_street" />
        <label htmlFor="cust_city">City:</label>
        <input type="text" name="cust_city" />
        <label htmlFor="cust_zip">Zip:</label>
        <input type="text" name="cust_zip" />
        <label htmlFor="cust_phone">Customer's phone number</label>
        <input type="text" name="cust_phone" />
        <label htmlFor="cust_phone">Customer ID</label>
        <input type="button" name="cust_phone" />
      </div>
      <div>
        <button onClick={handleUpdate}>Update Customer</button>
        <button>Delete Customer</button>
      </div>
    </div>

  )
}

export default CustomerInfo;