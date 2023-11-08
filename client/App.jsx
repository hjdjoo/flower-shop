import React from 'react';
import { useState } from "react";

import ArrangementsContainer from './containers/ArrangementsContainer';
import OrderForm from './components/OrderForm.jsx';

const App = () => {

  // I think we can create our browser router here.
  // and we can use our router to direct people as they interact with the arrangements container.
  // and we can render the credit card "processing" component in place of the order form.



  return (
    <>
      <header>
        <h2>This is the Flower Shop.</h2>
      </header>
      <div>
        <ArrangementsContainer />
        <OrderForm />
      </div>
    </>
  )
}
export default App;