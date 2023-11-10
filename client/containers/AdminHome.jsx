import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, Link } from "react-router";
import CustomerLookup from '../components/CustomerLookup'



const AdminHome = () => {

  const dispatch = useDispatch();

  const custLookup = async (e) => {
    const queryVal = e.target.parentNode.childNodes[1].value;
    console.log(queryVal);
    const response = await fetch(`/find_customer/${queryVal}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsed = await response.json();
    console.log(parsed);
    const customerInputs = document.querySelectorAll('.custInfo input')
    const parsedVals = Object.values(parsed);
    console.log(parsedVals)
    customerInputs.forEach((el, i) => {
      el.value = parsedVals[i];
    });
  }

  return (
    <div>
      <h1>The Flower Shop Admin Page</h1>
      <Routes>
        <Route path='/' element={<CustomerLookup onClick={custLookup} />} />
      </Routes>
    </div>
  )
}

export default AdminHome;