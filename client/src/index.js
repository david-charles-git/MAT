/*
	Project : Materiom
	Author(s) : David Charles - AddMustard
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.scss';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //any

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
