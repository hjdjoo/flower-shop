import React from 'react';
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import './scss/index.scss';
import App from './App.jsx'
import store from './store';
import { Provider } from 'react-redux';

// console.log('hit index.js')



const root = createRoot(document.getElementById('root'))
// console.log('index.js - root: ', root);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
