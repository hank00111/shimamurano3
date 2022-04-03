import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import App2 from './App2';
import Footer from './footer';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
const roo1 = ReactDOM.createRoot(document.getElementById("root1"));
root.render(
  <React.StrictMode>    
    <App />
  </React.StrictMode>
);
roo1.render(
  <React.StrictMode>    
    <Footer />
    <App2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
