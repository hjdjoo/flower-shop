import React from 'react';
// import { useState } from "react";
import CustHome from './containers/CustHome'
import AdminHome from './containers/AdminHome'
import { Route, Routes } from 'react-router';


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<CustHome />} />
        <Route path='/admin/*' element={<AdminHome />} />
      </Routes>
    </>
  )
}
export default App;