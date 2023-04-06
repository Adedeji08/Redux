/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 26/01/2023 - 16:06:06
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 26/01/2023
    * - Author          : 
    * - Modification    : 
**/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { store } from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
