import React from "react";


const CcForm = () => {


  return (
    <>
      <div className="ccBox">
        <form name="ccForm">
          <label htmlFor="ccNum">Credit Card Number: </label>
          <input type="text" name="ccNum" />
          <label htmlFor="ccNum">Expiration: </label>
          <input type="text" name="ccNum" />
          <label htmlFor="ccNum">CCV Code: </label>
          <input type="text" name="ccNum" />
          <input type="button" onClick={() => console.log('clicked cc!')} />
        </form>
      </div>
    </>
  )
}

export default CcForm;